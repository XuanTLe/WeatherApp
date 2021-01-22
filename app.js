// Init storage
const storage = new Storage();

// Get stored location data. If there is nothing in storage, default city (San Marcos) will be assigned. This is done from Storage.js
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

//Init UI
const ui = new UI();

// Get weather from local storage when DOM loaded
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    // get city input from the 'change location' modal that pops up
    const city = document.getElementById('city').value;

    // Change Location: a different city -> need to request new API call through getResponseData inside getWeather later
    weather.changeLocation(city);

    // Set location in Local storage
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close modal using jQuery
    $('#modal').modal('hide');
});

function getWeather(){
    // results: response Data object.
    weather.getResponseData()
    .then(results => {
        //console.log(results);
         ui.paint(results);
    })
    .catch(err => console.log(err));
}
