const key = "6a25f46be38ed4dc490a43a4f21aec5b"
let lon
let lat
const loc = document.getElementById("location")
const weatherCondition = document.getElementById("weatherCondition")
const temp = document.getElementById("temp")
let weather = {
    main: "",
    description: ""
}
getLocation()


function getLocation()
{
  // Check whether browser supports Geolocation API or not
  if (navigator.geolocation) { // Supported
  
    // To add PositionOptions
	
	navigator.geolocation.getCurrentPosition(getPosition);
  } else { // Not supported
	alert("Oops! This browser does not support HTML Geolocation.");
  }
}
function getPosition(position)
{
  lon = position.coords.longitude
  lat = position.coords.latitude

    checkWeather()

}

function checkWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${key}`)
    .then(res => {return res.json();})
    .then(data => {
        loc.innerText = `${data.name}`
        weatherCondition.innerText = `${data.weather[0].main} / ${data.weather[0].description}`
        temp.innerHTML = `${data.main.temp}`

        weather.main =  `${data.weather[0].main}`
        weather.description =  `${data.weather[0].description.replace(" ", "_")}`
        checkWeatherImg()
    })
    
}