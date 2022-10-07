import React from "react"


import bgImage from "../assets/Ola Auto, Ride without bargaining - Hindi.mp4"
import BodyText from "./BodyText";
import "./content.css";


function Content() {

 return (
        <div>
            <div className="video-content" >
                <video autoPlay loop muted >
                    <source src={bgImage} type="video/mp4" />
                    </video>
            </div>
            <div class="container hello border">
                <div class="row">
                    <div class="col">
                    <img src={require("../assets/ev.png")} className="mb-2" alt="" />
                    </div>
                    <div class="col">
                    <img src={require("../assets/OLA-S1.png")} className="mt-5" alt="" />
                    <p className="ola-rate">EMI STARTS AT $2,999</p>
                    <div class="vl"></div>
                    </div>
                    <div class="col">
                        <h3 className="mt-4 ad-1">The best scooter ever.</h3>
                        <p className="ad-2">Experience the revolutionary</p>
                        <p className="ad-2 ">Ola S1 at your doorstep</p>
                 
                    </div>
                    <div class="col">
                  <button className="ad-btn">free S1 Test Ride</button>
                    </div>
                </div>
            </div>
         <BodyText/>
          
        </div>
    )
}
export default Content