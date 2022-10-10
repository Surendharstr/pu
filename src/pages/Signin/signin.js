import { useState, useEffect } from "react";
import "./signin.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { useHistory } from "react-router-dom";


function App() {
    const initialValues = { email: "", password: "" };
    const [Values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...Values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(Values));
        setIsSubmit(true);
    };

    useEffect(() =>  {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(Values);
        }
    },[formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.email){

        }
        return errors;
    };

  const history  = useHistory();

    const handleRegister = () =>{
        history.push("/CustDetails");

    }

    return (
        <div className="signin">
            <div className="signin-detail">
                <h1 className="text-center">Log in</h1>
                <div className="d-flex justify-content-center">
                    <FaFacebookF className="m-2 signin-icone" />
                    <FaTwitter className="m-2 signin-icone" />
                    <BsInstagram className="m-2 signin-icone" />
                    <FaLinkedinIn className="m-2 signin-icone" />
                    <FaPinterestP className="m-2 signin-icone" />

                </div>
            
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify}</pre>
            )}

            <form className="ms-1" onSubmit={handleSubmit}>
               
                <div className="ui divider"></div>
                <div className="ui form">

                    <p>{formErrors.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="w-100 mt-3 ms-1 input-data"
                            value={Values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p  className="text-danger">{formErrors.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-100 mt-3 ms-1 input-data"
                            value={Values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-danger">{formErrors.password}</p>
                    <label className="mt-4">confirm Your Password</label><br></br>
                    <input
                        placeholder="confirm password"
                        type="password"
                        name="confirmPassword"
                        className="w-100 mt-3 ms-1 input-data"
                        value={Values.confirmPassword}
                        onChange={handleChange}
                        
                    />
                    <div class="form-check mt-4">
                        <input class="form-check-input" type="checkbox" value={Values.checkbox} name="checkbox" onChange={handleChange} id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            I accept the <span>Terms of Service</span>
                        </label>
                    </div>
                    <button className="signin-btn">SUBMIT</button>
                    <p>Don't have an account? <span onClick={handleRegister}>Register Now</span></p>
                </div>
            </form>
            </div>
        </div>
    );
}

export default App;