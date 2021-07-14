const displayWeather = (para, name) => {
    const array = para.list[0]
    let image = document.querySelector('.image')
    console.log(array);
    let cityName = document.getElementById('city-name').innerHTML = array.name
    let weatherCondition = document.getElementById('weather').innerHTML = array.weather[0].description
    let temperature = document.getElementById('temp').innerHTML = array.main.temp
    image.src = 'https://source.unsplash.com/1600x900/?' + name  
}

let fetchWeather = (searchWeather) => {
    const search = searchWeather.toLowerCase()
    fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${search}&cnt=1&units=metric`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8be101be1cmsh16b3daceecc5daap150149jsn1264c6bc9d8d",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(data => displayWeather(data, search))
        .catch(err => {
            console.error(err);
        });
}


document.getElementById('sea').addEventListener('click', (e) => {
    e.preventDefault()
    fetchWeather(document.getElementById('search').value)
})