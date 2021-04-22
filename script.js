const timeZone = document.getElementById("timezoneInfo")
timeZone.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone
const time = document.getElementById("time")
const weatherImg = document.getElementById("weatherImg")


const weatherList = {
    Default:"img/clear_sky.jpg",
    Clouds:{
        few_clouds: "img/clear_sky.jpg",
        default:"img/clear_sky.jpg"},
    Clear:{
        clear_sky:"img/clear_sky.jpg",
        default: "img/clear_sky.jpg"}
}

setInterval(() => {
    let date = new Date
    time.innerText = date.toLocaleTimeString()
},1000)

setInterval(() => {
    checkWeather()
},60000)

function checkWeatherImg() {
    if(weatherList[weather.main])
        {
            if(weatherList[weather.main][weather.description])
                {
                    const img = weatherList[weather.main][weather.description]
                    weatherImg.style.backgroundImage = `linear-gradient(to bottom, rgba(255,255,255,0) 50%,
                    rgba(255,255,255,1)), url(${img})`
                }
            else {const img = weatherList[weather.main].default
                weatherImg.style.backgroundImage = `linear-gradient(to bottom, rgba(255,255,255,0) 50%,
                rgba(255,255,255,1)), url(${img})` }
        }
    else { const img = weatherList.Default
        weatherImg.style.backgroundImage = `linear-gradient(to bottom, rgba(255,255,255,0) 50%,
        rgba(255,255,255,1)), url(${img})`}
}

