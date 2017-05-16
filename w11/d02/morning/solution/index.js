var Alexa = require('alexa-sdk');
var https = require('https');

var truncateString = function(str, length) {
    if (length > 0) {
      return str.slice(0, length);
    }
}

var handlers = {
  'LaunchRequest': function() {
      this.emit('WikiRandomIntent');
  },
  'WikiRandomIntent': function() {
      var options = {
        host: 'en.wikipedia.org',
        port: 443,
        path: '/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts'
      };
      var self = this;

      https.get(options, function(resp){
        var str = '';

        resp.on('data', function(chunk){
          str += chunk;
        });

        resp.on('end', function() {
          var result = JSON.parse(str);
          var firstKey = Object.keys(result.query.pages)[0];
          var imgSrc = null;
          
          console.log('Response: ', result);
          console.log('Object key: ', firstKey);

          // Alexa does not allow results over 8000 characters
          var cardTitle = result.query.pages[firstKey].title;
          var speechOutput = truncateString(result.query.pages[firstKey].extract.replace(/(<([^>]+)>)/ig, ''), 7999);

          if (result.query.pages[firstKey].thumbnail) {
            imgSrc = result.query.pages[firstKey].thumbnail.source;
          }

          self.emit(':tell', speechOutput);
          self.emit(':tellWithCard', speechOutput, cardTitle, speechOutput, imgSrc);
        });
      }).on("error", function(e){
        console.log("Got error: " + e.message);
      });
  },
  'AMAZON.HelpIntent': function() {
      this.emit(':ask', 'You can ask me to surprise you with a random wiki article.', 'Ask for a random wiki article.');
  }
};


exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = 'amzn1.ask.skill.b73dd5c7-d655-4a0f-803b-34c73e211d50';
  alexa.registerHandlers(handlers);
  alexa.execute();
};
