PeriodicWave.onclick = function (){
    let apikey = '30578d96ab7b00d1059a81a0c4c74ef3';
    let città = document.getElementById('weath').value;
    let uri = 'https://api.openweathermap.org/data/2.5/weather?q='+ città + '&appid=' +apikey;
    console.log(uri);

    var request = newnXMLHttpRequest();
    request.open('GET', uri, true);
    request.onload = function(){  
        var data = JSON.parse(this.response);
        meteo = data.weather[0].main;
        console.log(meteo);
        temp = data.main.temp;
        temp = parseInt(temp) - 273;
        ris = document.getElementById('uri').innerHTML = 'A' + città + 'il tempo é' + meteo + 'e ci sono' + temp + 'gradi'
        
     console.log(ris)
    }
    request.send();
}




// definizione di una funzione "func"
function func() {return this.prop; }

// definizione di un oggetto x
var x = { prop :  "test", prop2 : "altro valore" };

// definizione di un metodo "func" per l'oggetto x ( aggiunto successivamente alla definizione )
x.func = function() {return this.prop; };

// oppure definizione del metodo tramite assegnazione di una funzione già esistente
x.func = func;   // notare l'assenza delle parentesi per assegnarenla funzione creata in precedenza

var y = func();  // y vale undefined ( perché non esiste l'attributo prop)
y = x.func();   // y ora vale "test" ( poiché l'oggetto x ha quell'attributo)




var http = require('http');

//crea un server:
http.createServer(function (req, res) {
  res.write('Hello World!'); //scrive una risposta al client
  res.end(); //termina la risposta
}).listen(8080); //il server risponde al portale 8080
