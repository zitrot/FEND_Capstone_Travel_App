# Travel Weather App - Final Project for Udacity's Front End Web Design Nanodegree

## Description
This project takes a user's destination location and travel dates to return a weather forecast for their trip. There are 3 APIs used:

* [Geonames API](http://www.geonames.org/) - gets latitude and longitude for location
* [Weatherbit API](https://www.weatherbit.io/) - gets weather forecast for the latitude and longitude
* [Pixabay API](https://pixabay.com/)  - gets photo for the location

Local server running on *Node* and *Express* is used.

## Prerequisite
This project runs on a local server. It uses *Node*. If you don't have *Node* already installed on your machine, you can download it [**here**](https://nodejs.org/en/download/).

You must have an API key for each of the 3 APIs above.

After you get your API keys, make a file called *.env* in the project root folder. File should contain:

```
USERNAME_GEONAMES = {your key here}
API_WEATHERBIT = {your key here}
API_KEYPIXABAY = {your key here}
```

## Installation
If *Node* is installed, then you can use the *Node Package Manager (npm)* to install the packages needed to run this program. In the terminal, use this command:

```
npm install
```
When those packages have installed, use the following commands to run the development server, build the production, run some basic tests and start the express server, respectively. Note that *dev* runs *webpack-dev-server* and has hot-loading enabled.

```
npm run build-dev
npm run build-prod
npm run build test
npm run start
```

## Using the App

The server is set to **port 8081**. Start the server with the command in the previous section.

To load the page, set your browser's address bar to:

```
http://localhost:8081/
```
The app takes 2 user parameters:

* **Destination city (required)** - The city/location where you'll travel to. App will return an error if the API can't find it. Not case-sensitive, but spelling is important. If your entry is returning a place with the same name in a different country, you can add the country to the input box, for example:

```
London
```

* **TRavel Date (required)** - This date is for calculate the remaining days to the trip and the weather in the that date (if the date exceed 16 days after the current date the web app use 16 as the max range to the weatherbit api).


