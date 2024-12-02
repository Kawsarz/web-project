import {React} from 'react';
import { Navbar, Nav ,NavDropdown,Container, Image} from 'react-bootstrap';
import { Link as ScrollLink } from "react-scroll";
import './MyNavbar.css';
import MyAlert from './Alert';


const MyNavbar = () => {

    return (
    
    <Navbar bg="light" variant="light" expand="md" fixed="top">
        <MyAlert/>
        <Container fluid style={{ marginTop: '35px' }}>
        
            <Navbar.Brand href="#" className='nav-item'>
                <Image  src={require("../img/logo.jpg")} alt="Logo" style={{ width: '80px' }} className="rounded-pill"/>
            </Navbar.Brand >
            <Navbar.Brand className="nav-item">
                Yalla-Sawa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="mynavbar" />
            <Navbar.Collapse id="mynavbar">
                <Nav className="me-auto">
                <ScrollLink to="MainCarousel" className="nav-link custom-scroll-link"  duration={400}>
                    About us
                </ScrollLink>
                <ScrollLink to="MyCarousel1" className="nav-link custom-scroll-link"  duration={400}>
                    Plans
                </ScrollLink>
                <ScrollLink to="MyCarousel2" className="nav-link custom-scroll-link"  duration={400}>
                    Locations
                </ScrollLink>
                <ScrollLink to="Footer" className="nav-link custom-scroll-link"  duration={400}>
                    Help
                </ScrollLink>
                    
                </Nav>
                <Nav className="me-5">
                    <NavDropdown title= 'Profile' id="myprofile" > 
                        {/* <NavDropdown.Item href="#EditProfile"classname="navbar-dropdown">Edit Profile</NavDropdown.Item>
                        <NavDropdown.Divider/> */}
                        <NavDropdown.Item href="#Logout"  classname="navbar-dropdown">
                            <Nav.Link href="/login" >
                                Log out
                            </Nav.Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    );
}
export default MyNavbar;