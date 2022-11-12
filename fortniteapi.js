import {useState, useEffect} from 'react'; 
import jwt_decode from "jwt-decode";

// https://fortniteapi.io/
// npm i jwt-decode

function App() {
  
  localStorage.setItem('token', '015811d9-22f75ab8-a69b7fab-a7459eb7')
  const token = localStorage.getItem('token');
 

  useEffect(function (){

    fetch('https://fortniteapi.io/v2/items/sets?lang=en', {
      headers: {
        'Content-type': 'application/json',
        'Authorization': token, // notice the Bearer before your token
    }
    } )
  .then(response => response.json())
  .then(json => console.log(json))

  },[]);

  
  
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
