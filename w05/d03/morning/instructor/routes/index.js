var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/callback', function(req, res) {
  var code = req.query.code;

  console.log('code: ', code);
  var reqBody = {
    client_id: process.env.INSTAGRAM_CLIENT_ID,
    client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3000/callback',
    code: code
  };

  request.post({url:'https://api.instagram.com/oauth/access_token', formData: reqBody}, function optionalCallback(err, httpResponse, body) {
    if (err) {
      console.error('upload failed:', err);
    }
    console.log('response', httpResponse);
    console.log('body', JSON.parse(body));
    var body = JSON.parse(body);

    res.redirect('/?access_token=' + body.access_token);
  });
});

module.exports = router;
