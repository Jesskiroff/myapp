import React from 'react';
import ReactDOM from 'react-dom';

const name = "Jessica";
const lName = "Kiroff"
const currentDate = new Date();
const year = currentDate.getFullYear();
{/*const numb = 7; */}


ReactDOM.render(
  <div>

   {/*<h1>Hello {name} {lname}!</h1>*/}
   {/*<h1>Hello {name + " " + lName}</h1>*/}
    <h1 className="heading">Created by {`${name} ${lName}`} </h1>
    {/*one can add any expression into curly braces but not statements (such as if statements) */}
    <p>Your lucky number is {Math.floor(Math.random() * 5)} </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);