const weather_btn = weather.querySelector("button");
const weather_text = document.querySelector("#weather span:last-child");
const API_KEY = "cad580f2b65e68fe88a1dbc0acfebf52";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        weather_text.innerText = `${data.weather[0].main} / ${data.main.temp}℃, ${data.name}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
function onWeather() {
    weather_text.classList.toggle("hidden");
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}

weather_btn.addEventListener("click", onWeather);