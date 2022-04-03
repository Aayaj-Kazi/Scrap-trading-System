import React from 'react';
import { Imageurl } from './ImageUrl';
import UserContact from './../UserContact';
import { Link, useHistory } from 'react-router-dom';




function CardItem(props) {
  const history=useHistory()
  return (
    <>
      <div className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Car Image'
              height="250px"
              src={Imageurl + '/' + props.src}
            />
          </figure>
         
          <div className='cards__item__info'>
            
            <table>
            <h5>Car Overview</h5>

               <tr>
                  <td>                   
                  <div class="listIcons ">
                    <div class="head">Purchase date</div>
                    <div class="head-data">{props.date}</div>
                  </div>
                  </td>
                  <td><div class="listIcons ">
                    <div class="head">Company Name</div>
                    <div class="head-data">{props.companyName}</div>
                  </div></td>
                  <td><div class="listIcons ">
                    <div class="head">Fuel</div>
                    <div class="head-data">{props.fuelType}</div>
                  </div></td>
                </tr>
                <tr>
                  <td><div class="listIcons ">
                    <div class="head">KMs Driven</div>
                    <div class="head-data">{props.kmDriven}KM</div>
                  </div></td>
                  <td><div class="listIcons ">
                    <div class="head">Model</div>
                    <div class="head-data">{props.modelName}</div>
                  </div></td>
                  <td><div class="listIcons ">
                    <div class="head">Color</div>
                    <div class="head-data">{props.color}</div>
                  </div></td>
                </tr>
                <tr>
                  <td><div class="listIcons ">
                    <div class="head">Price</div>
                    <div class="head-data">{props.price}</div>
                  </div></td>
                  <td><div class="listIcons ">
                    <div class="head">City</div>
                    <div class="head-data">{props.city}</div>
                  </div></td>
                  <td><div class="listIcons ">
                    <div class="head">Status</div>
                    <div class="head-data">{props.status}</div>
                  </div></td>
                </tr>
            </table>
           
                <button 
                className="btn btn-success button"
                onClick={()=>{ history.push('/getuserdetail',{props:props})}}
                >Get Car Owner Details</button>
                
                
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;