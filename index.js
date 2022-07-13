// 'http://api.weatherapi.com/v1/current.json?key=3d8c3846d674495ba38141908210511&q=' + city + '&aqi=no'


let res;
    

function getWeather(){
    fetch('http://api.weatherapi.com/v1/current.json?key=3d8c3846d674495ba38141908210511&q=' + $("#ct").val()+ '&aqi=no')
  .then(response => response.json())
  .then(data => {
    res = data;
    $("#cityName").html(res.location.name)
    $("#temp_c").html(" "+ res.current.temp_c + "°C")
    $("#condition").html(" "+ res.current.condition.text)
    $("#image").attr("src", res.current.condition.icon)
  });
}

