import axios from 'axios'
import React, { useEffect, useState, useContext} from 'react'
import { useHistory, useLocation } from 'react-router-dom';



const DeleteCar = () => {

    const history=useHistory()
    const location=useLocation()
    const item=location.state.item

    const deleteCar=()=>{
        console.log(item.carId);
        const url = 'http://localhost:8080'
        axios.delete(url + '/deletecar/'+item.carId).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                history.push('/getmycars')  
            }
            else {
                alert('error occured while deleting user')
            }
        })
    }
    

    return (
        <center>
            <h3>Are you sure to delete car??</h3>
            <button className="btn btn-danger" onClick={deleteCar}>Delete</button>
            <button className="btn btn-warning" onClick={()=>{history.push('/getmycars')}}>Cancel</button>
        </center>
    )
}

export default DeleteCar
