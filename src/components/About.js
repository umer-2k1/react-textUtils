import React from 'react'

export default function About() {
  return (
    <>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About this App
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is react Text utils app.</strong> Its aim to provide basic functionality to manipulate user text according to the need. This app provide dark and light theme, react router dom is used for smooth transition. This is my firt React project
      </div>
    </div>
  </div>


</div>
    </>
  )
}
