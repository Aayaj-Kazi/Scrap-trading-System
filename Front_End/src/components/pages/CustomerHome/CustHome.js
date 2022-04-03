import React, { useState, useContext } from 'react';
import NavBar1 from '../NavBar/Navabar1/NavBar1';
import UserContext from '../../Session/Session';
import { useHistory } from 'react-router-dom';
import Home from './../Home/Home';
import './custHome.css'



const CustHome = () => {
    const history = useHistory()
    const { value, setValue } = useContext(UserContext)
    return (
        <div>
            <NavBar1 />
            <div className="d-flex align-content-stretch flex-wrap bd-highlight example-parent" style={{ height: '200px' }}>
                <ul className="d-flex align-content-stretch flex-wrap bd-highlight example-parent" style={{ height: '200px' }}>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Maruti Suzuki" src="https://fastly-production.24c.in/cars24/brand/maruti-suzuki.png" alt="Maruti Suzuki" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Hyundai" src="https://fastly-production.24c.in/cars24/brand/hyundai.png" alt="Hyundai" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Honda" src="https://fastly-production.24c.in/cars24/brand/honda.png" alt="Honda" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Tata" src="https://fastly-production.24c.in/cars24/brand/tata.png" alt="Tata" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Toyota" src="https://fastly-production.24c.in/cars24/brand/toyota.png" alt="Toyota" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Chevrolet" src="https://fastly-production.24c.in/cars24/brand/chevrolet.png" alt="Chevrolet" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Ford" src="https://fastly-production.24c.in/cars24/brand/ford.png" alt="Ford" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Mahindra" src="https://fastly-production.24c.in/cars24/brand/mahindra.png" alt="Mahindra" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Skoda" src="https://fastly-production.24c.in/cars24/brand/skoda.png" alt="Skoda" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Volkswagen" src="https://fastly-production.24c.in/cars24/brand/volkswagen.png" alt="Volkswagen" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Nissan" src="https://fastly-production.24c.in/cars24/brand/nissan.png" alt="Nissan" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Renault" src="https://fastly-production.24c.in/cars24/brand/renault.png" alt="Renault" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Fiat" src="https://fastly-production.24c.in/cars24/brand/fiat.png" alt="Fiat" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Mercedes Benz" src="https://fastly-production.24c.in/cars24/brand/mercedes-benz.png" alt="Mercedes Benz" class="img-fluid _1jMfy" />
                        </div>
                    </li>
                    <li class="_3kV4n">
                        <div class="text-center _1X3Cw"><img data-title="Mercedes Benz" src="https://fastly-production.24c.in/cars24/brand/ford.png" alt="Jaguar" class="img-fluid _1jMfy" />
                        </div>
                    </li>

                </ul>
        
            </div>

        </div>
    )
    // const isLoggedIn = value;
    // if (isLoggedIn==undefined) {
    //     alert('Please Login')
    //     return <Home />;
    // }else{
    // return (
    //     <div>
    //     <NavBar1/>
    //     {console.log(value.data)}
    //     {value.data.firstName }{value.data.lastName}
    //     </div>
    // )}

}

export default CustHome
