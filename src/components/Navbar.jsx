import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="logo">
                ApnaBank
            </div>
            <div className="items">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/create-user">
                    Add Customers
                </NavLink>
                <NavLink to="/Allcustomers">
                    All our Customers
                </NavLink>
                <NavLink to="/transactions">
                    Transactions
                </NavLink>

            </div>

        </div>
    )
}

export default Navbar
