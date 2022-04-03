import React from 'react'

const AboutUs = () => {
    return (
        <div id="about" className="container-fluid bg-#f0f8ff">
            <div class="row">
                <div class="col-sm-8">
                    <h2>About Company Page</h2><br />
                    <h5>CARS24 is a next generation ecommerce platform for pre-owned autos (cars and bikes). We provide the best experience for car buyers by offering a wide assortment of certified cars that are home delivered in a click of a button while sellers get the best price of their vehicles in less than 1 hour</h5><br />
                    <p>The first-class destination for second-hand cars!
CARS24 is your single stop for buying or selling used cars, all over India. We've brought together cutting-edge technology with country-wide partners and more importantly, deep understanding of what buyers and sellers need. We solve all pain points associated with selling an existing car, or purchasing a pre-loved one. Whether you're buying or selling, you get a quick, easy, fair, transparent, hassle (and haggle) free process.</p>
                    {/* <br><button class ="btn btn-default btn-lg">Get in Touch</button> */}

                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-signal logo"></span>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-grey">
                <div class="row">
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div class="col-sm-8">
                        <h2>Want to know about buying cars with us?</h2><br />
                        <h4></h4><br />
                        <p>Instead, log on to CARS24, describe your car, get a fair offer on it instantly, and sell it in less than an hour from your home or our branch. Our network of channel partners across the country bid for every car sold on our platform, ensuring a quick sale with a price that you will be happy with. We aim to bring down the car-selling process to a matter of a few hours, and let you sell your car from anywhere without even having to get off your couch.</p>
                    </div>
                </div>
            </div>


        </div>



    )
}

export default AboutUs
