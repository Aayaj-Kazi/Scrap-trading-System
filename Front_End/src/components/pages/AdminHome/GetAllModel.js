

import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import './Adminhome.css'
import NavBar2 from '../NavBar/Navbar2/NavBar2'
import UserContext from '../../Session/Session'; 
import { useHistory } from 'react-router-dom';
import GetAllModels from './GetAllModel';

const Details = ({items, title} ) =>{
    const history=useHistory()
   
    return(
        
        <div className="container">
            <div><h2>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive">
                <thead>
                    <th>Company Id</th>
                    <th>Model Id</th>
                    <th>Name</th>
                </thead>
                <tbody>
            {
                items.map((item)=>{
                    return(
                        <tr >
                            <td >{item.companyId}</td>
                            <td >{item.modelId}</td>
                            <td >{item.modelname}</td>
                        </tr>    
                    )
                })
            }
            </tbody>
            </table>
        </div>


    )
}


const GetAllModel = () => {

    const [allDetails, setDetails] = useState([])
    const {value,setValue}=useContext(UserContext)
    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = () => {
        const url = 'http://localhost:8080'
        axios.get(url + '/getmodels').then((response) => {

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
                            <h2><center>All Companies</center></h2>
                            <div>
                                <Details items={allDetails}  ></Details>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default GetAllModel
