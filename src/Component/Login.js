import React from "react";
import '../styles/Login.css';
import {  FaLock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




function Login (){
    return (
        <div className="wrapper">
            <form action="#">
                <h1>log in</h1>
                <div className="input-box">
                    <input type="email" placeholder="email" required/>
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password" required/>
                    <FaLock className="icon" />
                </div>
                <div className="remeber-me">
                    <label><input type="checkbox" />remeber me</label>
                    <a href="#">forget password</a>
                </div>
                <button className="btn" type="submit">log in</button>
                <div className="reg-link">
                    <p>dont have an account? <a href="#">Register</a></p>
                </div>
                
            </form>
        </div>
        

    );
}
export default Login;