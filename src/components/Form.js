// manually
import React, {useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState("");
    // setText("Enter text here")

    const handleUpperCase = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.alertFunc("The Text has been converted to Upper-case", "success")
    }
    const handleLowerCase =()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.alertFunc("The Text has been converted to Lower-case", "success")
    }
    const handleClear = ()=>{
        let newText = ''
        setText(newText)
        props.alertFunc("The Text has been cleared", "success")
        
    }
    const handleCopy = ()=>{
        let copyText = document.getElementById("myTextAreas")
        // select text field
        copyText.select()
        
        //copy the text to clipboard
        navigator.clipboard.writeText(copyText.value)
        
        // setText(copyText)
        props.alertFunc("The Text has been Copied to clipboard ", "success")

    }
    // const handleRpunc =()=>{
    //     let punc = "!@#$%^&*()[]{}:?><,./';\/"
    //     let blanks = ''
    //     let analysed
    //     for (const i of punc) {
  
    //     analysed = text.replace(i, blanks)
    // }

    // // text = analysed
    // setText(analysed)
    // }
    
    const handleChange = (event)=>{
        setText(event.target.value)
    }



  return (


      <>
    <div className="container my-4">
  <div className="mb-3">
      <div className="mb-3">
          <h3>Enter your text and see the magic of Text Utils</h3>
          <textarea  onChange={handleChange} value={text} name="text" className="form-control" id="myTextAreas" rows="8"></textarea>
        </div>
    </div>
    <button disabled = {text.length===0}type="submit" className='btn btn-primary mx-2 my-1' onClick={handleUpperCase} >Convert to UpperCase </button>
    <button disabled = {text.length===0}type="submit" className='btn btn-primary mx-2 my-1' onClick={handleLowerCase} >Convert to LowerCase </button>
    <button disabled = {text.length===0}type="submit" className='btn btn-danger mx-2 my-1' onClick={handleClear} >Clear Text</button>
    <button disabled = {text.length===0}type="submit" className='btn btn-success mx-2 my-1' onClick={handleCopy} >Copy Clipboard</button>


    <h2>Your Text Summary</h2>
    <div className="container">
        <p>{text.split(" ").filter((elem) =>{ 
            return elem.length!=0
            }).length} Words and {text.length} Characters</p>
    </div>

    <h3>Preview</h3>
    <p>{text}</p>

    </div>

    


    </>
  )
}
