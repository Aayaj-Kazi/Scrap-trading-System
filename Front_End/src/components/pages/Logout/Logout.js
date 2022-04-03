import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import SignIn from './../SignIn/SignIn';

const Logout = () => {

   
    const history = useHistory();
    const {value,setValue} = useContext(UserContext)
    
    return (
        <center className=" bg-colo">
            
            <h1>Thank You </h1>
            <h3>Visit Again..........</h3>
            <a href="/SignIn"><button className='btn btn-success' >Sign In Again</button></a>
        </center>
    )
    setValue(null)
}


export default Logout
