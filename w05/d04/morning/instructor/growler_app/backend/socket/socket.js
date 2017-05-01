
module.exports = function(server){
  // io for emitting, socket for on(listening)
  var Growl = require('../models/growl');
  var io = require('socket.io')(server);
  var sendGrowls = function(){
    Growl.find({}).exec(function(err,growls){
      if(err) console.log(err);
      io.emit('get-growls',growls.reverse().slice(0,12));
    });
  };

  io.on('connect',function(socket){
    sendGrowls();

    io.on('add-growl', function(data){
      var addGrowl = new Growl({
        text: data.text,
        provider: data.provider,
        image: data.picture,
        name: data.name
      });

      addGrowl.save(function(err,growl){
        if(err) console.log(err);
        sendGrowls();
      });
    })

  })
}
