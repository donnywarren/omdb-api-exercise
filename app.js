// 9b732962

// http://www.omdbapi.com/?apikey=[yourkey]&

// const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
// const api_key = '7ff65e290b76707972db913553d8d7da';
// const input = document.querySelector("#city");
// const form = document.querySelector("form");
// const weatherContainer = document.querySelector(".weather-container");
// const fontColor = (temp) => {
//   let color = ""
//   if (temp < 40) {
//     color = "blue"
//   } else if (temp > 90) {
//     color = "red"
//   }
//   return color;
// }
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const userInput = input.value;
//   const response = await axios.get(`${weatherUrl}${userInput}&units=imperial&appid=${api_key}`);
//   debugger;
//   weatherContainer.innerHTML = `
//   <h3>${response.data.name}</h3>
//   <p>It is currently <span class=${fontColor(response.data.main.temp)}>${response.data.main.temp}</span> today</p>
//   <p>expect <span>${response.data.weather[0].description}</span> today</p>
//   <p>Low: <span class=${fontColor(response.data.main.temp_min)}>${response.data.main.temp_min}</span></p>
//   <p>High: <span class=${fontColor(response.data.main.temp_max)}>${response.data.main.temp_max}</span></p>
//   `
// })


const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = '9b732962'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
const userInput = input.value;




