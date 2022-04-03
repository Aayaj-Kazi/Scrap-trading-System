import axios from 'axios'
import React, { useEffect, useState, useContext} from 'react'
import { useHistory, useLocation } from 'react-router-dom';



const DeleteUser = () => {

    const history=useHistory()
    const location=useLocation()
    const item=location.state.item

    const deleteUser=()=>{
        console.log(item.userId);
        if(item.role==='admin'){
            console.log(item.role);
            alert('Admin user can not be deleted')
            history.push('/getusers')
        }else{
            const url = 'http://localhost:8080'
            axios.delete(url + '/deleteuser/'+item.userId).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    history.push('/getusers')    
                }
                else {
                    alert('error occured while deleting user')
                }
            })
        }
    }
    

    return (
        <center>
            <h3>Are you sure to delete User??</h3>
            <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
            <button className="btn btn-warning" onClick={()=>{history.push('/getusers')}}>Cancel</button>
        </center>
    )
}

export default DeleteUser
