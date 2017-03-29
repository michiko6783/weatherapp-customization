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
        appid: apiKey,
        units: 'imperial'
      }
    });

    getWeather.done(function(response){
      console.log(response);
      var city = response.name,
        flag = response.sys.country,
        temperature = response.main.temp,
        humidity = response.main.humidity,
        description = response.weather[0].description;
        var icon = response.weather[0].icon;
        var country = response.sys.country;
        console.log(city, temperature, humidity);
    //     //api response on page

        $('.results .results-city').text(city).append('<img src="http://openweathermap.org/img/w/'+ icon +'.png"/>');
        $('.temperature-container .temperature').text(temperature + 'º');
        $('.humidity-container .humidity').text(humidity + '%');
        $('.description-container .description').text(description);

          console.log(icon);
        $('.getWeatherData.city-error').attr('style', 'display: none');

    });

    getWeather.fail(function(error){
      alert('error!', error);
    $('.getWeatherData .city-error').attr('style', 'display: block');
    });

    getWeather.always(function(){
    });
  }

  function setHandlers(){
    $('.getWeatherData').on('submit',function(e){
      e.preventDefault();
      var city = $(this).find('.weather-city').val();
      getWeatherData(city);
    });
  }
/* flow of our webapp*/
  function main(){
    getWeatherData('Austin');
    setHandlers();
  }

  main();
});/* Javascript goes here! */
