import React from 'react'
// manually
import PropTypes from 'prop-types';
// import App from './App';
import "./Navbar.css"
// import react-router-dom
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link mx-4 text" to="/about">{props.about}</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-Link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              SocialMedia Links
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">{props.media1}</a></li>
              <li><a className="dropdown-item" href="#">{props.media2}</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">{props.media3}</a></li>
            </ul>
          </li> */}
        </ul>
        <form className="d-flex">
          <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-warning" type="submit">Search</button>
        </form>

      {/* <h5 id='mode-name'>{`${props.mode}`}</h5>
        <i id='mode-icon' style={{fontSize: "22px", color: "yellow"}} className={`${props.icon}`}></i>
  
        <input onClick={props.toggle} type="checkbox" id="switch" />
        
        <label for="switch">MY switch</label> */}

        <h5 id='mode-name'>{`${props.mode}`}</h5>
        <i id='mode-icon' style={{fontSize: "22px", color: "yellow"}} className={`${props.mode ==="dark"?"fa-solid fa-moon":"fa-solid fa-sun"}`}>
        </i>
  
        <input onClick={props.toggle} type="checkbox" id="switch" />
        
        <label for="switch">MY switch</label>


        {/* <div className="dropdown">
  <button  className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Theme
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    
    <li><a onClick={props.toggle} className="dropdown-item" href="#"><i className="fa-solid fa-sun"></i> Ligth</a></li>

    <li><a onClick={props.toggle} className="dropdown-item" href="#"><i className="fa-solid fa-moon"></i> Dark</a></li>
  </ul>
</div> */}








      </div>
    </div>
    
  </nav>
  )
}

// proptypes make sure the component use correct data type...
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
};

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'Set about here',
  };
