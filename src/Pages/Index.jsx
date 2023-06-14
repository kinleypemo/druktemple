// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import NavigationLink from "../Components/NavigationLink";
// import L1 from '../Images/L1.jpg'
// import Footer from './Footer';
// import donate from "../Images/donate.png";


// import { FaTimes } from 'react-icons/fa';

// import axios from 'axios';

// const Popup = ({ handleClose }) => {
//   const [name, setName] = useState('');
//   const [amount, setAmount] = useState('');
//   const [journal_num, setJournalNum] = useState('');

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const body = { name, amount, journal_num };
//   //     const response = await fetch("http://localhost:3000/donate", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(body),
//   //     });
//   //     console.log(response); // check the response
//   //     window.location = "/";
//   //   } catch (err) {
//   //     console.error(err.message);
//   //   }
//   //   handleClose();
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { name, amount, journal_num };
//       const response = await fetch("http://localhost:3000/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       if (response.ok) {
//         alert("Donation made successfully");
//       } else {
//         throw new Error("Error making donation");
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//     handleClose();
//   };

//   return (
//     <div className="popup" style={{ justifyContent:'center',
//     alignItems: 'center', position:'fixed', top:'0',
//     width:'100%', height:'200%'
//     }}>
//        <button onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '25px', background: 'none', border: 'none', cursor: 'pointer' }}>
//          <FaTimes size={20} /> 
//        </button>
//       <div className="popup-inner" style={{padding:'20px',
//     borderRadius:'5px', textAlign:'center'}}>
     
//         <img src={donate} height='80' width='130' style={{marginRight:'60px'}}/>
//         <form onSubmit={handleSubmit} style={{backgroundColor:'#2F90AC', 
//         opacity:'90%', width:'250px', 
//         paddingTop:'30px', marginLeft:'85px', 
//         paddingBottom:'30px', borderRadius:'30px',
//         marginTop:'20px'}}>
//           <input
//           style={{marginBottom:'10px', borderRadius:'10px', border:'none',
//           textAlign:'center'
//         }}
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br/>
//           <input
//           style={{marginBottom:'10px', borderRadius:'10px', border:'none',
//           textAlign:'center'}}
//             type="text"
//             name="amount"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//           <br/>
//           <input

// style={{marginBottom:'2px', borderRadius:'10px', border:'none',
// textAlign:'center'}}

//             type="text"
//             name="number"
//             placeholder="Journal Number"
//             value={journal_num}
//             onChange={(e) => setJournalNum(e.target.value)}
//           />
//           <br></br>
//           <br></br>
//           <button type="submit" style={{backgroundColor:'green',
//         border:'none', color:'black', padding:'5px 10px',
//         textDecoration:'none', display:'inline-block', borderRadius:'15px',
//         cursor:'pointer' }}   onMouseOver={(e) => (e.target.style.backgroundColor = 'orange')}
//         onMouseOut={(e) => (e.target.style.backgroundColor = '#FFEBD9')}>Submit</button>
//         </form>
        
//       </div>
//     </div>
//   );
// };


// const Donate = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleDonate = () => {
//     setShowPopup(true);
//   };

//   const handleClose = () => {
//     setShowPopup(false);
//   };


//     return(
//         <>
        
//         <NavigationLink/>
//         <div style={{backgroundColor:'#FFEBD9', minHeight:'100vh',
//       display:'flex', flexDirection:'column'}}>
//         <div style={{ fontFamily:'serif',
//          border: '1px solid black',
//          boxShadow: '5px 5px 5px 5px grey',
//          marginLeft: '200px',
//          marginRight: '200px',
//         //  marginBottom: 'auto',
//         //  marginTop: '30px',
//          borderRadius: '20px',
//          overflowY: 'scroll',
//         //  overflowX:'hidden',
//         //  maxheight: '500px',
//         //  maxHeight: 'calc(100vh - 240px)',
//          padding: '30px',
//         //  boxSizing: 'border-box',
//         }}
//         className='scroll'>

//             <div style={{paddingTop:'30px', marginLeft:'2%', marginRight:'2%'}}>
//               <b> <h2 style={{ textAlign:'center'}}>Chimmi Lhakhang</h2></b> 
//                 <img src={L1} style={{width:'100%', paddingTop:'30px', marginBottom:'40px'}}></img>
//             <h4 style={{textAlign:'center'}}>Purpose</h4>
//             <p>Chimi Lhakhang is located in Punakha under toeb gewog. 
//                 With the increasing number of monks studying, there is lack of residential areas for the monks.
//                 So for the urgent need of two-storey house where 500 monks can reside. For this purpose,
//                 we, the Chimi Lhakhang Monastery would like to request the donor to help us solving this problems.
//             </p>
//              <p style={{textAlign:'center', marginBottom:'20px'}}><b>Account No: </b>202359990 (BOB & CHIMI LHAKHANG)</p>

//              <button
//   // onClick={handleDonate}
//   onClick={() => setShowPopup(true)}
//   style={{
//     width: '15%',
//     height: '40px',
//     marginTop: '17px',
//     marginRight: '3px',
//     borderRadius: '50px',
//     backgroundColor: '#FFEBD9',
//     border: '1px solid #2F90AC',
//     marginLeft: '43%',
//     marginBottom: '20px',
//     color: 'black',
//   }}
//   onMouseOver={(e) => (e.target.style.backgroundColor = '#2F90AC')}
//   onMouseOut={(e) => (e.target.style.backgroundColor = '#FFEBD9')}
// >
//   Donate
// </button>
// </div>

// <hr style={{border: '2px solid #000'}}></hr>


// </div>

// {showPopup && (
//   ReactDOM.createPortal(
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div
//         style={{
//           fontFamily:'Poppins',
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           backgroundColor:'#FFEBD9',
//           padding: "20px",
//           borderRadius: "10px",
//           width: "500px",
//           height:'400px'
//         }}
//       >
//         <Popup handleClose={handleClose} />
//         {/* <button onClick={() => setShowPopup(false)}>Close</button>  */}
//       </div>
//     </div>,
//     document.getElementById("portal-root") 
//   )
// )}
// <Footer/>

// </div>

//         </>
//     )
// }
// export default Donate
