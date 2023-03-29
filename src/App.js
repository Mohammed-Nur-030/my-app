import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import React from 'react'


 


function App() {

  const [mode,setMode]=useState('light');


 const toggleMode = ()=>{
  if (mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
   
  }

}

  return (
    


     <>
     
      <Navbar  title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">

      <TextForm heading="Enter the text to analyse Below" mode={mode}/>
      {/* <About mode={mode} btnText={btnText}></About> */}
    
      </div>


     </>







    
  );
  // while returnting you sshould return a single tag and all other tags should be childrenv of returning tag.....but if you want sibling tags also then make ---------->>>>>   <>..all tags inside this </>
} 
// the about written code is jsx---(html hi hain jisne JAvascript ka mukut pehna huwa hai)

export default App;
