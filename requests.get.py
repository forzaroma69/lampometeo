import requests


def meteo(lat,lon):
    response = requests.get(
        f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=30578d96ab7b00d1059a81a0c4c74ef3"
    )
    print(response.json())


meteo(25.2684, 55.2962)



