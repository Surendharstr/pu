import { useState } from "react";

import { useHistory} from "react-router-dom";
import AutoPhoto from "../assets/autokaaran.webp";


const DriverLoginPage = () => {
  // const [isShowOTP, setIsShowOTP] = useState(0);
  const [isValidOTP, setIsValidOTP] = useState(0);
  // let tryCounter = 0;
  const [errorMsg, setErrorMsg] = useState(null);
  const [dsbledRnot, setDsbledRnot] = useState(true);
  const [isReenterOTP,setIsReenterOTP] = useState(false);
  const checkValidMailId = (e) => {
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setErrorMsg("Invalid Mail Id");
      console.log(errorMsg);
      setDsbledRnot(true);
      setIsValidOTP(0);
    } else {
      setErrorMsg(true);
      setDsbledRnot(false);
      console.log(errorMsg);
      setIsValidOTP(1);
    }
  };

  const history = useHistory();
  // const dsbledRnot = true;

  const isValidShowDtldRegnPg = () => {
    // history.push("/");
    console.log("history is" + history);
    isValidOTP === 1
      ? 
          history.push('/proceedDriverRegn')
      : setIsReenterOTP(true);
  };
  // const showOTP = () => {
  //   setIsShowOTP(1); //place it inside function and set true only if valid
  //   if (isShowOTP === 1)
  //     return (
  //       <div>
  //         <label htmlFor="regnpagedriverphnoOTP">Enter OTP: </label>
  //         <input
  //           type="number"
  //           id="regnpagedriverphnoOTP"
  //           name="regnpagedriverphnoOTP"
  //         ></input>
  //         <button
  //           type="button"
  //           name="submitbtn"
  //           onClick={isValidShowDtldRegnPg}
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     );
  //   else return <p>Check internet Retry after sometime</p>;
  // };

  return (
    <div className="text-center m-5">
          <img src={AutoPhoto} alt="automan"/>
          <h1>Driver Registration Page</h1>
          <h1> DriverRegistration - 1/2 </h1>
          <label htmlFor="regnpagedriverphno">Enter Mail ID: </label>
          <input
            type="text"
            id="regnpagedriverphno"
            name="regnpagedriverphno"
            onChange={checkValidMailId}
          ></input>
          <button
            type="button"
            name="showotpbtn"
            onClick={isValidShowDtldRegnPg}
            disabled={dsbledRnot}
          >
            Send OTP
          </button>
          {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};

export default DriverLoginPage;
