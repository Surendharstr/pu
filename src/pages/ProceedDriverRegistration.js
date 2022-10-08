// import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import AutoPhoto from "../assets/autokaaran.webp";

const ProceedDriverRegistration = () => {
  const history = useHistory();
  const [isOTPcorrect, setIsOTPcorrect] = useState(0);

  const verifyOtp = () => {
    setIsOTPcorrect(1);
    console.log("isOTPcorrect is" + isOTPcorrect);
  };
  const ifVerifiedOTPproceed = () => {
    isOTPcorrect === 1
      ? history.push("/driverdetailedregnformpage")
      : setIsReenterOTP(true);
    console.log("isOTPcorrect is" + isOTPcorrect);
  };

  return (
    <div className="text-center m-5">
      <img src={AutoPhoto} alt="automan"/>
            <h1>Driver Registration Page</h1>
      <h1> Proceed DriverRegistration - 2/2 </h1>
      <hr></hr>
      <div>
        <label htmlFor="regnproceedpagedriverphno">Mail ID entered : </label>
        <input
          type="text"
          id="regnproceedpagedriverphno"
          name="regnproceedpagedriverphno"
          disabled
        ></input>
      </div>
      <div>
        <label htmlFor="regnproceedpageotp">Enter received OTP: </label>
        <input
          type="text"
          id="regnproceedpageotp"
          name="regnproceedpageotp"
          onChange={verifyOtp}
        ></input>
      </div>
      <div>
        <button
          type="button"
          name="verifyotpbtn"
          onClick={ifVerifiedOTPproceed}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};
export default ProceedDriverRegistration;
