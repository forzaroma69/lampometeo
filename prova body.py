import tkinter as tk
import requests
import math

def apimeteo():
    citta = citta_entry.get()
    api = "https://api.openweathermap.org/data/2.5/weather?q=" + str(citta) +"&appid=30578d96ab7b00d1059a81a0c4c74ef3"
    json_data = requests.get(api).json()
    condizioni = json_data["weather"][0]["main"]
    temperatura = int(json_data["main"]["temp"] - 273.15)
    temperatura_min = int(json_data["main"]["temp_min"] - 273.15)
    temperatura_max = int(json_data["main"]["temp_max"] - 273.15)
    umidità = json_data["main"]["humidity"]
    vento = json_data["wind"]["speed"]
    print(condizioni)
    print(temperatura)
    print(temperatura_max)
    print(temperatura_min)
canvas = tk.Tk()
canvas.geometry("600x500")
canvas.title("Lampometeo")

citta_text = tk.StringVar()
citta_entry = tk.Entry(canvas, textvariable=citta_text)
citta_entry.pack()

search_btn = tk.Button(canvas, text='Cerca il meteo', width=12, command=apimeteo)
search_btn.pack()

temp_lbl = tk.Label(canvas, text="temperatura")
temp_lbl.pack()
canvas.mainloop()