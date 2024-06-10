
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apikey = '2f02af221bdc163ef1a672852b6f61e8'

const search = document.querySelector('.search-bar input')
const btn = document.querySelector('.search-bar button')

async function weather(va){
   const re = await fetch(apiurl+va+`&appid=${apikey}`);
   var data = await re.json();


         
   document.querySelector('.location').innerHTML = data.name
   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
   document.querySelector('.humidity').innerText = data.main.humidity+ "%" 
   document.querySelector('.wind').innerHTML = data.wind.speed + " km/h" 


    if(data.weather.main == Clouds){
        document.querySelector(".weather").src = "images/clouds.png"
    }
    else if(data.weather.main == Rain){
        document.querySelector(".weather").src = "images/rain.png"
    }
    else if(data.weather.main == Mist){
        document.querySelector(".weather").src = "images/mist.png"
    }
    else if(data.weather.main == Drizzle){
        document.querySelector(".weather").src = "images/drizzle.png"
    }
    else if(data.weather.main == Clear){
        document.querySelector(".weather").src = "images/clear.png"
    }
    else if(data.weather.main == Snow){
        document.querySelector(".weather").src = "images/snow.png"
    }
    
  

}

document.addEventListener('DOMContentLoaded', function() {
btn.addEventListener("click", function(){
    console.log(search.value)
    weather(search.value)
})
})

