import React from "react"
import "./bodytext.css";
import Slider from "./Slider";



function BodyText() {
    return (
        <div className="container mt-5">
            <h1>A car for every occasion</h1>
            <h6>Ola offers city taxis, inter-city cabs, and local cabs at hourly packages</h6>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={require("../assets/00000000356.jpg")} class="card-img-top" alt="..." />
                        <div className="d-flex justify-content-end">
                            <img src={require("../assets/ola-prime-sedan-active.png")} class="card-image " alt="..." />

                        </div>

                        <div class="card-body">
                            <h5 class="card-title">City taxi</h5>
                            <p class="card-text">
                                The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={require("../assets/00000000357.jpg")} class="card-img-top" alt="..." />
                        <div className="d-flex justify-content-end">
                            <img src={require("../assets/ola-outstation-active.png")} class="card-image " alt="..." />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Outstation</h5>
                            <p class="card-text">
                                Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel service. Choose from a range of AC cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one way routes.
                                .</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={require("../assets/00000000380.jpg")} class="card-img-top" alt="..." />
                        <div className="d-flex justify-content-end">
                            <img src={require("../assets/ola-outstation-active.png")} class="card-image " alt="..." />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Rentals</h5>
                            <p class="card-text">
                                With Ola Rentals you get a cab at your disposal. So be it a  day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mt-5">Why ride with Ola?</h1>
            <h6 className="">The best way to travel to your destination</h6>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class=" card-slide">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={require("../assets/00000000368.jpg")}class="img-fluid " alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="ms-5">
                                <h5 class="card-title">Cabs for Every Pocket</h5>
                                <p class="card-text">From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" card-slide mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={require("../assets/00000000371.jpg")} class="img-fluid " alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="ms-5">
                                <h5 class="card-title">In Cab Entertainment</h5>
                                <p class="card-text">Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" card-slide  mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={require("../assets/00000000370.jpg")}class="img-fluid" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="ms-5">
                                <h5 class="card-title">Secure and Safer Rides</h5>
                                <p class="card-text">Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" card-slide mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={require("../assets/00000000372.jpg")} class="img-fluid " alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="ms-5">
                                <h5 class="card-title">Cashless Rides</h5>
                                <p class="card-text">Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <Slider/>

        </div>
    )
}
export default BodyText