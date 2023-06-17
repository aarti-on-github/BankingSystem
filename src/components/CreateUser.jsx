import React, { useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, addDoc, doc } from 'firebase/firestore';
import adduser from '/public/adduser.png'
import Navbar from '../components/Navbar'

function CreateUser() {

  const [customerList, setCustomerlist] = useState([]);
  const customerlistRef = collection(db, "Users");

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Age, setAge] = useState(0);
  const [AccNo, setAccNo] = useState(0);
  const [Bal, setBal] = useState(0);

  // const getCustomerlist = async () => {
  //   try {
  //     const data = await getDocs(customerlistRef);
  //     const filtereData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log(filtereData);
  //     setCustomerlist(filtereData);

  //   } catch (err) {
  //     console.error(err);
  //   }
  // }


  const submitCustomer = async () => {
    try {
      await addDoc(customerlistRef, {
        FirstName: Fname,
        LastName: Lname,
        Age: Age,
        Account_Number: AccNo,
        Balance: Bal
      })
    //  getCustomerlist();
    } catch (err) {
      console.error(err);
    }
    location.reload();


  }



  // useEffect(() => {
  //   getCustomerlist();
  // }, []);

  return (
<div className="n">
    <Navbar/>
    <div className="page">
     
    <div className='add-user'>
    <h1>Create Your Account</h1>
      <label>First Name</label>
      <input type="text"
        placeholder=''
        onChange={(e) => setFname(e.target.value)} />

      <label>Last Name</label>
      <input type="text" placeholder=''
        onChange={(e) => setLname(e.target.value)} />

      <label>Age</label>
      <input type="number" placeholder=''
        onChange={(e) => setAge(e.target.value)} />

      <label>Account Number</label>
      <input type="number" placeholder=''
        onChange={(e) => setAccNo(e.target.value)}
      />

      <label>Balance Amount</label>
      <input type="number" placeholder=''
        onChange={(e) => setBal(e.target.value)}
      />
      <button onClick={submitCustomer}>Submit</button>


    </div>

    <div className="user-image">
      <img src={adduser}  />
    </div>
    </div>
    </div>
  )

}

export default CreateUser
