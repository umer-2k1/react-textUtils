import React from 'react'

export default function Alert(props) {

    // TO capitalize first character of alert type
    const capital = (word) =>{
        let lowerWord = word.toLowerCase()
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1)
    }
  return (
   props.alert && <div className ={`alert alert-${props.alert.type} alert-dismissble fade show`} role="alert">
        <strong>{capital(props.alert.type)}!</strong> : {props.alert.msg}
      {/* <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label = "Close" ></button> */}
    </div>




// props.alert && <div className="alert alert-${props.alert.type} alert-dismissible fade show" role="alert">
//   <strong>{capital(props.alert.type)}!</strong>  : {props.alert.msg}.
//   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>



  )
}
