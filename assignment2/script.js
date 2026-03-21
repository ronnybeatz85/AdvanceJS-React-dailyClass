var key = "e922ab9622998c04227fdb4cd3cc682d";

// button function
function findWeather() {
    var city = document.getElementById("inputCity").value;

    if (city == "") {
        alert("Enter city name");
        return;
    }

    loadWeather(city);
}

// fetch weather
async function loadWeather(cityName) {
    try {
        var url = "https://api.openweathermap.org/data/2.5/weather?q="
            + cityName +
            "&appid=" + key +
            "&units=metric";

        var res = await fetch(url);
        var data = await res.json();

        if (data.cod != 200) {
            document.getElementById("result").innerHTML = "City not found";
            return;
        }

        displayWeather(data);
        saveCity(cityName);

    } catch (err) {
        console.log(err);
    }
}

// show weather
function displayWeather(data) {
    var output = "";
    output += "City: " + data.name + "<br>";
    output += "Temperature: " + data.main.temp + " °C<br>";
    output += "Humidity: " + data.main.humidity + "%<br>";
    output += "Weather: " + data.weather[0].main;

    document.getElementById("result").innerHTML = output;
}

// save history
function saveCity(cityName) {
    var list = localStorage.getItem("cities");

    if (list == null) {
        list = [];
    } else {
        list = JSON.parse(list);
    }

    list.push(cityName);

    localStorage.setItem("cities", JSON.stringify(list));

    showHistory();
}

// show history
function showHistory() {
    var list = localStorage.getItem("cities");

    if (list == null) {
        list = [];
    } else {
        list = JSON.parse(list);
    }

    var text = "";

    for (var i = 0; i < list.length; i++) {
        text += "<button onclick='loadWeather(\"" + list[i] + "\")'>" 
                + list[i] + 
                "</button>";
    }

    document.getElementById("pastData").innerHTML = text;
}

// load history on start
showHistory();

// enter key support
document.getElementById("inputCity").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        findWeather();
    }
});