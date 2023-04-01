import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import React from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  
  Link,

} from 'react-router-dom'





function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils-DarkMode';
      // setInterval(() => {
      //   document.title='TextUtils-is Amazing';

      // }, 2000);
      // setInterval(() => {
      //   document.title=' Install TextUtils now';

      // }, 1500);


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils-LightMode';
      showAlert("Light Mode has been enabled", "success");

    }

  }

  return (



    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

        <Alert alert={alert} />


        <Routes>
          <Route path="/about" element={<About mode={mode}   showAlert={showAlert} />} />
          {/* <Route exact path="/about" element={<About mode={mode}   showAlert={showAlert} />}  ---> this is better /> */}
          

          <Route path="/" element={<TextForm heading="Enter the text to analyse Below" mode={mode} showAlert={showAlert} />} />


        </Routes>



        

      </div>


    </>








  );
  // while returnting you sshould return a single tag and all other tags should be childrenv of returning tag.....but if you want sibling tags also then make ---------->>>>>   <>..all tags inside this </>
}
// the about written code is jsx---(html hi hain jisne JAvascript ka mukut pehna huwa hai)

export default App;
