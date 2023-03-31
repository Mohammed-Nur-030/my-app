import React,{  useState} from 'react';



export default function (props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was Clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText );
        props.showAlert("Converted to UpperCase", "success");
        
    }
    const handleLoClick=()=>{
        // console.log("UpperCase was Clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText );
        props.showAlert("Converted to LowerCAse", "success");

    }
    const handleOnChange=(event)=>{
        console.log(" On Change ")
        setText(event.target.value);

    }
    const [text , setText]=useState('');
    // ek text variable hai aur uska update wala function ka naam setcount hai.
    // sabse pehle humne use state hook ko import kiya from react..
    // uske baad humne hum chahte hai ki text variable ke ander "Enter text here " value aajaye ...jab bhi mai text ko update karunga mai setCount use karunga
    // ye syntax ko rat lo

    //wrong way to change the state
    // text="newText";

    // correct way to change the state
    // setText("NewText");
  
    return (
        <>
        
        <div className='container'>
            <h1 style={ {color:props.mode ==='dark'?'white':'black'} }>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="7" style={ {backgroundColor:props.mode ==='dark'?'grey':'light', color:props.mode==='dark'?'white':'black'} } ></textarea>
            </div>
            <button  onClick={handleUpClick} onChange={handleOnChange} >Convert To Uppercase</button>
            <button  onClick={handleLoClick} onChange={handleOnChange} >Convert To Lowercase</button>

        </div>
        <div className='container' style={ {color:props.mode ==='dark'?'white':'black'} } >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} minutes to read  </p>
            <h1>Preveiw</h1>
            <p>{text.length>0?text:"Enter something to preveiw here"}</p>

        </div>
        </>
    )

}
