//Update Date
let dateText = document.querySelector("#date");
let timeText = document.querySelector("#time");

let now = new Date();
let min = now.getMinutes();
let hour = now.getHours(); 
let dayNum = now.getDate();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
let day = days[now.getDay()];

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[now.getMonth()]; 

let year = now.getFullYear(); 

dateText.innerHTML = `${day} ${dayNum} ${month} ${year}`;
timeText.innerHTML = `${hour}:${min}`;

//variables


// Update the Card
function updateCard(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let condition = response.data.condition.description;
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  
  console.log(response);


  let cityElement = document.querySelector("#cityText");
  let tempElement = document.querySelector("#temp");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = city;
  tempElement.innerHTML = temperature;
  conditionElement.innerHTML = condition;
  humidityElement.innerHTML = humidity;
  windElement.innerHTML = wind;
}

//Search for City
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let apiKey = "faf1t205ab1o74d732b54981fbc56c80";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateCard);
};

let searchCity = document.querySelector("#searchCity");
searchCity.addEventListener("submit", search);



