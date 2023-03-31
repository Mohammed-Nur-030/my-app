import React from 'react'

function Alert(props) {

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
    
        /* props.alert &&  */
        /* is a syntax ..like if props.alert exists then go for the code or else dont go  */
        props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}!! </strong>{props.alert.msg}
      </div>
      
         
  )
}
 
export default Alert
