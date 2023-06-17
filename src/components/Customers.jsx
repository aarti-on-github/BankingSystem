import React from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, doc,deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import Navbar from './Navbar'

function Customers() {

  const [customerList, setCustomerlist] = useState([]);
  const customerlistRef = collection(db, "Users");

  const getCustomerlist = async () => {
    try {
      const data = await getDocs(customerlistRef);
      const filtereData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filtereData);
      setCustomerlist(filtereData);

    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getCustomerlist();
  }, []);

  
  const deletecustomer= async (id) => {
    const custom = doc(db, "Users", id);
    await deleteDoc(custom);
    getCustomerlist();

  }


  return (
    <div className='customer'>
      <Navbar />

      <h1>Our Proud Customers</h1>
      <div className="table">
      
      <table>
        <thead>
          <tr key={"id-1"}>
          <td>No</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
          <td>Account Number</td>
          {/* <td>Balance</td> */}
          </tr>
        </thead>
        <tbody>
        {customerList.map((list, i) => {
          return (
            <tr key={list.id}>
                <td>{i+1}</td>
                <td>{list.FirstName}</td>
                <td>{list.LastName}</td>
                <td>{list.Age}</td>
                <td>{list.Account_Number}</td>
                
                 {/* <td>{list.Balance}</td> */}
                 

              </tr>
          )
        })}

        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Customers
