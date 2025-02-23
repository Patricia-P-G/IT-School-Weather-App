// Din fisierul index.js va pleca toata functionalitatea noastra
const currentCityTag = document.querySelector('.current-city');

// Daca nu avem salvat in localStorage  nici un oras, atunci salvam in localStorage ca default Bucuresti - asta facem pentru ca vrem
// sa persistam ce alege user-ul din drop-down-ul cu orase
// Primul pas- extragem ce este in localStorage dupa cheia city:
let currentCity = localStorage.getItem("city");

// Prima data vom seta ca orasul curent sa fie mereu Bucuresti

// Daca nu avem setat/salvat in localStorage nici o valoare pentru city atunci o setam cu metoda setItem
if(!currentCity){
    localStorage.setItem("city", "București");
    currentCity = "București";
}

// Actualizam tag-ul sa afiseze valoarea din localStorage
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);