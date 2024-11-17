const API_KEY = "744631d01726b159d629a3dd4b3e11bb";

function onGeoOk(position) {
  //   console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
