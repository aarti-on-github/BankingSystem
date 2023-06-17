import React from 'react'
import contact from '/public/contact.png'

function ContactUs() {
  return (
    <div className='contact'>
        <div className="con-info">
            <h1>Contact US !</h1>
            <p>Email:apnabank@gmail.com</p>
            <p>Phone:9940284768</p>
            <p>Head Office:Mumbai</p>
        </div>
      <div className="conimage">
        <img src={contact} alt="contact" />

      </div>
    </div>
  )
}

export default ContactUs
