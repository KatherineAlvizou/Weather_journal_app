// Setup empty JS object to act as endpoint for all routes
let projectData={};
// Require Express to run server and routes
const express= require('express');
//body-parser package will be used as middleware
const bodyParser= require('body-parser');
// Start up an instance of app
const app= express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port= 8000;
const server = app.listen(port, listening);

function listening(){
    console.log(`server running on localhost: ${port}`);
}

//Adding a GET route that returns the projectData object 
app.get('/all', function(request,response){
    response.send(projectData);
});

//POST route to store the data

app.post('/add', addData);

 function addData(request,response){
     
     let data=request.body;
     projectData['temp']=data.temp;
    projectData['date']=data.date;
    projectData['feelings']=data.feelings;
    response.send(projectData);
    console.log(projectData);
};

