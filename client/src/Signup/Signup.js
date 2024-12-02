import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import MainCarousel from "../Home/MainCarousel/MainCarousel";
import Footer from "../Home/Footer/Footer"
import './Signup.css'
import NavLogin from "./NavLogin";

function Signup() {    //champ bl formulaire l htinon, set.. hydol fct qui permette de mettre a jour ces etats
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const navigate = useNavigate();//pour derigee navigation aa page tenye mn baad ma n3ml inscription

    const handleSubmit = (e) => { //fct hk smyneha , enda paramettre event 

        e.preventDefault(); //hk bala ma nhna n3ml refresh bass n3ml subment bytsjl w bbyn w mrouh aa page tenye
    
        if (!name || !email || !password) { //ejbere nfwt hl eshya ,required
            alert("All fields are required.");
            return;
        }
    
        axios.post("http://localhost:3000/api/register", { name, email, password }) //hon on va envoyer une requette post avec name, pass, email l fwtn l user 
            .then(result => {
                console.log(result); //afficher result 
                localStorage.setItem('user', JSON.stringify({ name: result.data.name, email})); //ha yhoton bl databse esma user sous forme de json 
                navigate("/login"); //eza success srt l post ha y5dne aal login page
            })
            .catch(err => {
                console.log(err);
                alert("Registration failed, please try again.");// eza ma njht l post sar fi error bt3tena alert 
            });
    }

    return (
        <div>
        <NavLogin/> 
        <MainCarousel/>
        <Element name="Signup">
        <div className="signup-background">
            <div className="signup-container">
                <h2><center>Sign Up</center></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Username</strong>
                        </label>
                        <input type="text" 
                               placeholder='Enter Name' 
                               autoComplete='off' 
                               name='name' 
                               className='form-control rounded-0' 
                               onChange={(e) => setName(e.target.value)} />
                    </div>
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
                        Sign Up
                    </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
        </Element>
        <Footer/>
    </div>
    );
}

export default Signup;
