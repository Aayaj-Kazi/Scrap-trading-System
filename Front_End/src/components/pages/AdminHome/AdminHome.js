import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import './Adminhome.css'
import Details from './Details'
import NavBar2 from '../NavBar/Navbar2/NavBar2'
import UserContext from '../../Session/Session'; 
import { useHistory } from 'react-router-dom';



const AdminHome = () => {

    const history=useHistory()
    const {value,setValue}=useContext(UserContext)
   
    return (
        <>  
            <NavBar2 />
            <div className=" bg-colo">
                <div style={{display:'flex'}} >
                {/* <HeaderAdmin /> */}
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome
