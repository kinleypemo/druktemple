// import React from 'react'
// import './Footer.css'
// import logo from "../Images/logo.png";

// function Footer() {
//   return (
//     <div className='footer'>

//         <div className='links'>
//             <a href='#'>Terms and Conditions</a>
//             <a href='#'>Privacy Policy</a>
//         </div>

//         <div className='ver-line'>
//             <div>
//                 <hr style={{marginTop:'50px',width:'100px',height:'2px',transform:'rotate(90deg)',background:'black',borderWidth:'0px'}}/>
//             </div>
//             <div className='circle'></div>
//         </div>

//         <div className='logo'>
//             <a href='#'>
//                 <img src={logo} height='80' width='100'/>
//             </a>
            
//         </div>

//         <div className='ver-line'>
//             <div>
//                 <hr style={{marginTop:'50px',width:'100px',height:'2px',transform:'rotate(90deg)',background:'black',borderWidth:'0px'}}/>
//             </div>
//             <div className='circle'></div>
//         </div>

//         <div className='logos'>
//             <a href='#'>
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                     width="30" height="30"
//                     viewBox="0 0 30 30">
//                         <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
//                 </svg>
//             </a>
            
//             <a href='#'>
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                 width="30" height="30"
//                 viewBox="0 0 30 30">
//                     <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
//             </svg>
//             </a>
            

//             <a href='#'>
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                 width="30" height="30"
//                 viewBox="0 0 50 50">
//                 <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
//             </svg>
//             </a>
            
//             <a href='#'>
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                 width="30" height="30"
//                 viewBox="0 0 30 30">
//                     <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
//             </svg>
//             </a>
            
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="https://www.dl.gov.bt/">Dratshang Lhentshog</a>
        <a href="https://www.tourism.gov.bt/">Tourism Council of Bhutan</a>
        <a href="https://bhutan.com/">Bhutan</a>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo"  width={'20%'}/>
      </div>
      <div className="social-icons">
      <a href="https://www.facebook.com/centralmonkbody/">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="#">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Druk Temple
      </div>
    </footer>
  );
};

export default Footer;

