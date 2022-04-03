import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import './SignUp.css'
import { Link , useHistory} from 'react-router-dom';
import Navbar from '../NavBar/Navbar';


const SignUp = () => {

    // define the state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setcity] = useState('')
  const [security, setSecurity] = useState('')

  const history  = useHistory();

  const signupUser = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      alert("Enter valid email pattern like 'abc@gmail.com'")
      return
    }
  if (firstName.length === 0) {
      alert('Enter First Name')
  }
  else if (lastName.length===0) {
      alert('Enter Last Name')
  }
  else if (mobileNo.length===0){
      alert('Enter mobile')
  }
  else if (email.length===0){
      alert('Enter email ')
  }
  else if (password.length===0){
      alert('Enter password')
  }else if (password.length < 7 || password.length > 12 ){
    alert('Password range exceeds, enter password in between 4 to 12')
  }
  else if (address.length===0){
      alert('Enter address')
  }
  else if (pincode.length===0){
      alert('Enter pincode')
  }else if (pincode.length <= 5 || pincode.length >= 7){
    alert('Invalid Pincode range, enter exact 6 number  ')
  }
  else if (city.length===0){
      alert('Enter city')
  }
  else if (security.length===0){
    alert('Enter state')
  }
  else{
      const data = new FormData()
      console.log(data)
      console.log(firstName)
      console.log(lastName)
      console.log(mobileNo)
      console.log(email)
      console.log(password)
      console.log(address)

      console.log(pincode)
      console.log(city)
      console.log(security)
      
      data.append('firstName',firstName)
      data.append('lastName',lastName);
      data.append('mobileNo',mobileNo);
      data.append('email',email);
      data.append('password',password);
      data.append('address',address);
      data.append('pincode',pincode);
      data.append('city',city);
      data.append('security',security);
    
      console.log(data)


      const url = 'http://localhost:8080'

     // http://localhost:8080/register

      axios.post(url+'/register',data).then((response)=>{
          
          const result = response.data
      
          if(result.status === 'success'){
              alert('SignUp Sucesssfully')
              history.push('/signin')
          }
          else{
              
              alert('Something went wrong try Again')
          }
      })
  }

}





    return (

        <>
        <Navbar />
        <div className="ustyle bg-colo">
          <div >
          <h1>Signup</h1>
          <div >
                  <div className="col-md-3 ">
                      <label>First Name</label>
                      <input
                        onChange={(event) => {
                          // updating the state with user entered value
                          setFirstName(event.target.value)
                        }}
                        placeholder="enter your first name"
                        className="form-control input-maargin"
                        type="text"
                      />
                  </div>
                  <div className="col-md-3 ">
                      <label>Last Name</label>
                      <input
                        onChange={(event) => {
                          // updating the state with user entered value
                          setLastName(event.target.value)
                        }}
                        placeholder="enter your last name"
                        className="form-control input-maargin"
                        type="text"
                      />
                  </div>
                  <div className="col-md-3">
                    <label>Mobile Number</label>
                    <input
                      onChange={(event) => {
                        // updating the state with user entered value
                        setPhone(event.target.value)
                      }}
                      placeholder="enter your mobile number"
                      className="form-control input-maargin"
                      type="text"
                    />
                  </div>
                  <div className="col-md-3 ">
                    <label>Enter Email</label>
                    <input
                      onChange={(event) => {
                        // updating the state with user entered value
                        setEmail(event.target.value)
                      }}
                      placeholder="enter your email"
                      className="form-control input-maargin"
                      type="text"
                    />
                  </div>
                  <div className="col-md-3 ">
                    <label>Enter Password</label>
                    <input
                      onChange={(event) => {
                        // updating the state with user entered value
                        setPassword(event.target.value)
                      }}
                      placeholder="enter your password"
                      className="form-control input-maargin"
                      type="password"
                    />
                  </div>
                  <div className="col-md-3 ">
                    <label>Enter Address</label>
                    <input
                      onChange={(event) => {
                        setAddress(event.target.value)
                      }}
                      placeholder="enter your area"
                      className="form-control input-maargin"
                      type="text"
                    />
                  </div>
                 
                  <div className="col-md-3 ">
                    <label>Enter City</label>
                    <input
                      onChange={(event) => {
                        setcity(event.target.value)
                      }}
                      placeholder="enter your city"
                      className="form-control input-maargin"
                      type="text"
                    />
                  </div>
                  <div className="col-md-3 ">
                    <label>Enter Pincode</label>
                    <input
                      onChange={(event) => {
                        setPincode(event.target.value)
                      }}
                      placeholder="enter your pincode"
                      className="form-control input-maargin"
                      type="text"
                    />
                  </div>  
                    
                  <div className="col-md-3 ">
                    <label>Security Code</label>
                    <input
                      onChange={(event) => {
                        setSecurity(event.target.value)
                      }}
                      placeholder="enter your security"
                      className="form-control input-maargin"
                      type="text"
                    /> 
                  </div>  
            <div className="col-md-3 ">
                <button onClick={signupUser} className="btn btn-success input-maargin">
                  Signup 
                </button> <Link className="nav-link" to ="/signin">already have an account</Link>
            </div>
          </div>
          </div>
          </div>
        </>
           
      
    )
}

export default SignUp
