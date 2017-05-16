# Alexa with AWS Lambda Functions

### Prerequisites

- [AWS Account](https://aws.amazon.com/)
- [Developer Portal Account](https://developer.amazon.com/edw/home.html)
- Alexa-enabled device for testing (Optional)
  * Companion App - http://alexa.amazon.com/

## Why Develop for Alexa?

- Millions of devices sold to date (Estimated 11 million)
- Top sellers on Amazon during Christmas 2016
- Companies need developers to build out skills (e.g. Starbucks)

## How Alexa Works

When a user speaks to an Alexa-enabled device, the speech is streamed to the Alexa service in the cloud. Alexa recognizes the speech, determines what the user wants, and then sends a structured request to the particular skill that can fulfill the user’s request. All speech recognition and conversion is handled by Alexa in the cloud.

Every Alexa skill has an interaction model defining the words and phrases users can say to make the skill do what they want. The type of skill you build dictates the interaction model that Alexa uses to communicate with your users.

![Alexa Architecture](https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/ask-customskills/ASKArchitecture._TTH_.png)

## Skill APIs

- [Smart Home Skill API](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/understanding-the-smart-home-skill-api) - Enables you to create skills to control cloud-connected devices
- [Flash Briefing Skill API](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/understanding-the-flash-briefing-skill-api) - Provides content for a customer's Flash Briefing, so when you create a Flash Briefing skill, you have a chance for your original content to reach customers on a daily basis.

## Custom Skills

* Define `intents`, which are the requests the skills can handle. You might want users to be able to: 
  - Look up tide information
  - Order a pizza
  - Request a taxi
* Define the actual words users can say to make (or invoke) those requests. This is the interaction model, and it provides the `voice user interface` by which users communicate with the skill.
  - **Get high tide for Seattle** (this phrase would be mapped to a TideRequest intent)
  - **Order a large pepperoni pizza** (this phrase would be mapped to an OrderPizza intent)
  - **Order a car** (this phrase would be mapped to an OrderCar intent)
* The name Alexa uses to identify your skill is called the `invocation name`. Users include this when making a request. For example, the skill for looking up tides could be called “tide pooler”.

Example requests from users: 

- Alexa, get high tide for Seattle from Tide Pooler
- Alexa, ask Recipes how do I make an omelet?
- Alexa, ask Daily Horoscopes about Taurus
- Alexa, give ten points to Stephen using Score Keeper

# WikiWiki

Let's develop our own custom skill named **WikiWiki** that will enlighten us with a random article from Wikipedia whenever someone asks for it. 

## Design the Voice User Interface

- [Defining the Voice User Interface](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface)
- [Voice Design Best Practices](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-best-practices)
- [Understanding How Users Interact with Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/understanding-how-users-interact-with-skills)
- [Choose Invocation Name](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill)

Create the intent schema. This is a JSON structure which declares the set of requests (“intents”) our service can accept and handle.

```js
{
  "intents": [
    {
      "intent": "WikiRandomIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}
```

> Intents can optionally support named parameters with `slots`. Alexa will pass these values to the Lambda function when invoked.

Let's create a set of sample utterances that maps to our intent. These are the phrases users say when interacting with our skill.

```
WikiRandomIntent get a random wiki article
WikiRandomIntent enlighten me
WikiRandomIntent surprise me
WikiRandomIntent tell me something I need to know
WikiRandomIntent tell me something good
```

We don't need to define a slot for this app, but if we did we *could* create a sample utterance like so:

```
WikiRandomIntent find a wiki article about {Subject}
```

If we were using Node, we could then access `slot` variables like so: 

```js
intent.slots.Subject.value
```

We now need to choose an invocation name. The invocation name is how Alexa knows which skill to send the request to. In our case, we'll choose the invocation name of `Wiki Wiki`

## Register the Skill

- [Registering and Managing Custom Skills in the Developer Portal](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/registering-and-managing-alexa-skills-in-the-developer-portal)

1. Head over to the [Alexa section of the Developer Portal](https://developer.amazon.com/edw/home.html)
2. Click "Get Started" on the Alexa Skills Kit section
3. Click "Add a New Skill"

In the skill details form: 

* For **Skill Type**, leave the default value of `Custom Interaction Model`
* For **Name**, put in `Wiki Wiki`
* For **Invocation Name**, put in `Wiki Wiki`

4. Click the "Save" button

## Set Up the Interaction Model

1. Click on "Interaction Model" on the left hand menu 
2. Enter the intent schema we defined earlier 
3. Enter the sample utterances we defined earlier 
4. Hit the "Save" button 

## Set Up Our Lambda Function 

1. Head over to the [AWS Management Console](https://console.aws.amazon.com/lambda/home)
2. Click "Create a Lambda Function"
3. Choose one of the Alexa starter kits as your blueprint, for example `alexa-skill-kit-sdk-factskill`
4. Configure our trigger by clicking on the empty box and selecting "Alexa Skills Kit"
5. Click "Next"
6. For the **Name**, enter `wikiWikiRandom`
7. Make sure to select "Node.js" as our runtime

Enter the following starter code inline: 

```js
var Alexa = require('alexa-sdk');

var handlers = {
  'LaunchRequest': function() {
      this.emit('WikiRandomIntent');
  },
  'WikiRandomIntent': function() {
      this.emit(':tell', 'This will be some random and interesting article.');
  },
  'AMAZON.HelpIntent': function() {
      this.emit(':ask', 'You can ask me to surprise you with a random wiki article.', 'Ask for a random wiki article.');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = ''; // Optionally enter our Alexa app ID
  alexa.registerHandlers(handlers);
  alexa.execute();
};
```

8. Create or use an existing role with the **AWSLambdaBasicExecutionRole** policy 
9. Click "Next"
10. Click "Create function"

On the top right of the success page you'll see the **ARN** that we'll need in a little bit. An ARN is a unique identifier for any resource on AWS. It'll look something like the following: 

> arn:aws:lambda:us-east-1:385360169357:function:wikiWikiRandom

## Configure the Skill

1. Click on "Configuration" on the left hand menu 
2. For Endpoint, choose **AWS Lambda ARN**. Click the checkbox for "North America" for closest geographic region 
4. Enter the ARN for our Lambda function in the empty textbox
5. Hit "Next"

We're now ready to write our Lambda function! 

## Getting the Data

Before we start writing any code, let's look at the API endpoint for getting a random Wikipedia article and the response format:

> https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts|pageimages

Note that a thumbnail will not always appear. 

```json
{
  "batchcomplete": "",
  "continue": {
    "grncontinue": "0.191143582002|0.191143844641|12875949|0",
    "continue": "grncontinue||"
  },
  "query": {
    "pages": {
      "47133328": {
        "pageid": 47133328,
        "ns": 0,
        "title": "Hypatima scopulosa",
        "extract": "<p><i><b>Hypatima scopulosa</b></i> is a moth in the Gelechiidae family. It was described by Meyrick in 1913. It is found in southern India.</p>\n<p>The wingspan is about 12 mm. The forewings are brown irregularly mixed with fuscous and sprinkled with whitish and with a small darker brown basal patch, and two small spots transversely placed in the disc beyond this. There is a suffused dark grey triangular blotch occupying the median third of the costa and reaching two-thirds across the wing, its apical portion with several irregular black marks. There is also a short black mark resting on the termen in the middle. The hindwings are grey, paler and thinly scaled anteriorly, darker towards the apex and termen.</p>\n<h2><span id=\"References\">References</span></h2>"
      }
    }
  }
}
```

## The Code 

Revise our handler to look like the following now. 

```js
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
          console.log('Response: ', result);
          console.log('Object key: ', Object.keys(result.query.pages)[0]);
          
          // Alexa does not allow results over 8000 characters
          var out = truncateString(result.query.pages[firstKey].extract.replace(/(<([^>]+)>)/ig, ''), 7999);
          
          self.emit(':tell', out);
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
```

## Resources 

- [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
- [HelloWorld with Alexa](https://github.com/amzn/alexa-skills-kit-js/tree/master/samples/helloWorld)
- [Steps to Build a Custom Skill](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/steps-to-build-a-custom-skill)
- [Understanding the Different Types of Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/understanding-the-different-types-of-skills)
- [Understanding Custom Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/understanding-custom-skills)
- [Custom Web Service](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-web-service)
- [Creating an AWS Lambda Function for a Custom Skill](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function)
- [Fill in Lambda Function endpoints in the Developer Portal](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/registering-and-managing-alexa-skills-in-the-developer-portal)
- [Test your skill with the Service Simulator or an Alexa-enabled device](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill)
