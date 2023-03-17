import logo from './logo.svg';
import './App.css';


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
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand"  href="/">TextUtils</a >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span >
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/">About</a >
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     
     
     
     </>







    </>
  );
  // while returnting you sshould return a single tag and all other tags should be childrenv of returning tag.....but if you want sibling tags also then make ---------->>>>>   <>..all tags inside this </>
}
// the about written code is jsx---(html hi hain jisne JAvascript ka mukut pehna huwa hai)

export default App;
