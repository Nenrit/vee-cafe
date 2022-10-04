import React from 'react'
import background from "../img/cafe-background.jpg"
function Mainpage() {
  return (
    <div className="Mainpage">
      <div style={{backgroundImage: `url(${background})` ,backgroundRepeat:'no-repeat',height:'657px', backgroundSize:'cover'  }}>
      <div className="right-bar">
        <div className="bar-info">
          <h3>VEE CAFE</h3>
          <h1>WELCOME TO OUR CAFE</h1>
          <p>Loren ipsum dolor sit amet.  Etiam ullancopper. Suspendisse a pellentesquedui, non fellas.</p>
          <div className="schedule">
          <p className="days" >WE ARE OPEN <br/> 7 DAYS A WEEK</p>
          <p className="time">8AM - 9PM</p>
          </div>
        </div>

      </div>
      </div>
      
      </div>
  )
}

export default Mainpage