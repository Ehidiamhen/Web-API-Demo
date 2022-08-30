//Express to run server and routes
const express = require('express');

//Start up an instance of app
const app = express();

//Create JS Object
const appData = {
    animal: 'Animal: Lion',
    facts: 'Lions are wild',
    fav: undefined
};

//Respond with JS Object when a GET Request is made to the homepage
app.get('/all', (req, res) => {
    res.send(appData);
});

//Create JS Data Array
/*const data = [];
app.post('/posted', (req, res) => {
    data.push(req.body);
    console.log(data);
});*/

//Dependencies
const bodyParser = require('body-parser');
//MiddleWare
//Configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Cors for cross-origin allowance
const cors = require('cors');
app.use(cors());

//Initialize the main project folder
app.use(express.static('AsyncJS'));

const port = 8080;
//Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port, ()=>{console.log(`Running on localhost: ${port}`)})
//Callback to debug
function listening() {
    console.log("Server Running!");
    console.log(`Running on localhost: ${port}`);
};

/*//Movie Example
//Create JS Data Array
const data = [];
app.post('/addMovie', (req, res) => {
    //data.push(req.body);
    let data =  req.body;
    console.log(data);
});*/

//Animal Web API Example

//Dummy API Endpoint
const fakeData = {
    animal: 'lion',
    fact: 'lions are fun'
}

app.get('/fakeAnimalData', getFakeData)

function getFakeData(req, res) {
    res.send(fakeData)
}

const animalData = [];

app.get('/all', getData)

function getData(req, res){
    res.send(animalData)
    console.log(animalData)
}

//POST ROUTE

app.post('/addAnimal', addAnimal);

function addAnimal(req, res){
    appData['fav'] = (req.body.fav)
    newEntry = {
        animal: req.body.animal,
        facts: req.body.fact,
        fav: req.body.fav
    }
    //const a = console.log(req.body.fav)
    animalData.push(newEntry)
    res.send(animalData)
    console.log(animalData)
}