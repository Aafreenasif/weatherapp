

const form = document.querySelector("#weather-form");
const input = document.getElementById("input");
const temperature = document.getElementById("temperature");
const cityName = document.getElementById("CityName");
const weatherCondition = document.getElementById("weathercondition")

async function checkweather(city) {
    const apiKey = "d82fb7591efa41b8a72154240241507";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    const response = await fetch (apiUrl);
    const data = await response.json()
    return ShowWeather(data);
}
const ShowWeather = (data)=>{
    console.log(data);
    temperature.textContent = `${data.current.temp_c}°C`
    cityName.textContent= data.location.name
    weatherCondition.textContent= data.current.condition.text
}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkweather(input.value);
});


