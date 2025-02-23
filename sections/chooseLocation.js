const bucharestButton = document.querySelector(".dropdown-menu .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu .oradea");
const aradButton = document.querySelector(".dropdown-menu .arad");
const sibiuButton = document.querySelector(".dropdown-menu .sibiu");


function updateCurrentCityName(city) {
  //Prima data selectam tag-ul de HTML care este dedicat afisarii orasului curent
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city){
    // Actualizam orasul in localStorage
    localStorage.setItem("city", city)
    // Actualizam orasul afisat pe ecran
    updateCurrentCityName(city);
    // Afisam vremea curenta pentru orasul selectat din drop-down
    displayCurrentWeather(city);
    // Afisam vremea pe urmatoarele 5 zile
    displayWeatherForecast(city);
}


// Adaugam event listenrii pentru butoanele din drop-down
bucharestButton.addEventListener("click", function () {
  // Aici ar trebui sa schimbam orasul curent din HTML
  updateWeather("București");
});

timisoaraButton.addEventListener("click", function () {
  updateWeather("Timișoara");
});

oradeaButton.addEventListener("click", function () {
  updateWeather("Oradea");
});

aradButton.addEventListener("click", function () {
  updateWeather("Arad");
});

sibiuButton.addEventListener("click", function () {
  updateWeather("Sibiu");
});