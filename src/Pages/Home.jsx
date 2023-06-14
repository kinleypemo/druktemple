// import React ,{ useRef, useEffect }from "react";
// import "./home.css";
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import HeroBanner from "../Components/HeroBanner";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Link,
//     Route,
//     useNavigate
// } from "react-router-dom";

// import About from "./About";
// import Donate from "./Donate";
// import Event from "./Event";
// import Lhakhang from "./Lhakhang";
// import logo from "../Images/logo.png";
// import "../CSS/NavigationStyles.css"
// import Index from "./Index";

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// import AnchorLink from "react-anchor-link-smooth-scroll";

// import cal from "../Images/cal.png";
// import donate from "../Images/donate.png";
// import temple from "../Images/temple01.png";
// import loc from "../Images/loc.png";
// import mail from "../Images/mail.png";
// import phone from "../Images/phone.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

// // import Map from "./Map";
// import Footer from "./Footer";

// const Home = () => {

//     return(
//         <>
//         <section className="hero" style={{backgroundColor:'white',fontFamily:"Poppin"}}>
        
//         <div style={{backgroundColor:'#2F90AC', opacity:'90%'}}>
//           <div style={{height:'140px'}}>
//     <Navbar expand="lg" className="navbar" style={{paddingLeft:'8%', paddingTop:'5%'}} >
//       <Container fluid >
        
//         {/* <Navbar.Toggle aria-controls="navbarScroll" />  */}
//         {/* <Navbar.Collapse id="navbarScroll"> */}
//           <Nav
//             className="me-auto my-2 my-lg-0 mx-5"
//             style={{ maxHeight: '100px'}} 
//           > 
//             <Nav.Link as={Link} to={"/"} className="nav-link" style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px'}}>Home</Nav.Link>
//             <Nav.Link as={AnchorLink}
//                     href="#about" className="nav-link" style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px'}}>About</Nav.Link>
            
//             <Nav.Link as={Link} to={"/Lhakhang"} style={{padding:'26px', paddingRight:'8%', fontFamily:"Poppin", fontSize:'20px'}}>Lhakhang</Nav.Link>
            
//             <Navbar.Brand href="/"> 
//         <img 
//               src={logo}
//               width="100"
//               height="70"
//               className="d-inline-block align-top"
//               alt=" logo"
//             />
//         </Navbar.Brand>
//             <Nav.Link as={Link} to={"/Event"} style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px'}}>Event</Nav.Link>
//             <Nav.Link href="#contact" as={AnchorLink} style={{padding:'26px', fontFamily:"Poppin", fontSize:'20px'}}>Contact</Nav.Link>
            
            
//             <Nav.Link as={Link} to={"/Donate"} style={{ fontFamily:"Poppin", fontSize:'20px',}}>
//             <Button style={{border:'none', width:'100%', height:'40px', marginTop:'14px',
//              marginRight:'3px', borderRadius:'50px', 
//              backgroundColor:'#FFEBD9', color:'black',
//              fontFamily:"Poppin", fontSize:'18px'}}>
//               Donate </Button>
//               </Nav.Link>
          
            
//           </Nav>
          
//         {/* </Navbar.Collapse> */}
//       </Container>
//     </Navbar>
//     </div>
//     </div>
//         <HeroBanner></HeroBanner>
//        <section id="about">
//         <About/>
//         </section>

//         <section style={{paddingTop:'50px'}}>
//         <h1 className="text-center mb-5" style={{paddingBottom:'20px' }}>Our Services</h1>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          
//       <div style={{ width: '300px', margin: '10px', paddingRight:'20px', color:'white'}} className="slideUp" >
//         <div style={{ backgroundColor:'#2F90AC', opacity:'90%', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', borderRadius: '20px', overflow: 'hidden' }}>
//           <div style={{ height: '200px', overflow: 'hidden' }}>
//             <img src={temple} alt="Card Image" style={{ width: '60%', height: '100%', objectFit: 'contain',marginLeft:'60px' }} />
//           </div>
//           <div style={{ padding: '20px' }}>
//             <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>Lhakhangs in Bhutan</h2>
//             <p style={{ margin: '20px 0 0', fontSize: '16px', lineHeight: '1.5' }}>People can view the temples in Bhutan with 
//             their history and location details. </p>
//           </div>
//         </div>
//       </div>

//       <div style={{ width: '300px', margin: '10px',paddingRight:'20px',color:'white' }} className="slideUp">
//         <div style={{ backgroundColor:'#2F90AC', opacity:'90%', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', borderRadius: '20px', overflow: 'hidden' }}>
//           <div style={{ height: '200px', overflow: 'hidden' }}>
//             <img src={cal} alt="Card Image" style={{ width: '45%', height: '100%', objectFit: 'contain',marginLeft:'80px' }} />
//           </div>
//           <div style={{ padding: '20px' }}>
//             <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', marginLeft:'75px' }}>Events</h2>
//             <p style={{ margin: '20px 0 0', fontSize: '16px', lineHeight: '1.5' }}>People can view the details of the events being held around the temples in Bhutan.</p>
//           </div>
//         </div>
//       </div>
//       <div style={{ width: '300px', margin: '10px',paddingRight:'20px', color:'white' }} className="slideUp">
//         <div style={{backgroundColor:'#2F90AC', opacity:'90%',  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', borderRadius: '20px', overflow: 'hidden' }}>
//           <div style={{ height: '200px', overflow: 'hidden' }}>
//             <img src={donate} alt="Card Image" style={{width: '60%', height: '100%', objectFit: 'contain',marginLeft:'60px'  }} />
//           </div>
//           <div style={{ padding: '20px' }}>
//             <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', marginLeft:'75px'}}>Donation</h2>
//             <p style={{ margin: '20px 0 0', fontSize: '16px', lineHeight: '1.5' }}>The temple can generate funds and
//              receive donations from interested parties.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>



//       {/* Contact */}
//       <section style={{paddingTop:'50px', paddingLeft:'20px'}} id="contact">
//   <h1 className="text-center mb-5" style={{paddingBottom:'35px' }}>Contact Us</h1>
//   <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          
//     <div style={{ width: '100%', maxWidth: '300px', margin: '5px', paddingRight:'20px'}}>
//       <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
//         <div style={{ height: '200px', overflow: 'hidden' }}>
//           <img src={loc} alt="Card Image" style={{ width: '60%', height: '70%', objectFit: 'contain',marginLeft:'60px' }} />
//         </div>
//         <div style={{ padding: '20px', textAlign: 'center' }}>
//     <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' ,marginLeft:'5px' }}>Address</h2>
//       <p style={{ margin: '20px 0 0', fontSize: '16px', lineHeight: '1.5' }}>Dratshang Lhentshog Secretariat <br></br>
//     Council for Religious Affairs<br></br>
//       Tashichodzong<br></br>
//     Thimphu
//         </p>
//         </div>
//       </div>
//     </div>

//     <div style={{ width: '100%', maxWidth: '300px', margin: '10px',paddingRight:'20px' }}>
//       <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
//         <div style={{ height: '200px', overflow: 'hidden' }}>
//           <img src={phone} alt="Card Image" style={{ width: '60%', height: '80%', objectFit: 'contain',marginLeft:'60px' }} />
//         </div>
//         <div style={{ padding: '20px', textAlign: 'center' }}>
//           <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' ,marginLeft:'5px' }}>Phone</h2>
//           <p style={{ margin: '20px 0 0', fontSize: '16px', lineHeight: '1.5' }}>Phone No. (02)-322754<br></br>
//             Fax No. (02)-323867</p>
//         </div>
//       </div>
//     </div>

//     <div style={{ width: '100%', maxWidth: '300px', margin: '10px',paddingRight:'20px' }}>
//       <div style={{ overflow: 'hidden' }}>
//         <div style={{ height: '200px', overflow: 'hidden' }}>
//           <img src={mail} alt="Card Image" style={{width: '60%', height: '80%', objectFit: 'contain',marginLeft:'60px'  }} />
//         </div>
//         <div style={{ padding: '20px', textAlign: 'center'  }}>
//           <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', marginLeft:'5px'}}>Mail</h2>
//           <p style={{ margin: '20px 0 0', fontSize: '16px', lineHeight: '1.5' }}>Dratshanglhentshogsecretariat@gov.bt</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <Footer/>

//         </section>
       
//         </>
//     )
// }
// export default Home




import React, { useRef, useEffect, useState } from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import HeroBanner from "../Components/HeroBanner";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useNavigate,
} from "react-router-dom";

import About from "./About";
import Donate from "./Donate";
import Event from "./Event";
import Lhakhang from "./Lhakhang";
import logo from "../Images/logo.png";
import "../CSS/NavigationStyles.css";
import Index from "./Index";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import AnchorLink from "react-anchor-link-smooth-scroll";

import cal from "../Images/cal1.png";
import donate from "../Images/donate.png";
import temple from "../Images/temple01.png";
import loc from "../Images/loc.png";
import mail from "../Images/mail.png";
import phone from "../Images/phone.png";


import Footer from "./Footer";

const Home = () => {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <section
        className="hero"
        style={{ backgroundColor: "white", fontFamily: "Poppin" }}
      >
        <div style={{ backgroundColor: "#08385e", opacity: "90%"}}>
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
              {/* <Nav.Link as={AnchorLink} to={"#about"} className="nav-link">About</Nav.Link> */}
              <Nav.Link as={AnchorLink}
                    href="#about" className="nav-link">About</Nav.Link>
              <Nav.Link as={Link} to={"/Lhakhang"} className="nav-link">Lhakhang</Nav.Link>
              <Nav.Link as={Link} to={"/Event"} className="nav-link">Event</Nav.Link>
              <Nav.Link as={AnchorLink} href={"#contact"} className="nav-link">Contact</Nav.Link>
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

        </div>
        <HeroBanner></HeroBanner>
        <section id="about">
          <About />
        </section>

        <section style={{ paddingTop: "50px" }}>
          <h1
            className="text-center mb-5"
            style={{ paddingBottom: "20px" }}
          >
            Our Services
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "300px",
                margin: "10px",
                paddingRight: "20px",
                color: "white",
              }}
              className="slideUp"
            >
              <div
                style={{
                  backgroundColor: "#08385e",
                  opacity: "90%",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={temple}
                    alt="Card Image"
                    style={{
                      width: "60%",
                      height: "100%",
                      objectFit: "contain",
                      marginLeft: "60px",
                    }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Lhakhangs in Bhutan
                  </h2>
                  <p
                    style={{
                      margin: "20px 0 0",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    People can view the temples in Bhutan with their history
                    and location details.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "300px",
                margin: "10px",
                paddingRight: "20px",
                color: "white",
              }}
              className="slideUp"
            >
              <div
                style={{
                  backgroundColor: "#08385e",
                  opacity: "90%",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={cal}
                    alt="Card Image"
                    style={{
                      width: "55%",
                      height: "100%",
                      objectFit: "contain",
                      marginLeft: "70px",
                    }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginLeft: "75px",
                    }}
                  >
                    Events
                  </h2>
                  <p
                    style={{
                      margin: "20px 0 0",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    People can view the details of the events being held around
                    the temples in Bhutan.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "300px",
                margin: "10px",
                paddingRight: "20px",
                color: "white",
              }}
              className="slideUp"
            >
              <div
                style={{
                  backgroundColor: "#08385e",
                  opacity: "90%",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={donate}
                    alt="Card Image"
                    style={{
                      width: "60%",
                      height: "100%",
                      objectFit: "contain",
                      marginLeft: "60px",
                    }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginLeft: "75px",
                    }}
                  >
                    Donation
                  </h2>
                  <p
                    style={{
                      margin: "20px 0 0",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    The temple can generate funds and receive donations from
                    interested parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section style={{ paddingTop: "50px", paddingLeft: "20px" }} id="contact">
          <h1 className="text-center mb-5" style={{ paddingBottom: "35px" }}>
            Contact Us
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                margin: "5px",
                paddingRight: "20px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={loc}
                    alt="Card Image"
                    style={{
                      width: "60%",
                      height: "70%",
                      objectFit: "contain",
                      marginLeft: "60px",
                    }}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    Address
                  </h2>
                  <p
                    style={{
                      margin: "20px 0 0",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    Dratshang Lhentshog Secretariat <br /> Tashichhodzong, <br
                    /> Thimphu, <br /> Bhutan
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                margin: "5px",
                paddingRight: "20px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={mail}
                    alt="Card Image"
                    style={{
                      width: "60%",
                      height: "70%",
                      objectFit: "contain",
                      marginLeft: "60px",
                    }}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    Email
                  </h2>
                  <p
                    style={{
                      margin: "20px 0 0",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    lhakhangs.bhutan@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                margin: "5px",
                paddingRight: "20px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={phone}
                    alt="Card Image"
                    style={{
                      width: "60%",
                      height: "70%",
                      objectFit: "contain",
                      marginLeft: "60px",
                    }}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    Phone
                  </h2>
                  <p
                    style={{
                      margin: "20px 0 0",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    +975 2 322491 / 323703
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
