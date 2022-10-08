import "bootstrap/dist/css/bootstrap.min.css";
// import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";

const DriverDetailedRegnFormPage = () => {
  const [step1s, setStep1s]=useState({display:"block"});
  const [step2s, setStep2s]=useState({display:"none"});
  const [step3s, setStep3s]=useState({display:"none"});
  const [requestVehicleStep, setRequestVehicleStep]=useState({display:"none"});

  const showStep2 = () =>{
    setStep1s({display:"none"});
    setStep2s({display:"block"});
  }

  const showStep3 = () =>{
    setStep2s({display:"none"});
    setStep3s({display:"block"});
  }

  const showReqVehicleStep = () =>{
    setStep1s({display:"none"});
    setRequestVehicleStep({display:"block"});
  }

  // ----------------------------------------------------------------
  // DRIVER REGN DETAILS
  // (driver id -auto generate)
  // (phone - get from previous page)
  // email
  // licenseid
  // car id
  // gender
  // insurance id
  // ----------------------------------------------------------------
  // CAR DETAILS
  // (car id - get from previous page)
  // rc numbers
  // model
  // year
  // owner id
  // company
  // category
  // insurance
  // ----------------------------------------------------------------
  // OWNER DETAILS
  // (owner id - get from previous page)
  // aadhar id
  // phone
  // address
  // email

  // ----------------------------------------------------------------

  return (
    <div className="text-center m-5">
      <div className="row">
        <div className="col step1" style={step1s}>
          <h1>DriverDetailedRegnFormPage - 1 of 3</h1>
          <h3>DRIVER Regn Page</h3>
          <hr></hr>
          <div className="myFormContainer d-flex justify-content-center">
            <Form className="w-50 text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Driver ID</Form.Label>
                <Form.Control type="text" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>License ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Car ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-25">Gender</Form.Label>
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="female"
                  id={`default-radio-female`}
                  label={`Female`}
                />
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="male"
                  id={`default-radio-male`}
                  label={`Male`}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Insurance ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="primary" onClick={showReqVehicleStep}>I Don't have Vehicle and its Details..</Button>
              <Button variant="primary" onClick={showStep2}>I have Vehicle Details Continue...</Button>
            </Form>

            {/* // DRIVER REGN DETAILS
                // (driver id -auto generate)
                // (phone - get from previous page)
                // email
                // licenseid
                // car id
                // gender
                // insurance id 
            */}
          </div>
        </div>
        <div className="col requestVehicleStep" style={requestVehicleStep}>
          <h1>DriverDetailedRegnFormPage - 2 of 3</h1>
          <h3>REQUEST VEHICLE Page</h3>
          <hr></hr>
          <div className="myFormContainer d-flex justify-content-center">
            <Form className="w-50 text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Driver ID</Form.Label>
                <Form.Control type="text" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>License ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Car ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-25">Gender</Form.Label>
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="female"
                  id={`default-radio-female`}
                  label={`Female`}
                />
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="male"
                  id={`default-radio-male`}
                  label={`Male`}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Insurance ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="primary" onClick={showReqVehicleStep}>I Don't have Vehicle and its Details..</Button>
              <Button variant="primary" onClick={showStep2}>I have Vehicle Details Continue...</Button>
            </Form>

            {/* // DRIVER REGN DETAILS
                // (driver id -auto generate)
                // (phone - get from previous page)
                // email
                // licenseid
                // car id
                // gender
                // insurance id 
            */}
          </div>
        </div>
        <div className="col step2" style={step2s}>
          <h1>DriverDetailedRegnFormPage - 2 of 3</h1>
          <h3>CAR Regn Page</h3>
          <hr></hr>
          <div className="myFormContainer d-flex justify-content-center">
            <Form className="w-50 text-start">
              <Form.Group className="mb-3" controlId="formBasicCarID">
                <Form.Label>Car ID</Form.Label>
                <Form.Control type="text" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRCno">
                <Form.Label>RC No</Form.Label>
                <Form.Control type="text" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formModel">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formYear">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label className="w-25">Category</Form.Label>
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="female"
                  id={`default-radio-female`}
                  label={`Female`}
                />
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="male"
                  id={`default-radio-male`}
                  label={`Male`}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Insurance ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="primary" onClick={showStep3}>Continue...</Button>
            </Form>

            {/* // DRIVER REGN DETAILS
                // (driver id -auto generate)
                // (phone - get from previous page)
                // email
                // licenseid
                // car id
                // gender
                // insurance id 
            */}
          </div>
        </div>
        <div className="col step3" style={step3s}>
          <h1>DriverDetailedRegnFormPage - 3 of 3</h1>
          <h3>OWNER Regn Page</h3>
          <hr></hr>
          <div className="myFormContainer d-flex justify-content-center">
            <Form className="w-50 text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Driver ID</Form.Label>
                <Form.Control type="text" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>License ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Car ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-25">Gender</Form.Label>
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="female"
                  id={`default-radio-female`}
                  label={`Female`}
                />
                <Form.Check
                  inline
                  className="w-25"
                  type="radio"
                  name="gender"
                  value="male"
                  id={`default-radio-male`}
                  label={`Male`}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Insurance ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="primary">Complete Registration</Button>
            </Form>

            {/* // DRIVER REGN DETAILS
                // (driver id -auto generate)
                // (phone - get from previous page)
                // email
                // licenseid
                // car id
                // gender
                // insurance id 
            */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DriverDetailedRegnFormPage;
