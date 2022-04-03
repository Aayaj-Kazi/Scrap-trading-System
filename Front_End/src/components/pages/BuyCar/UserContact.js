import React, { useState, useEffect,useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import UserContext from './../../Session/Session';
import Buycar from './Buycar';

const UserContact = () => {

    const location =useLocation()
    const [user, setUser] = useState([]);
    const history=useHistory()
    const props = location.state.props

    const {value,setValue}=useContext(UserContext)
    const url = 'http://localhost:8080'
   
    useEffect(() => {
        loadUser();
    }, []);

    

  const loadUser = async () => {
    const result = await axios.get(url+'/getuser/'+props.userId);
    setUser(result.data.data);
    console.log(result.data.data);
  };
        // const loadUser = () => {
        //     const url = 'http://localhost:8080'
        //     axios.get(url + '/getuser/'+props.userId).then((response) => {
                
        //         const result = response.data
        //         if (result.status === 'success') {
        //             setUser(result.data)   
        //         }
        //         else {
        //             alert('error occured while getting details')
        //         }
        //     })
           

        // }
    
    return (
        <center>
            <h1>User Details</h1>
            <tr><td>Name:</td><td>{user.firstName}&nbsp;{user.lastName}</td></tr>
            <tr><td>Mobile No:</td><td>{user.mobileNo}</td></tr>
            <tr><td>Email:</td><td>{user.email}</td></tr>
            <tr><td>Address:</td><td>{user.address}</td></tr>
            <tr><td>City:</td><td>{user.city}</td></tr>
            <tr><td>Pincode:</td><td>{user.pincode}</td></tr>
            <tr><td><button className="btn btn-danger" onClick={()=>{history.push('/Buycar')}}>back</button></td></tr>
        </center>
        
    )
}

export default UserContact
