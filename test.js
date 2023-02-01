function info() {
    let città = document.getElementById("weath").value
    let apikey = '30578d96ab7b00d1059a81a0c4c74ef3'
    let risultato = document.getElementById("ris")
    let image = document.getElementById("image")
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+ città + '&appid=' +apikey;

    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function(){
        let data = JSON.parse(this.response);
        let meteo = data.weather[0].main;
        let temp = parseInt(data.main.temp - 273);
        let icon = data.weather[0].icon;
        
        
        risultato.innerHTML = 'A ' + città + " è " + meteo + " e ci sono " + temp + " gradi" + icon
        image.src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
    }
    request.send()

    // risultato.innerHTML = 
}