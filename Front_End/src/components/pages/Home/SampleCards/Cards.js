import React from 'react';
import CardItem1 from './CardItem1';

import './Cards.css';




function Cards() {
  return (
    <div className='cards'>
      <h1>Car Gallery</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>


            <CardItem1
              src='images/SUV.jpg'
              text="Explore the All Finest SUV's
                    we have for you"
              label='SUV'

            />

            <CardItem1
              src='images/Sedan.jpg'
              text="Travel through cities in first class Sedan "
              label='Sedan'

            />


          </ul>
          <ul className='cards__items'>


            <CardItem1
              src='images/hatchback.jpg'
              text="As you are considering hatchback, we assume that you are upgrading from two to four-wheeler"
              label='HatchBack'

            />

            <CardItem1
              src='images/mini.jpg'
              text="As the name suggests, a mini car is made for all basic needs that a human wants "
              label='Mini'

            />



          </ul>

        </div>

      </div>
    </div>
  )
}

export default Cards
