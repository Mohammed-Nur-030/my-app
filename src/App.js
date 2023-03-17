import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';




// let name= "Mohammed Nur ;)";
function App() {
  return (
    <>
    {/* <div>Hi this is me ,Mohammed Nur</div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Mohammed Nur ; 
        </a>
      </header>
    </div> */}


     <>
      {/* <Navbar  title="This title is added through props"  aboutText="AboutTExt using props"   /> */}


      {/* default props */}
      {/* <Navbar   /> */}

      <Navbar/>


     </>







    </>
  );
  // while returnting you sshould return a single tag and all other tags should be childrenv of returning tag.....but if you want sibling tags also then make ---------->>>>>   <>..all tags inside this </>
}
// the about written code is jsx---(html hi hain jisne JAvascript ka mukut pehna huwa hai)

export default App;
