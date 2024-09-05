const url = 'https://api.openweathermap.org/data/2.5/';
const key = '27b2efcba8645b17e8a0739a2c7c45ac';



const setQuery = (e)=>{
    if(e.keyCode=='13'){
        getResult(arama.value);
    }
}

const getResult = (sehir)=>{
    let query = `${url}weather?q=${sehir}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result)=>{
    let sehir = document.querySelector('.sehir');
    sehir.innerText = `${result.name},${result.sys.country}`;
    let derece = document.querySelector('.derece');
    derece.innerText = `${Math.round(result.main.temp)}°C`;
    let bölge = document.querySelector('.bölge');
    bölge.innerText = result.weather[0].description;
    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(result.main.temp_min)}C / ${Math.round(result.main.temp_max)}C`;
}

const arama = document.querySelector('#arama');
arama.addEventListener('keypress',setQuery);

