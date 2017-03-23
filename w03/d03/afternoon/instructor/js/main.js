/* Javascript goes here! */
// http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
// api.openweathermap.org/data/2.5/weather?q=London

$(function(){
  var apiUrl = 'http://api.openweathermap.org/data/2.5/weather',
    apiKey = '9f7fe3b0ceb0a7cf1e86812469152bc0';

  function getWeatherData(city){
    var getWeather = $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      data: {
        q: city,
        appid: apiKey
      }
    });

    getWeather.done(function(response){
      console.log(response);
      var city = response.name;
      var temperature = response.main.temp;
      var humidity = response.main.humidity;
      var description = response.weather[0].description;

      console.log(city, temperature, humidity)

      // Put API response on the page
      $('.results .results-city').text(city);
      $('.temperature-container .temperature').text(temperature + 'º');
      $('.humidity-container .humidity').text(humidity + '%');
      $('.description-container .description').text(description);

    });

    getWeather.fail(function(error){
      alert('error!', error);
    });

    // always
    getWeather.always(function(){});
  }

  function setHandlers(){
    $('.getWeatherData').on('submit',function(e){
      e.preventDefault();
      var city = $(this).find('.weather-city').val();
      getWeatherData(city);
    });
  }

  /* Flow of our webapp */
  function main(){
    getWeatherData('Austin');
    setHandlers();
  }

  main();
});
