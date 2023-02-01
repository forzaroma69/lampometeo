let weather = {
    apikey:'30578d96ab7b00d1059a81a0c4c74ef3',
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&lang=it"
             + "&units=metric&appid=" 
             +this.apikey
            
         )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        document.querySelector(".city").innerText = "Meteo a " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".umidità").innerText = "Umidità:" + humidity + "%";
        document.querySelector(".vento").innerText= "Velocità vento: " + speed + " km/h";

    },
    search: function () {
       this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
        weather.search();
    });