


let res;
    

function getWeather(){
    fetch('https://api.weatherapi.com/v1/current.json?key=2b4e514a0aa1445dae9171437221307&q=' + $("#ct").val()+ '&aqi=no')
  .then(response => response.json())
  .then(data => {
    res = data;
    $("#cityName").html(res.location.name)
    $("#temp_c").html(" "+ res.current.temp_c + "°C")
    $("#condition").html(" "+ res.current.condition.text)
    $("#image").attr("src", res.current.condition.icon)
  });
}

