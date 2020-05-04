# Weather-Journal App Project

_**Overview**_:
This project concerns the creation of an asynchronous web app that uses Web API and user data to dynamically update the UI. 

### How it works

You need to have Node.js and npm locally installed. You can check that by running node -v && npm -v in terminal. This should result in two versions shown in terminal.
Then, you have to run npm start in order to run the express server locally.
Open localhost:8000 in your browser and the app will be running.

### Project Development

The work for this project is done at the `server.js` file and the `website/app.js` file. Then using `index.html` for element references and finally modifying `style.css` to style and customize the application.

### Steps followed:

*installed Node and the packages Express, Body-Parser, and Cors from the terminal and them included them to server.js file.
*set up a server running on the port of my choosing
*added a GET route that returns the projectData object and a POST route that adds incoming data to projectData.The POST route is receiving pieces of data (temperature, date, user response).
*acquired API credentials from OpenWeatherMap website.
*written an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
*added a POST request to add the API data, as well as data entered by the user to my app.
Written another async function to make this POST request, which receives a path and a data object. The data object includes temperature, date and user response (feelings).
*written an async function to update the UI dynamically.This function retrieves data from my app, selects the necessary elements on the DOM, and then updates their necessary values to reflect the dynamic values for: temperature, date, user input.
*created an event listener with a callback function to execute when it is clicked.
Inside that callback function called my functions.

### Technologies used

-JAVASCRIPT 
-CSS

This project was created by **Aikaterini Alvizou** for the Google Udacity Nanodegree program FEND track in 2020.

