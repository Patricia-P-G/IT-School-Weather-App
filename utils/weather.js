// Pe baza unui cod de iconita primit de le OpenWeather API - noi o sa o generam 
// link-ul acesteia
function getWeatherIcon(iconCode){
return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
// Pe baza speed-ului primit de la OpenWeather API care este in m/s - noi 
// o sa returnam km/h
function windToKmPerHour(meterPerSec){
    return (meterPerSec * 3600) / 1000
}

//   function firstLetterToUpperCase(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }