// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Link,
//     Route,
//     useNavigate
// } from "react-router-dom";


// import logo from "../Images/logo.png";
// import "../CSS/NavigationStyles.css"

// const NavigationLink = () => {

//     return(
//         <div style={{backgroundColor:'#08385e', opacity:'90%', boxShadow: '2px 2px 4px 0 rgba(0,0,0,0.2)', border:'none'}} fixed="top">
//             <div style={{height:'140px'}}> 
//                 <Navbar expand="lg" className="navbar" style={{paddingLeft:'8%', paddingTop:'5%'}}>
//                     <Container fluid>
//                         <Nav className="me-auto my-2 my-lg-0 mx-5" style={{maxHeight: '100px'}}>
//                             <Nav.Link as={Link} to={"/"} className="nav-link" style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px', color:'white'}}>Home</Nav.Link>
//                             <Nav.Link as={Link} to={"/"} className="nav-link" style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px',color:'white'}}>About</Nav.Link>
//                             <Nav.Link as={Link} to={"/Lhakhang"} style={{padding:'26px', paddingRight:'8%', fontFamily:"Poppin", fontSize:'20px', color:'white'}}>Lhakhang</Nav.Link>

//                             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                                 <Navbar.Brand href="/">
//                                     <img
//                                         src={logo}
//                                         width="100"
//                                         height="70"
//                                         className="d-inline-block align-top"
//                                         alt="logo"
//                                     />
//                                 </Navbar.Brand>
//                             </div>

//                             <Nav.Link as={Link} to={"/Event"} style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px', color:'white'}}>Event</Nav.Link>
//                             <Nav.Link as={Link} to={"/"} style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px', color:'white'}}>Contact</Nav.Link>

//                             <Nav.Link as={Link} to={"/Donate"} style={{fontFamily:"Poppin", fontSize:'20px', color:'white'}}>
//                                 <Button style={{border:'none', width:'100%', height:'40px', marginTop:'14px',
//                                     marginRight:'3px', borderRadius:'50px',
//                                     backgroundColor:'#e36e24', color:'black',
//                                     fontFamily:"Poppin", fontSize:'18px'}}>
//                                     Donate
//                                 </Button>
//                             </Nav.Link>
//                         </Nav>
//                     </Container>
//                 </Navbar>
//             </div>
//         </div>
//     );
// };

// export default NavigationLink;


import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Link, Route, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import "../CSS/NavigationStyles.css";

const NavigationLink = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="navigation">
      <Navbar
        expand="lg"
        className="navbar"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={"/"} className="nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to={"/"} className="nav-link">About</Nav.Link>
              <Nav.Link as={Link} to={"/Lhakhang"} className="nav-link">Lhakhang</Nav.Link>
              <Nav.Link as={Link} to={"/Event"} className="nav-link">Event</Nav.Link>
              <Nav.Link as={Link} to={"/"} className="nav-link">Contact</Nav.Link>
              <Nav.Link as={Link} to={"/Donate"} className="nav-link">
              <Button style={{border:'none', width:'100%', height:'40px',
                                    marginRight:'3px', borderRadius:'50px',
                                    backgroundColor:'#e36e24', color:'black',
                                    fontFamily:"Poppin", fontSize:'18px'}}>
                                    Donate
                                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationLink;


