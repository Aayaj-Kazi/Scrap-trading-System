import React,{  useContext } from 'react'
import NavBar1 from '../NavBar/Navabar1/NavBar1'
import CardsHome from './CarListCard/CardsHome'
import UserContext from './../../Session/Session';
import './Buycar.css'




const Buycar = () => {
    const {value,setValue}=useContext(UserContext)
    return (
        <>
           <NavBar1 />
           <div>
                <div>
                    <CardsHome />
                </div>
           </div>
           Buy Car page
        </>
    )
}
export default Buycar
