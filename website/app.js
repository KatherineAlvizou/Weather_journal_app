
const apiKey= '&APPID=0f50edcc95b1786a410ce311fe0e311c';
let baseURL='http://api.openweathermap.org/data/2.5/weather?q=';
const metric= '&units=metric';
/* Global Variables */

const generate= document.getElementById('generate');
const content= document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//functions

generate.addEventListener('click', performAction);
function performAction(e){
  addData()
  .then(updateUI());  
};


const addData= async()=>{
  const weather= await getApi();
  const feelings= document.getElementById('feelings').value;
  postData('/add', {temp:weather, date: newDate, feelings:feelings});

}
//GET web API 
const getApi= async()=>{
    const zip= document.getElementById('zip').value;
  const weatherApi= await fetch(baseURL+zip+apiKey+metric);
  console.log(baseURL+zip+apiKey);
  try{
     const weather= await weatherApi.json();
     const temp=weather.main.temp;
     return temp;
 }catch(error){
     console.log('error', error);
 }
}

 //update the UI
const updateUI= async()=>{
  const request= await fetch('/all');
  try{
    const allData= await request.json();
    document.getElementById('date').innerHTML = `Date: ${allData.date}`;
    document.getElementById('temp').innerHTML = `Temperature is : ${allData.temp}&#8451;`;
    document.getElementById('content').innerHTML = `You feel: ${allData.feelings}`;
  }catch(error){
      console.log('error', error);
  }
  }; 

//POST data
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
             
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  

// GET project data

  const getData = async(url='')=>{
    const response = await fetch(url)
    try { 
      const data = await response.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("there is an error", error);
      
    }
  };
  

