import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '/public/image.png'
import user from '/public/user.png'
import transaction from '/public/transaction.png'
import data from'/public/data.png'

function Middle() {
  return (
    <div>
      <div className="content">
        <div className="content-w">
        <h1>Welcome to Apna Bank !</h1>
        <p>
            Making Your Banking Experience Simply the Best !
        </p>
        <NavLink to='./create-user'>
        <button >Start Now</button>
        </NavLink>
        </div>
      <div className="image">
     <img src={Image} alt="Image" />
      </div>
     
      </div> 
      <div className="heading">
      Our Services
      </div>
      <div className="cards">
        <NavLink to='/create-user'>
        <div className="card1">
              <img src={user} alt="user"  />
             <p> Add Users</p>
        </div>
        </NavLink>
        <NavLink to='/transactions'>
        <div className="card2">
          <img src={transaction} alt="transaction"  />
          <p> Money Transactions</p>
        </div>
        </NavLink>
        <NavLink to='/Allcustomers'>
        <div className="card3">
          <img src={data} alt="data" />
          <p>Users Data</p>
        </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Middle
