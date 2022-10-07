import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";

function Slider (){
    return(
        <div className="mt-5">
            <h1>Meet our Awesome Fleet</h1>
            <h6>The widest variety of cars to choose from</h6>
         <div className=" ">
         
                <div className="sidebar">
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-auto-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className="sidebar-list">
                        <img src={require("../assets/ola-bike-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-kaali-peeli.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-lux.png")} className="list-logo" alt="" />

                    </div>
                    <div className="sidebar-list">
                        <img src={require("../assets/ola-prime-play.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-prime-sedan-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-prime-suv.png")} className="list-logo mt-4" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-e-rick-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-mini.png")} className="list-logo" alt="" />
                         </div>
                          </div>
                <ul className="d-flex list-unstyled">
                    <li className="ms-5">Auto</li>
                    <li className="ms-5 logo-name">Bike</li>
                    <li className="ms-5 logo-name">Mini</li>
                    <li className="ms-5 logo-name">Prime Sedan</li>
                    <li className="ms-5">Prime Play</li>
                    <li className="ms-5 ">Prime SUV</li>
                    <li className="ms-4 logo-name">LUX</li>
                    <li className="ms-5 logo-name">E-Rick</li>
                    <li className="ms-4 logo-name">Kaali Peeli</li>
                    </ul>
                </div>
                
            <Carousel slide={false} className="w-100">
            <Carousel.Item>
                    <div className="row">
                        <div className="col-6">
                            <img
                                className="d-block w-100"
                                src={require("../assets/auto.png")}
                                alt="First slide"
                            />
                        </div>
                        <div className="col-6">
                         
                                <h2 className="mt-5">Auto</h2>
                                <h5>Get an Auto at your doorstep</h5>
                                <p className="p-one">The all too familiar auto ride, minus the hassle of waiting and haggling for price.
                                A convenient way to travel everyday.</p>
                                 </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/bike.png")}
                                alt="Second slide"
                            />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">Bike</h2>
                        <h5>On Time, Every time.</h5>   
                        <p className="p-one"> Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. 
                            Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town!</p>
                                    
                          
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/mini.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">Mini</h2>
                        <h5>Everyday dependable ride</h5>   
                        <p className="p-one">A regular comfortable AC hatchback that becomes your everyday dependable ride. An economical option for daily commute.</p>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/prime-sedan.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">Prime Sedan</h2>
                        <h5>Sedans with free Wi-Fi and top drivers</h5>   
                        <p className="p-one">Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.</p>
                        </div>
                    </div>



                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100 "
                                src={require("../assets/prime-play.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">Prime Play</h2>
                        <h5>Enjoy music, radio, videos on the go</h5>   
                        <p className="p-one">Cars with in-cab entertainment consoles that allow you to watch movies, listen to music and stay connected while on the move.</p>
                        </div>
                    </div>



                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block "
                                src={require("../assets/prime-suv.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">Prime SUV</h2>
                        <h5>SUVs with free Wi-Fi and top drivers</h5>   
                        <p className="p-one">A perfect choice of car for your weekend getaways, with plenty of room for everyone including that extra bag.</p>
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                        <img
                        className="d-block w-100"
                        src={require("../assets/lux.png")}
                        alt="Third slide"
                    />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">Lux</h2>
                        <h5>The new luxury ride in town</h5>   
                        <p className="p-one">Top-of-the-line luxury cars like Mercedes, BMW, and Audis powered by auto-connect Wi-Fi, at unbeatable fares & attractive hourly rental packages.</p>
                        </div>
                    </div>
                   

                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                        <img
                        className="d-block w-50"
                        src={require("../assets/e-rick.png")}
                        alt="Third slide"
                    />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">E-Rick</h2>
                         
                        <p className="p-one">Go green by booking yourself an e-rickshaw ride online and travel short distances without the hassle of managing and arranging change.</p>
                        </div>
                    </div>
                   

                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                        <img
                        className="d-block w-100"
                        src={require("../assets/kaali-peeli.png")}
                        alt="Third slide"
                    />
                        </div>
                        <div class="col">
                        <h2 className="mt-5">Kaali Peeli</h2>
                        <h5>Haggle-free cashless rides</h5>
                         
                        <p className="p-one">This offering by Ola allows you to book a local black-yellow cab like any other Ola cab.</p>
                        </div>
                    </div>
                   

                </Carousel.Item>
            </Carousel>
          <Footer/>
          
        </div>
    )
}
export default Slider