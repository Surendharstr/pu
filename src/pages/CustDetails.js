import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CustDetails.css";
import { FiMail } from "react-icons/fi";
import { BsFillLockFill, BsFillPersonFill } from "react-icons/bs";



function CustDetails() {

    const history = useHistory();
      const handleLoaction = (e) => {
        e.preventDefault();
        history.push("/Location");

    }
const[state,setState] = useState({
    email:"",
    password:"",
    rePassword:"",
    firstName:"",
    LastName:""

})

const handleEmail = (e) =>{
    console.log(e.target.value)
    const{name,value} = e.target;
    setState({...state,[name]:value})
    }


    
    return (
        <div className="Profile">
            <h4 className="text-center">Registration Form</h4>

            <form>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text h-100"><FiMail /></div>
                    </div>
                    <input type="email" class="form-control" id="inlineFormInputGroup" placeholder="Email" name="email" value={state.email} onChange={handleEmail} />
                </div>
                <div class="input-group mt-4">
                    <div class="input-group-prepend">
                        <div class="input-group-text h-100"><BsFillLockFill /></div>
                    </div>
                    <input type="password" class="form-control" id="inlineFormInputGroup" placeholder="password" name="password" value={state.password} onChange={handleEmail}/>
                </div>
                <div class="input-group mt-4">
                    <div class="input-group-prepend">
                        <div class="input-group-text h-100"><BsFillLockFill /></div>
                    </div>
                    <input type="password" class="form-control" id="inlineFormInputGroup" placeholder="Re-type-password" name="rePassword" value={state.rePassword} onChange={handleEmail}/>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div class="input-group mt-1">
                            <div class="input-group-prepend">
                                <div class="input-group-text h-100"><BsFillPersonFill /></div>
                            </div>
                            <input type="Text" class="form-control" id="inlineFormInputGroup" placeholder="First Name" name="firstName" value={state.firstName} onChange={handleEmail}/>
                        </div>

                    </div>
                    <div className="col">
                        <div class="input-group mt-1">
                            <div class="input-group-prepend">
                                <div class="input-group-text h-100"><BsFillPersonFill /></div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Last Name" name="LastName" value={state.LastName} onChange={handleEmail} />
                        </div>
                    </div>

                </div>
                <div class="form-check form-check-inline mt-4 ms-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  value={state.Male} onChange={handleEmail} />
                    <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"   value={state.Female} onChange={handleEmail}/>
                    <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
                <select class="form-select mt-3" aria-label="Default select example">
                    <option selected>select your state</option>
                    <option value="1">Tamilnadu</option>
                    <option value="2">Andrapradesh</option>
                    <option value="3">Kerala</option>
                    <option value="3">Karnataka</option>
                </select>
                <div class="form-check mt-3" >
                    <input class="form-check-input" type="checkbox"  id="flexCheckChecked"  name="checkbox" value={state.checkbox} onChange={handleEmail} />
                        <label class="form-check-label" for="flexCheckChecked">
                           I agree with terms and conditions
                        </label>
                </div>
               <button type="button" className="w-100 register-btn" onClick={handleLoaction}>Register</button>

            </form>




        </div>
    )
}
export default CustDetails