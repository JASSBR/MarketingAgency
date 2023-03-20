import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <a href="/" className="logo"><span>:: </span><h3> Proxylab</h3></a>
        </div>
        <div className="center">
            <a href="/" >Features</a>
            <a href="/">Pricing & Plans</a>
            <a href="/">Support</a>
            <a href="/">About Us</a>
        </div>
        <div className="right">
            <button className="contact">Contact Us</button>
        </div>

    </div>
  )
}
export default Navbar