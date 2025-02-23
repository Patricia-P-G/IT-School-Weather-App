// Declaram functia care o sa ne faca predicita pentru vreme pentru umatoaree 5 zile. apelul fcntiei se face in fisierul chooseLocation.js
// si in index.js
function displayWeatherForecast(city){
    // Generam link-ul server-ului catre care trebuie sa facem call-ul, pe baza orasului
    const forecastEndpoint = getForecastEndpoint(city);

    // Inainte sa facem call-ul catre server si ca sa putem sa afisam noile informatii in HTML, trebuie sa selectam elementul de interes
    let weatherForecastContainer = document.querySelector('.weather-forecast');
    // Stergem de pe ecran datele vechi
    weatherForecastContainer.innerHTML = '';

    fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
        // Din talele venite de la OpenWeather API, noi o sa pastram doar proprietatea list(deoarece ea contine
        // predictia vremii pe urmatoare zile)- care este un array
        const { list } = data;

        // Avem nevoie de un obiect in care sa grupam predictiile pe zile
        const daysMap = {};

        // Iteram prin cele 40 de predictii primite de la server pe care le gasim in variabila list
        list.forEach((element) => {
            // Extragem proprietatea dt de oe elementul interat
            const{dt} = element;
            // Folosm fucntia getDayOfTheWeek din utilitarul date.js, pentru a transforma data in: Luni
            // Marti, Miercuri etc
            const day = getDayOfTheWeek(dt);
            // Daca deja avem ziua saptamanii in obiectul daysMap, atunci ii adaugam o noua predictie de vreme (adica obiectul peste care
            // iteram: )
            if(daysMap[day]){
                daysMap[day].push(element);
            }
            else{
                // Altfel, daca ziua saptamanii nu exista in obiectul daysMap, atunci il adaugam impreuna cu noua predicite (adica obiectul
                // curent peste care interam: element)
                daysMap[day] = [element];
            }
        });

        // Parcurgem cu ajutorul for..in in continutul din obiectul daysMap, - cheile sunt zilele saptamanii pentru care o sa afisam predictiile
        for(key in daysMap){
            // Afisam ziua saptamanii pe ecran (adica o inseram in HTML)
            weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;

            let daysPredictions = daysMap[key];
            // Pentru fiecare element(predicitie dintr-o zi) - extragem datele necesare:
            daysPredictions.forEach((element) => {
                const {dt, main, weather} = element;
                // Formatam ora folosind  functia deja creata de noi: getHour
                const hour = getHour(dt);
                // Rotunjim temperaturile
                const temperature = Math.round(main.temp);
                const realFeel = Math.round(main.feels_like);
                // Ne extragem descrierea - o luom de pe obiectul weather care ATENTIE este un array
                const weatherDescription = weather[0].description;
                // Ne extragem iconita pe care o formatoam cu functia deja creata de noi: getWeatherIcon
                const weatherIcon = getWeatherIcon(weather[0].icon);

                // Afisam pe ecran (adica inseram in HTML) toate informatiile de mai sus 
                weatherForecastContainer.innerHTML += `
                <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                    <div>${hour}</div>
                    <div><img src="${weatherIcon}" alt="weather icon"></div>
                    <div class="fs-3"><strong>${temperature}°C</strong></div>
                    <div>${weatherDescription}</div>
                    <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                </div>
                `;
            });
        }
    });
}