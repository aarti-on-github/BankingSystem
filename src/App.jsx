import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import "./App.css"
import CreateUser from "./components/CreateUser"
import Customers from "./components/Customers"
import Transaction from "./components/Transaction"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-user'element={<CreateUser/>}/>
          <Route path='/Allcustomers'element={<Customers/>}/>
          <Route path='/transactions'element={<Transaction/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
