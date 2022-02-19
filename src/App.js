import './App.css';

function App() {
  const h1 = <h1>ClassvsClassName</h1>;
  const myDiv = <div className="big">I AM A BIG DIV</div>;
  const h1SelfClosTags = <h1>Self-Closing Tags</h1>;
  return (
    <div className="App">
      <header className="App-header">
        {h1}
        {myDiv}
        {h1SelfClosTags}
      </header>
    </div>
  );
}

export default App;
