import React from 'react'
import { useState, useEffect } from 'react'
import './CardsHome.css'
import CardItem from './CardItem'
import {Imageurl,ext} from './ImageUrl'
import axios from 'axios'

function CardsHome() {
    const [allCars, setAllCars] = useState([])
    useEffect(() => {
        getCarDetails()
    }, [])

    const getCarDetails = () => {
  
        axios.get(Imageurl + "/getcars" ).then((response) => {
            console.log(response.data)
            const result = response.data 
            if (result.status === 'success') {
              setAllCars(result.data)
            }
            else {
                alert('error occured while getting details')
            }
        })
    } 
    
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          

          {allCars.map((car) => {
            {/* console.log(car.carImage) */}
                        return(  
                          <div className='cards__items'>
                        <CardItem     
                            src={car.carImage}
                            label='Verified'
                            modelName={car.modelName}
                            companyName={car.companyName}
                            fuelType={car.fuelType}
                            kmDriven={car.kmDriven}
                            price={car.price}
                            color={car.color}
                            date={car.date}
                            city={car.city}  
                            status={car.status}
                            userId={car.userId}
                            
                       />   
                       </div>
                       ) })}

         
        </div>
      </div>
    </div>
  )
}

export default CardsHome
