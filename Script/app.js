const storage = new Storage;
const weatherLocation = storage.getLocationDate();
//Init Weather
const weather = new Weather(weatherLocation.city);
//Get Stored location data
//Init UI interface
const ui = new UI();

var addButton = document.getElementById('addButton');
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

///Listens to add button then checks user input.
addButton.addEventListener('click', () => {
    const location = document.getElementById('searchLocation').value;

    if (location != '') {
        weather.changeCity(location);
        storage.setLocationData(location);
        getWeather();
    } else {
        console.log("Error loading a city");
    }
});

//Cal to load a weather location
function getWeather(){
    weather.getWeather().then(data => {
        if (data.weather.message === "city not found") {
            console.log(data);
        } else {
            ui.addProfile(data);
            // storage.addStorage(data);
        }
    })
}
