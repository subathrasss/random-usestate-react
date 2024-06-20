import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
function Random()
{
  
  var [n,nfunction]=useState(0)
  function ran()
  {
    var r=Math.floor(Math.random() *10)+1
    console.log(r)
    nfunction(r)
  }
  return(<div>
    <h1>{n}</h1>
    <button onClick={ran}>generate random no</button>

  </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Random/>
)
