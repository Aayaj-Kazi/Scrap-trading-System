import axios from 'axios'
import React, { useEffect, useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from './../../Session/Session';
import NavBar1 from './../NavBar/Navabar1/NavBar1';
import CarDetails from './CarDetails';


const GetMyCars = () => {
    const history=useHistory()
    const {value,setValue}=useContext(UserContext)
    const [allDetails, setDetails] = useState([])
    
    useEffect(() => {
        getDetails()
        console.log(value.data);
    }
        , [])
        
    const getDetails = () => {
        const url = 'http://localhost:8080'
        
        axios.get(url + '/getcarbyuserid/'+value.data.userId).then((response) => {

            const result = response.data
            if (result.status === 'success') {
                setDetails(result.data)
                console.log(result.data);   
            }
            else {
                alert('error occured while getting details')
            }
        })

    }

    return (
        <>  
            <NavBar1 />
            <div >
                    <div className=" bg-colo">
                        <h2><center>All Customer Details</center></h2>
                        <div>
                            <CarDetails items={allDetails}  ></CarDetails>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default GetMyCars
