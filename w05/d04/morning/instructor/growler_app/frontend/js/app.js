$(document).ready(function() {

  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      params: { scope: 'openid email' } //Details: https://auth0.com/docs/scopes
    }
  });

  /* socket.io will create the client @ the server domain /socket.io/socket.io.js
  so in the case w/ nodemon, it would be located @ localhost:3000/socket.io/socket.io.js*/
  var domain = 'http://localhost:3000';
  var socket = io(domain);

  console.log('socket is: ', socket);

  // What we want to do once we've logged in
  lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('profile', JSON.stringify(profile));

      // Display user information
      show_profile_info(profile);
    });
  });

  // retrieve the profile:
  var retrieve_profile = function() {
    var id_token = localStorage.getItem('id_token');
    if (id_token) {
      lock.getProfile(id_token, function (err, profile) {
        if (err) {
          return alert('There was an error getting the profile: ' + err.message);
        }
        // Display user information
        show_profile_info(profile);
      });
    }
  };

  // show profile info once logged in
  var show_profile_info = function(profile) {
     console.log(profile);
     $('.nickname').text(profile.nickname);
     $('.btn-login').hide();
     $('.splash-heading').hide();
     $('.btn-logout').show();

     getGrowlHtml();
     getGrowlForm();
  };


  function getGrowlForm(){
    $.ajax({
      url: '/components/form.json',
      method: 'GET'
    }).done(function(response){
      $('body').prepend(response.html);
    }).fail(function(error){
      console.error(error);
    });
  };

  function getGrowlHtml(){
    $.ajax({
      url: '/components/growls.json',
      method: 'GET'
    }).done(function(response){
      $('body').prepend(response.html);
    }).fail(function(error){
      console.error(error);
    });
  }


  var logout = function() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    window.location.href = "/";
  };

  function setHandlers(){
    $('.btn-login').click(function(e) {
      e.preventDefault();
      lock.show();
    });

    $('.btn-logout').click(function(e) {
      e.preventDefault();
      logout();
    })

    $('body').on('submit','.add-growl',function(e){
      e.preventDefault();
      var text = $(this).find('.growl').val();
      $(this).find('.growl').val('');

      addGrowl(text, JSON.parse(localStorage.getItem('profile')) )
      $('.class-growls li').last().remove();
    });
  };

  function addGrowl(growlText, profile){
    var data = {
      text: growlText,
      name: profile.given_name + ' ' + profile.family_name,
      picture: profile.picture,
      provider: profile.identities[0].provider
    };
    socket.emit('add-growl', data);
  };

  function addGrowlLocal(growls){
    $('.class-growls').empty();
    growls.reverse().forEach(function(growl,index){
      $('.class-growls').prepend([
        '<li>',
          '<p>'+growl.name+'</p>',
          '<p><img src="'+(growl.image || 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg')+'"/></p>',
          '<p>'+growl.text+'</p>',
          '<p>'+growl.provider+'</p>',
        '</li>'
      ].join(''));
    });
  };


  function setSocketListeners(){
    // Get growls
    socket.on('get-growls', function(growls){
      console.log('growls: ', growls);
      addGrowlLocal(growls);
    });
  };

  function main(){
    retrieve_profile();
    setHandlers();
    setSocketListeners();
  };

  main();
});
