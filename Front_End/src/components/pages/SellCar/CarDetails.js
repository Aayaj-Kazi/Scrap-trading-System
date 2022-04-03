
import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom';
import './Sellcar.css'
const CarDetails = ({items, title} ) =>{

     const history=useHistory()


    // const deleteCar=(id)=>{
    //     console.log(id);
    //     const url = 'http://localhost:8080'
    //     axios.delete(url + '/deletecar/'+id).then((response) => {
    //         const result = response.data
    //         if (result.status === 'success') {
    //             alert(`deleted car ${id}`)   
    //         }
    //         else {
    //             alert('error occured while deleting user')
    //         }
    //     })
    // }
    
    return(
        <div className="container">
            <div><h2>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive">
                <thead>
                    <th>Company</th>
                    {/* <th>Company Id</th> */}
                    <th>Model</th>
                    <th>Fuel Type</th>
                    <th>Km</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Date</th>
                    <th>City</th>
                </thead>
                <tbody>
            {
                // items.map((item)=>{
                //     return(
                //         <tr>
                //             <td>{item.carId}</td>
                //             {/* <td>{item.companyId}</td> */}
                //             <td>{item.modelId}</td>
                //             <td>{item.fuelType}</td>
                //             <td>{item.kmDriven}</td>
                //             <td>{item.price}</td>
                //             <td>{item.color}</td>
                //             <td>{item.date}</td>
                //             <td>{item.city}</td>
                //             <button className="btn btn-danger" 
                //                     onClick={()=>deleteCar(item.carId)}        
                //             >Delete</button>
                //         </tr>    
                        
                //     )
                // })
                items.map((item)=>{
                    return(
                        <tr>
                            <td>{item.companyName}</td>
                            {/* <td>{item.companyId}</td> */}
                            <td>{item.modelName}</td>
                            <td>{item.fuelType}</td>
                            <td>{item.kmDriven}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.date}</td>
                            <td>{item.city}</td>
                            <button className="btn btn-danger list-btn" 
                                      onClick={()=>{ history.push('/deleteCar',{item:item})}}
                            >Delete</button>
                        </tr>    
                        
                    )
                })
                
            }
            </tbody>
            </table>
        </div>


    )
}

export default CarDetails