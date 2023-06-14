// import Carousel from 'react-bootstrap/Carousel';
// import L1 from "../Images/L1.jpg";
// import L2 from "../Images/L2.jpg";
// import L3 from "../Images/L3.jpg";
// import L4 from "../Images/L4.jpg";


// function HeroBanner() {
//   return (
//     <div style={{backgroundColor:'#2F90AC', opacity:'90%'}}>
//     <Carousel fade style={{width:'1000px', marginLeft:'130px', height:'430px'}} >
//     {/*  */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={L1}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Chimi Lhakhang</h3>
          
//        </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={L2}
//           alt="Second slide"
//         />

//         {/* <Carousel.Caption>
//           <h3>Second slide label</h3>
     
//         </Carousel.Caption> */}
//       </Carousel.Item> 
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={L3}
//           alt="Third slide"
//         />

//         {/* <Carousel.Caption>
//           <h3>Third slide label</h3>
         
//         </Carousel.Caption> */}
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={L4}
//           alt="First slide"
//         />
//         {/* <Carousel.Caption>
//           <h3>First slide label</h3>
          
//         </Carousel.Caption> */}
//       </Carousel.Item>
//     </Carousel>
//     </div>
//   );
// }

// export default HeroBanner;

import React from 'react';
import temple01 from "../Images/temple01.gif";

const HeroBanner = () => {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f0e3dd 30%, #080a38 100%)',
    backgroundSize: 'cover',
    height: '500px',
    // boxShadow:'2px 5px 4px rgba(0, 0, 0, 0.2)'
  };

  const textStyle = {
    flex: '1',
    padding: '20px',
    fontFamily: 'serif',
    animation: 'moveText 5s infinite alternate',
    textShadow: '2px 0px 2px rgba(0, 0, 0, 0.8)',
  };

  const imageStyle = {
    flex: '1',
    position: 'relative',
    animation: 'moveImage 2s infinite alternate',
  };

  const keyframesStyle = `
    @keyframes moveImage {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    @keyframes moveText {
      0% { transform: translateX(-20px); opacity: 0; }
      50% { transform: translateX(0); opacity: 1; }
      100% { transform: translateX(-10px); opacity: 0; }
    }
  `;

  const mediaQuery = `@media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }`;

  return (
    <div style={heroStyle}>
      <style>{keyframesStyle}</style>
      <style>{mediaQuery}</style>
      <div style={textStyle}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Druk Temple
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          Discover the serene beauty and cultural richness of Bhutan at Druk Temple. Immerse yourself
          in the spiritual experience of ancient temples and breathtaking landscapes.
        </p>
      </div>
      <div style={imageStyle}>
        <img src={temple01} alt="Moving Image" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default HeroBanner;



