import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="left">
            <div className="top">
                <h1>Best <span>Marketing</span></h1>
                <h1>Digital Agency</h1>
            </div>
            <div className="center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe recusandae, voluptates unde maiores iure?</p>
            </div>
            <div className="bottom">
                <a href='/' className="start">Get Started</a>
                <a href='/about' className="watch">Watch Video</a>
            </div>
        </div>
        <div className="right">
            <img src="https://img.freepik.com/free-vector/pharmaceutical-marketing-abstract-concept-vector-illustration-pharmaceutical-digital-agency-medicine-marketing-strategy-drugs-advertising-medical-equipment-market-promotion-abstract-metaphor_335657-6026.jpg?w=826&t=st=1679333169~exp=1679333769~hmac=de6b5e4947ea9568c8493c6e30f4daddb591d41987c4c2bf3aea070ebb2f0503" alt="" />
        </div>
    </div>
  )
}

export default Header