import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MainCarousel from "../Home/MainCarousel/MainCarousel";
import Footer from "../Home/Footer/Footer";
import './Signup.css'
import NavLogin from "./NavLogin";

function Login() {    //champ bl formulaire l htinon, set.. hydol fct qui permette de mettre a jour ces etats
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();//pour derigee navigation aa page tenye mn baad ma n3ml inscription

    const handleSubmit = (e) => { //fct hk smyneha , enda paramettre event 
        e.preventDefault(); //hk bala ma nhna n3ml refresh bass n3ml subment bytsjl w bbyn w mrouh aa page tenye

        // Send login request
        axios.post("http://localhost:3000/api/login", { email, password })//hon on va envoyer une requette post avec pass, email l fwtn l user 
            .then(result => {
                if (result.data.success) {
                    localStorage.setItem('user', JSON.stringify({ name: result.data.name, email }));

                    navigate("/home"); //eza success srt l home ha y5dne aal home page
                } else {
                    alert(result.data.message); // eza ma njht l post sar fi error bt3tena alert
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <NavLogin/>
            <MainCarousel/>
        <div className="signup-background">
            <div className="signup-container">
                <h2><center>Login</center></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text" 
                               placeholder='Enter Email' 
                               autoComplete='off' 
                               name='email' 
                               className='form-control rounded-0' 
                               onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type="password" 
                               placeholder='Enter Password' 
                               name='password' 
                               className='form-control rounded-0' 
                               onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
        <Footer/>
     </div>
    );
}

export default Login;
