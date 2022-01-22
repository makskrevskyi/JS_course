fetch('https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=afcab23db5ccda702c665e0390301ee7')
.then(function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273)
     + '&deg;';
    document.querySelector('.clouds').textContent = data.weather[0]['main'];
    document.querySelector('.city-name').textContent = data.name;

})
.catch(function () {

});     

    const date = new Date();
    date.setDate(0);
    document.getElementById("date").innerHTML = date;