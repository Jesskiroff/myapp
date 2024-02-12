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
    <h1 className="heading" contentEditable="true" spellCheck="false">Created by {`${name} ${lName}`} </h1>
    {/*one can add any expression into curly braces but not statements (such as if statements) */}
    <p>Your lucky number is {Math.floor(Math.random() * 5)} </p>
    <p>Copyright {year}</p>
    <img className='food-img' src="https://hips.hearstapps.com/hmg-prod/images/pattern-of-slices-citrus-fruit-of-lemons-oranges-royalty-free-image-1690494580.jpg"></img>
    <img className='food-img' src="https://hips.hearstapps.com/hmg-prod/images/fresh-sliced-mini-kiwis-royalty-free-image-1690215764.jpg"></img>
    <img className='food-img' src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BpY2stZnJlc2gtZnJ1aXQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="></img>
  </div>,
  document.getElementById("root")
);