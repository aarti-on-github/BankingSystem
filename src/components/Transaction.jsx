import React from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, doc, addDoc,deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import Navbar from './Navbar'

function Transaction() {

  const [transactionlist, setTransactionlist] = useState([]);

  const transactionref = collection(db, "transaction");

  const [Account1, setAccount1] = useState(0);
  const [Account2, setAccount2] = useState(0);
  const [Balance, setBalance] = useState(0);

  const getTransactionlist = async () => {
    try {
      const data = await getDocs(transactionref);
      const filtereData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filtereData);
      setTransactionlist(filtereData);

    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getTransactionlist();
  }, []);

  const Transfer = async () => {
    try {
      await addDoc(transactionref, {
        Account1: Account1,
        Account2: Account2,
        Balance: Balance,
      })
      getTransactionlist();
    } catch (err) {
      console.error(err);
    }
    location.reload();


  }

  
  const deletetransaction = async (id) => {
    const custom = doc(db, "transaction", id);
    await deleteDoc(custom);
    getTransactionlist();

  }

  return (
    <div>
      <Navbar />
      <div className="transfer">
        <h1>Transaction</h1>
        <div className="tran-info">
      <label>Senders'Account No</label>
      <input type="number"
        placeholder=''
        onChange={(e) => setAccount1(e.target.value)} />

      <label>Receiver's Account No</label>
      <input type="number" placeholder=''
        onChange={(e) => setAccount2(e.target.value)} />

      <label>Amount</label>
      <input type="number" placeholder=''
        onChange={(e) => setBalance(e.target.value)} />

      <button onClick={Transfer}>Tranfer</button>
      </div>
      <table>
        <thead>
          <tr key={"id-1"}>
          <td>No</td>
          <td>Sender Account</td>
          <td>Receiver Account</td>
          <td>Transfer Amount</td>
          </tr>
        </thead>
       <tbody>
      {transactionlist.map((list, i) => {
          return (
           
            <tr key={list.id}>
                <td>{i+1}</td>
                <td>{list.Account1}</td>
                <td>{list.Account2}</td>
                <td>{list.Balance}</td>
               
              </tr>
           
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
     


  )
}

export default Transaction
