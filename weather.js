// Use free API from OpenWeather
class Weather{
    constructor(city) {
        this.apiKey = '41226ff8a8670be8fbdea9aa5510d9ea';
        this.city = city;
    }

    // Fetch weather from API
    async getResponseData() {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
