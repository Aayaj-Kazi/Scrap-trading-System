import './ChangePassword.css'
import { useState,useContext } from 'react'
import {  Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { Component }  from 'react';
import Navbar from './../NavBar/Navbar'



const ChangePassword = () => {
  // define the state

  const [email, setEmail] = useState('')
  const [security, setSecurity] = useState('')
  const [password, setPassword] = useState('')
  const history  = useHistory();


  const changepassword = () => {
    
    console.log(`email = ${email}`)
    console.log(`phone = ${password}`)
    console.log(`security = ${security}`)


    if (email.length === 0) {
      alert('please enter email')
    } else if (security.length === 0) {
      alert('please enter password')
    }  else if (password.length === 0) {
      alert('please enter password')
    } 
    else {
      console.log(`email = ${email}`)
      console.log(`password = ${password}`)
      console.log(`security = ${security}`)

      const data = new FormData()
      
      
      data.append('email',email);
      data.append('password',password);
      data.append('security',security);
      
      console.log(data)
      const url = 'http://localhost:8080'

      
      axios.post(url+'/forgotpassword',data).then((response)=>{
            const result = response.data
            if(result.status === 'success'){
                alert('new password updated Succesfull')
                history.push('/singin')
            }
            else{
                alert('Error While Adding Data')
            }
      })

    }






  }

  return (
      <>
      <Navbar />
      <div className="style">
        <div className="container">
          <h1>Change Your Password</h1>
              <div>
                <div>
        
                  <div className="col-md-5">
                        <label>Email</label>
                        <input
                          onChange={(event) => {
                            // updating the state with user entered value
                            setEmail(event.target.value)
                          }}
                          placeholder="enter your email"
                          className="form-control cstyle"
                          type="email"
                        />
                  </div>
                  <div className="col-md-5">
                        <label>Security</label>
                        <input
                          onChange={(event) => {
                            // updating the state with user entered value
                            setSecurity(event.target.value)
                          }}
                          placeholder="enter your security word"
                          className="form-control cstyle"
                          type="password"
                        />
                  </div>      
                  <div className="col-md-5">
                        <label>New Password</label>
                        <input
                          onChange={(event) => {
                            // updating the state with user entered value
                            setPassword(event.target.value)
                          }}
                          placeholder="enter your new password"
                          className="form-control cstyle"
                          type="password"
                        />
                  </div>
                          <br></br>
                  <div className="col-md-4">
                    <button onClick={changepassword} className="btn btn-success cstyle">
                      Confirm 
                    </button> <Link className="nav-link" to ="/signin">Back</Link>
                
                </div>
              </div>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default ChangePassword