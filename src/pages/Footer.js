import React from "react"
import "./Footer.css"

function Footer() {
    return (
        <div className="container">
            <hr className="hr"></hr>
            <div class="row">
                <div class="col">
                    <h1 className="fs-1">Book an Ola from the App</h1>
                    <p className="text-light fs-4   ">Download the app for exclusive deals and ease of booking</p>
                    <div>
                        <div class="row mt-5">
                            <div class="col">
                                <img src={require("../assets/playstore.png")} className="w-50" alt="" />
                                <img src={require("../assets/appstore.png")} className="w-50" alt="" />
                            </div>
                            <div class="col">

                            </div>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <img src={require("../assets/ola-booking.png")} className="w-50 ms-5" alt="" />
                </div>
            </div>
            <hr></hr>
            <div class="container mt-5">
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <img src={require("../assets/ola-support.png")} className="w-50 ms-5" alt="" />
                            </div>
                            <div class="col">
                                <h5>24/7 Customer Support</h5>
                                <p>A dedicated 24x7 customer
                                    support team always at your
                                    service to help solve any problem</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <img src={require("../assets/send_out_succour.png")} className="w-50 ms-5" alt="" />
                            </div>
                            <div class="col">
                                <h5>Your Safety First</h5>
                                <p>Keep your loved ones informed
                                    about your travel routes or call
                                    emergency services when in need</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <img src={require("../assets/ola-best-driver.png")} className="w-50 ms-5 " alt="" />
                                </div>
                            <div class="col">
                                <h5>Top Rated Driver-Partners</h5>
                                <p>All our driver-partners are
                                    background verified and trained to
                                    deliver only the best experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Footer