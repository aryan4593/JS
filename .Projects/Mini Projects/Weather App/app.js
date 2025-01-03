const API_KEY = "33750b68ea154d6206e18e2c4526fb5c";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherIcon = document.querySelector(".weather-icon");
let data;
window.addEventListener("load" ,() =>{
    checkWeather("Aurangabad");
})
async function checkWeather(cityEle) {

    const link = API_URL + cityEle + `&appid=${API_KEY}`;
    const response = await fetch(link);
    data = await response.json();
    city.innerText = data.name;
    console.log(cityEle);
    temp.innerHTML = Math.round(data.main.temp) + `°C`;
    humidity.innerHTML = data.main.humidity +`%`;
    wind.innerHTML =  data.wind.speed +` km/h`; 
   
    let condition = data.weather[0].main;
    condition = condition.toLowerCase();
    console.log(condition);
    const conditions = ['clear' , 'clouds' ,'drizzle' ,'humidity' , 'mist' , 'rain','snow']; ///available images
    if(conditions.includes(condition)) 
        weatherIcon.src = `images/${condition}.png`;
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click" , () =>{
    if(searchBox.value != '');
    checkWeather(searchBox.value);
});


// checkWeather();