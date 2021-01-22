class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = toTitleCase(weather.weather[0].description);
        this.string.textContent = `${weather.main.temp} F (${Math.round((parseFloat(weather.main.temp)-32) * 5/9*100)/100} C)`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} F (${Math.round((parseFloat(weather.main.feels_like)-32) * 5/9*100)/100} C)`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} miles/hour`;

    }
}

// Capitalize first letter in each word
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}