// 1. Constantele care stim ca nu se vor schimba niciodata in proiectul nostru putem sa le pastram cu 'const' iar denumirea lor poate
// fi scrisa uppearCase

// 2. API Key-urile sau token-urile nu ar trebui sa stea intr-un fisier text - de ce- pentru ca nu este sigur. Aceste KEY-URI ar trebui sa
// stea pe un server - dar in cazul nostru cum API-ul de la OpenWeather este gratuit atunci e ok sa il tinem asa

const API_KEY = "4c4eacfefa17e00934c549742b91e526";

// Construim link-urile (endpoint-rile ) servelor catre care vom face call-urile ca sa primim date despre vreme

function getCurrentWeatherEndpoint(city) {
    // Cand se foloseste ? dupa URL inseamna ca avem de-a face cu query params (query string) - asta inseamna ca API-ul va lua in considerare 
    // Acei parametri pentru a ne intoarce data in fucntie de ei
    // Noi avem urmaritorii query params:
    // 1. q = este folosit pentru a identifica orasul
    // 2. lang = este folosit pentru a-i spune API_ul sa ne intoarca datele in limba romana
    // 3. units
    // 4. appid

    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}