//WEB API WITH FETCH DEMO
let baseURL = 'http://api.animalinfo.org/data/?animal=';
let apiKey = 'AIzaSyAmfWgVEE4L6IwztWK6T5HgkQKkT6cDxrY';
const newAnimal = document.getElementById('animal').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    //Select the actual value of an HTML input to include in POST
    const fav = document.getElementById('fav').value;
    //Faking an API Call
    getAnimalDemo('/fakeAnimalData')
    //New Syntax!
    .then(function(data){
        console.log(data);
        //Add data to POST request
        postData('/addAnimal', {animal:data.animal, fact:data.fact, fav:fav});
        //We can do this because of Async!
        updateUI();
    });
};

const getAnimalDemo = async(baseURL, animal, key)=>{
    //1.
    //const res = await fetch(baseURL+animal+key)
    //2. Call Fake API
    const res = await fetch('/fakeAnimalData')
    try {

        const data = await res.json();
        console.log(data)
        //1. We can do something with our returned data here-- like chain promises!
        //2.
        //postData('/addAnimal, data)
        return data;
    } catch(error){
        console.log('error', error);
        //appropriately handle the error
    }
}

//POST
const postData = async (url = '', data = {})=>{
    //console.log(data)
    const response = await fetch(url, {
        method:'POST', //GET, POST, PUT, DELETE etc.
        credentials: 'same-origin', //include, *same-origin omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), //body data type must match "Content-Type"
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error", error);
        //appropriately handle the error
    };
}

//UPDATE UI DEMO
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        console.log(allData)
    document.getElementById('animalName').innerHTML = allData.animal
    document.getElementById('animalFact').innerHTML = allData.facts
    document.getElementById('animalFav').innerHTML = allData.fav
    
    }catch(error){
        console.log("error", error)
        //appropriately handle the error
    }
}
//document.getElementById('animalFav').innerHTML = allData.animal