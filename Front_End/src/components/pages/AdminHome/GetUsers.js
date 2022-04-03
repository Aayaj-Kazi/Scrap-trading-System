import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import './Adminhome.css'
import Details from './Details'
import NavBar2 from '../NavBar/Navbar2/NavBar2'
import UserContext from '../../Session/Session'; 



const GetUsers = () => {

    const [allDetails, setDetails] = useState([])
    const {value,setValue}=useContext(UserContext)
    useEffect(() => {
        getDetails()
    } , [])

    const getDetails = () => {
        const url = 'http://localhost:8080'
        axios.get(url + '/getusers').then((response) => {

            const result = response.data
            if (result.status === 'success') {
                setDetails(result.data)   
            }
            else {
                alert('error occured while getting details')
            }
        })

    }

    return (
        <div>  
            <NavBar2 />
            <div className=" bg-colo">
                    
                    <div style={{display:'flex'}}>
                        {/* <HeaderAdmin /> */}
                        <div className="user-table">
                            <h2><center>All Customer Details</center></h2>
                            <div>
                                <Details items={allDetails}  ></Details>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default GetUsers
