import './App.css';

function App() {
  const h1 = <h1>ClassvsClassName</h1>;
  const myDiv = <div className="big">I AM A BIG DIV</div>;
  const h1SelfClosTags = <h1>Self-Closing Tags</h1>;
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
  return (
    <div className="App">
      <header className="App-header">
        {h1}
        {myDiv}
        {h1SelfClosTags}
        {profile}
      </header>
    </div>
  );
}

export default App;
