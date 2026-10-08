console.log("Weather App JavaScript is working!");

let cityInput = document.getElementById("cityInput");
let searchButton = document.getElementById("searchButton");
let cityName = document.getElementById("cityName");

console.log(cityInput);
console.log(searchButton);

searchButton.addEventListener("click", function() {
    console.log(cityInput.value);

    cityName.textContent = cityInput.value;
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data));

fetch("https://geocoding-api.open-meteo.com/v1/search?name=Indore&count=1")
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0]);
    })
    .catch(error => {
        console.log("Error:", error);
    });    