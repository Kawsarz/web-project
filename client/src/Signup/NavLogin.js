import React from 'react';
import { Navbar, Nav ,Container, Image} from 'react-bootstrap';
import { Link as ScrollLink } from "react-scroll";
import '../Home/MyNavbar/MyNavbar.css';
import MyAlert from '../Home/MyNavbar/Alert';


const NavLogin = () => {
    return (
    
    <Navbar bg="light" variant="light" expand="md" fixed="top">
        <MyAlert/>
        <Container fluid style={{ marginTop: '35px' }}>
        
            <Navbar.Brand href="#" className='nav-item'>
                <Image  src="logo.png" alt="Logo" style={{ width: '40px' }} className="rounded-pill"/>
            </Navbar.Brand >
            <Navbar.Brand className="nav-item">
                Yalla-Sawa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="mynavbar" />
            <Navbar.Collapse id="mynavbar">
                <Nav className="me-5">
                <ScrollLink to="Signup" className="nav-link custom-scroll-link"  duration={400}>
                    Sign up
                </ScrollLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    );
}
export default NavLogin;