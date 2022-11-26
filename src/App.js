// import './App.css';
import Navbar from './components/Navbar'; 
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';


// react router dom
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  
  

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = "black" 
      document.body.style.color = "white" 
      showAlert("Dark mode has been enabled", "warning")
      document.title = 'TextUtils - Dark mode'
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white" 
      document.body.style.color = "black" 
      showAlert("Light mode has been enabled", "danger")
      document.title = 'TextUtils - Light mode'
    } 
  }
  
  return (
    <>
   <Router>
   
  <Navbar  mode ={mode} toggle={toggleMode}  title = "TextUtils" media1 = "Facebook" media2 = "Instagram" media3 = "linkedin" about = "About" />
  < Alert  alert = {alert}  />
 
  
  {/* <Switch>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Form alertFunc = {showAlert} />
          </Route>


        </Switch> */}

<Routes>

<Route exact path="/about" element = {<About />}  />
<Route exact path="/" element = {<Form alertFunc = {showAlert} />}  />


</Routes>


    
        </Router>
    </>
  );
}

export default App;
