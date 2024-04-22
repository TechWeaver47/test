import React from "react";
import '../styles/Register.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";


const Register = () => {
    return (  
        <div className="wrapper-register">
            <form action="#">
                <h1>Register</h1>
                <div className="input-box-register">
                    <input type="email" placeholder="Email" required/>
                    <MdEmail className="icon-register" />
                </div>
                <div className="input-box-register">
                    <input type="password" placeholder="password" required/>
                    <FaLock className='icon-register'/>
                </div>
                <div className="input-box-register">
                    <input type="password" placeholder="Confirm Password" required/>
                    <FaLock className='icon-register'/>
                </div>
                <div className="remeber-me-register">
                    <label><input type="checkbox"/>I agree in the <a href="#">terms of condition</a> </label>
                </div>
                <button className="btn-register">Submit</button>

            </form>

        </div>
    );
}
 
export default Register;
