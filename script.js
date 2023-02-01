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





let weather2 = {
    apikey:'30578d96ab7b00d1059a81a0c4c74ef3',
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
                + city 
                + "&units=metric&appid=" 
                +this.apikey
            )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { icon } = data.weather[0];
        const { temp } = data.main[0];
        const { icon1 } = data.weather[1];
        const { temp1 } = data.main[1]
        console.log(icon,temp,icon1,temp1)
        document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp1").innerText = temp + "°C"
        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon1 + ".png";
        document.querySelector(".temp2").innerText = temp1 + "°C"

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
        weather2.search();
    });












