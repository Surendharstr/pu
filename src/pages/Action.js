import React, { useEffect, useState } from "react";
// import { useForm } from 'react-hook-form';
import "./Action.css";
import 'react-toastify/dist/ReactToastify.css';
import OTPInput, { ResendOTP } from "otp-input-react";

// import bgImage from "../assets/Ola Auto, Ride without bargaining - Hindi.mp4"
import axios from "axios";
import Content from "./content";

function Action() {
    const [OTP, setOTP] = useState("");
    const [input, setInput] = useState('');
    const [data, setData] = useState([])


    const [open, setOpen] = useState(p => !p)
    console.log(open)
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    const handleOpen = () => {

        if (message === "Your email looks good!") {
            setOpen(false)
        }
    }


    const emailMessage = /\S+@\S+\.\S+/;

    const validateEmail = (e) => {
        setInput(e.target.value)
        const email = e.target.value;
        if (emailMessage.test(email)) {
            setIsValid(true);
            setMessage("Your email looks good!");
        } else {
            setIsValid(false);
            setMessage("Please enter a valid email!");
        }
    }

  
    const [get, setGet] = useState({

    });
    //   const apiCalling = async () => {

    //       await setGet(get)
    //         .then((res) => {
    //           console.log("res", res);


    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     }
    useEffect(() => {
        let data = {
            email: "surendharstr@yopmail.com"

        }
        axios.post("http://192.168.0.166:8000/signup", data)
            .then(res => {
                setGet(res.data)
                console.log(res)
            })
    }, [])
    console.log(get)
    return (

        <div>

            <div className="nav-bar">
                <img src={require("../assets/ola-logo.png")} className="nav-logo ms-4" alt="" />
                <div className="nav-list">
                    <ul className="list-unstyled d-flex">
                        <li className="m-2 mt-3">Ola S1</li>
                        <li className="m-2 mt-3">Ola Electric</li>
                        <li className="m-2 mt-3">Ola futureFactory</li>
                        <li className="m-2 mt-3">Ola Corporate</li>
                        <div className="d-flex ms-5">
                        <button className="cab-btn m-2">Book an Ola Cab</button>
                        <button  className="free-btn m-2">Free S1 Test Ride</button>
                        </div>
                       </ul>
              
                </div>
                
            </div>   
            <div class="bg-video-wrap">
            <img src={require("../assets/00000000383.jpg")} className="background-image" alt="" />
         
                <div class="overlay">
                    <h1 className="aaa"> Book a City Taxi to your destination in town</h1>
                    <h3 className=" bbb " >Choose from a range of categories and prices </h3>
                </div>

            </div>
        

            {/* <div style={{ width: "100%" }}>
                <video autoPlay loop muted width="100%">
                    <source src={bgImage} type="video/mp4" />
                </video>

                </div> */}

                <div className="box">

                    {open === true ?
                        <div >

                            <img src={require("../assets/ola-logo.png")} className="logo-image" alt="" />
                            <h5 className="text-center">Enter your email account</h5>
                            <p className="text-center text-secondary">A 4-digit OTP will be sent on Mail</p>
                            <div>

                                <input
                                    type="email"
                                    placeholder="Enter Your Email address"
                                    className="mail-input"
                                    name="email"

                                    onChange={validateEmail}
                                />
                                <div className={`message ${isValid ? "success" : "error"}`} >
                                    <p className=" text-center">{message}</p>
                                </div>



                                <button className="btn btn-primary w-100 mt-3 mb-3" onClick={() => { setData([...data, input]); handleOpen(); }}>Next</button>
                            </div>
                        </div>

                        :
                        <div >
                            <img src={require("../assets/ola-logo.png")} className="logo-image" alt="" />
                            <h2 className="text-center">Mail address Verification</h2>
                            <p>Enter the code we just send on your mail address:
                                {data.map(item => (
                                    <p className="text-danger">{item}</p>
                                ))}

                            </p>
                            <div className="d-flex  justify-content-center">
                                <OTPInput
                                    value={OTP}
                                    onChange={setOTP}
                                    autoFocus
                                    OTPLength={4}
                                    otpType="number"
                                    disabled={false}
                                    secure
                                />

                            </div>
                            <p>Don't receive the code?</p>
                            <ResendOTP className="Resend" handelResendClick={() => console.log("Resend clicked")} />
                            <button className="btn btn-primary w-100 mt-3 mb-3" type="button"> Verify </button>
                        </div>
                    }
                </div>
        
            <Content />

        </div>


    )
}
export default Action

