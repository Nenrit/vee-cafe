import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="sidebar-container" >
            <div className='logo'>
                <div className="logo-container">
                <h1>VEE</h1>
                <p className='logo-text'>CAFE</p>
                <hr/>
                <p>ORIGINAL TASTE EST.2007</p>
                </div>
            </div>
            <div className='content'>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="menu">MENU</Link>
                <Link to="/contact">CONTACT</Link>
                </div>
                <button >BUY NOW</button>
                <div className="address">
                  <p>Level 13, 2 Elizabeth <br/>St,  Jos,Nigeria</p>
                </div>
        </div>
    </div>
  )
}

export default Sidebar