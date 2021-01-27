// Setup empty JS object to act as endpoint for all routes
const dotenv = require("dotenv");
dotenv.config();
const API_KEYPIXABAY = process.env.API_KEYPIXABAY;
const USERNAME_GEONAMES = process.env.USERNAME_GEONAMES
const API_WEATHERBIT = process.env.API_WEATHERBIT
const port = process.env.PORT || 3000;
// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require("node-fetch");
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));

TravelData = {};

app.post('/RecieveClientData', async(req, res) => {
    TravelData['location'] = req.body.location;
    TravelData['days'] = req.body.days;
    res.send({ state: 'ok' });
});

app.get('/getImageLocation', async function(req, res) {

    //console.log(baseUrl + API_KEY + "&lang=auto&url=" + request.body.url);
    const urlPixaBay = 'https://pixabay.com/api/?key=' + API_KEYPIXABAY + "&q=" + TravelData.location + '&image_type=all&category=places'
    fetch(urlPixaBay)
        .then(response => response.json())
        .then(response => {
            const result1 = response.hits[0].webformatURL;
            TravelData['url'] = result1;
            res.send(response)


        })
        .catch(error => {
            res.send(JSON.stringify({ error: error.message }));
        })
});


app.get('/getCoordinates', async function(req, res) {
    console.log("codigo")

    //console.log(baseUrl + API_KEY + "&lang=auto&url=" + request.body.url);
    const urlGeoNames = 'http://api.geonames.org/searchJSON?q=' + TravelData.location + '&maxRows=1&fuzzy=0.6&username=' + USERNAME_GEONAMES;
    fetch(urlGeoNames)
        .then(response => response.json())
        .then(response => {
            TravelData['lng'] = response.geonames[0].lng
            TravelData['lat'] = response.geonames[0].lat
            res.send(response)

        })
        .catch(error => {
            res.send(JSON.stringify({ error: error.message }));
        })
});


app.get('/getWeatherData', async function(req, res) {
    //console.log(baseUrl + API_KEY + "&lang=auto&url=" + request.body.url);
    const urlWeatherBit = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=' + TravelData.lat + '&lon=' + TravelData.lng + '&days=' + TravelData.days + '&key=' + API_WEATHERBIT;
    console.log(urlWeatherBit);
    fetch(urlWeatherBit)
        .then(response => response.json())
        .then(response => {
            TravelData['wheather'] = response.data[0].weather.description;
            TravelData['temperature'] = response.data[0].temp;
            console.log(response);
            res.send(response);
        })
        .catch(error => {
            console.log(error.message);
            res.send(JSON.stringify({ error: error.message }));
        })
});

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
});


app.get('/GetTravelInfo', function(req, res) {
    res.send(TravelData);
});


app.listen(8081, () => {
    console.log('Example app listening on port 8081!');
});