import './App.css';
import React from 'react';

function App() {
  const h1 = <h1>ClassvsClassName</h1>
  const myDiv = <div className="big">I AM A BIG DIV</div>
  const h1SelfClosTags = <h1>Self-Closing Tags</h1>
  const h1JSXInYourJavaScript = <h1>JSX In Your JavaScript</h1>
  const jsxJS = <h2>2+3</h2>
  const h1CurlyBraces = <h1>Curly Braces in JSX</h1>
  const curlyBraces = <h2>{2+3}</h2>
  const digitsPiJSX = <h1>20 Digits of Pi in JSX</h1>
  const math = <h1>2 + 3 = {2 + 3}</h1>
  const h1VariablesJSX = <h1>Variables in JSX</h1>
  const theBestString = 'tralalalala i am da best';
  const h1VariableAttrJSX = <h1>Variable Attributes in JSX</h1>
  const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
  const gooseAlt= "goose";
  const h1EventListnerJSX = <h1>Event Listeners in JSX</h1>
  const kitty = (
    <img 
      src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
      alt="kitty" onClick={makeDoggy}/>
  );
  function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }
  //
  const h1IftatmentsJSX = <h1>JSX Conditionals: If Statements That Do Work</h1>
  function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }
  
  const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  };

  let img;  
  // if/else statement begins here:
  if (coinToss() === 'heads') {
    img = (
      <img src={pics.kitty} alt="kitty" />
    );
  } else {
    img = ( 
      <img src={pics.doggy} alt="doggy" />
    );
  }
  //
  const h1TheTernaryOperator = <h1>JSX Conditionals: The Ternary Operator</h1>
  const img1 = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} alt="pics" />;
  //
  const h1ConditionalJsx = <h1>JSX Conditionals: &&</h1>
  // judgmental will be true half the time.
const judgmental = Math.random() < 0.5;
const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);
//
const h1MapJSX = <h1>.map in JSX</h1>
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map(person => <li>{person}</li>);
//
const h1Keys = <h1>Keys</h1>
const peopleListKeys = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);
//
const h1ReactElement = <h1>React.createElement</h1>
const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);
//
  const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="omer.jpg" alt="omer" />
      <article>
        I LIKE TO SIT
        <br />
        Omer IS MY NAME
        <br />
        THANKS HA LOT
      </article>
    </div>
  );

  const pi = (
    <div>
      <h1>
        PI, YALL!
      </h1>
      <p>
        {Math.PI.toFixed(20)}
      </p>
    </div>
  );
  
  return (
    <div className="App">
      <header className="App-header">
        {h1}
        {myDiv}
        {h1SelfClosTags}
        {profile}
        {h1JSXInYourJavaScript}
        {jsxJS}
        {h1CurlyBraces}
        {curlyBraces}
        {digitsPiJSX}
        {math}
        {pi}
        {h1VariablesJSX}
        {<h2>{theBestString}</h2>}
        {h1VariableAttrJSX}
        {<img src={goose} alt={gooseAlt} />}
        {h1EventListnerJSX}
        {kitty}
        {h1IftatmentsJSX}
        {img}
        {h1TheTernaryOperator}
        {img1}
        {h1ConditionalJsx}
        {favoriteFoods}
        {h1MapJSX}
        {<ul>{peopleList}</ul>}
        {h1Keys}
        {peopleListKeys}
        {h1ReactElement}
        {greatestDivEver}
      </header>
    </div>
  );
}

export default App;
