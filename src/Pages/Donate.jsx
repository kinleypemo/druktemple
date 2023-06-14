// import './DonationPage.css';

// import React, { useEffect, useState } from 'react';
// import NavigationLink from '../Components/NavigationLink';
// import Footer from './Footer';
// import donate from '../Images/donate.png';
// import { FaHeart, FaTimes } from 'react-icons/fa';

// const Donate = () => {
//   const [name, setName] = useState('');
//   const [amount, setAmount] = useState('');
//   const [jrl_number, setJrl_number] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [donations, setDonations] = useState([]);
//   const [selectedDonationId, setSelectedDonationId] = useState(null);

//   const [donationId, setDonationId] = useState(null);
//   // const [lhakhangname, setLhakhangName] = useState('');

//   const [report, setReport] = useState([])

//   useEffect(() => {
//     const getDonations = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/getdonation');
//         const donate = await response.json();
//         setDonations(donate);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getDonations();
//   }, []);


//   // const getLhakhangName = (id) => {
//   //   const selectedDonation = donations.find((donation) => donation.donation_id === id);
//   //   if (selectedDonation) {
//   //     return selectedDonation.lhakhangname;
//   //   }
//   //   return '';
//   // };

//   const getLhakhangName = (donationId) => {
//     const selectedDonation = donations.find((donation) => donation.donation_id === donationId);
//     return selectedDonation ? selectedDonation.lhakhang_name : '';
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { name, amount, jrl_number,lhakhang_name: getLhakhangName(selectedDonationId) };
//       const response = await fetch('http://localhost:8000/donationsreport', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//       });
//       if (response.ok) {
//         alert('Thank you for your kindness help.');
//       } else {
//         throw new Error('Error while donating');
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//     handleClose();
//   };


//   const handleClose = () => {
//     setShowPopup(false);
//     setName('');
//     setAmount('');
//     setJrl_number('');
//   };

//   return (

//     <>
//     <NavigationLink />
//     <div className="donation-page">
//       <h1>Join the Generosity Movement & Spread Kindness</h1>
//       <div className="donation-cards">
//         {donations.map((donation) => (
//           <div className="donation-card" id={donation.donation_id}>
//             <h2>{donation.lhakhang_name}</h2>
//             <p> 
//               <strong>Purpose:</strong> {donation.purpose}
//             </p>
//             <p style={{ marginBottom: '20px' }} id="accountholder">
//               <b>Account Holder: </b> {donation.account_holder}
//             </p>
//             <p style={{ marginBottom: '20px' }} id="accountnumber">
//               <b>Account No: </b>
//               {donation.account_number}
//             </p>
//             <button
//               onClick={() => {
//                 setSelectedDonationId(donation.donation_id);
//                 setShowPopup(true);
//               }}
//               style={{
//                 width: '45%',
//                 height: '40px',
//                 marginTop: '17px',
//                 marginRight: '3px',
//                 borderRadius: '50px',
//                 backgroundColor: '#eb7f3b',
//                 border: '1px solid #08385e',
//                 marginLeft: '25%',
//                 marginBottom: '20px',
//                 color: 'black',
//               }}
//               onMouseOver={(e) => (e.target.style.backgroundColor = '#2230f5')}
//               onMouseOut={(e) => (e.target.style.backgroundColor = '#eb7f3b')}
//             >
//               Donate
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>

//     {showPopup && (
//       <div
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         }}
//       >
//         <div
//           style={{
//             fontFamily: 'Poppins',
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundColor: '#08385e',
//             padding: '20px',
//             borderRadius: '10px',
//             width: '500px',
//             height: '400px',
//           }}
//         >
//           <div
//             className="popup"
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               position: 'fixed',
//               top: '0',
//               width: '100%',
//               height: '200%',
//             }}
//           >
//             <button
//               onClick={handleClose}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '25px',
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               <FaTimes size={20} />
//             </button>
//             <div
//               className="popup-inner"
//               style={{ padding: '20px', borderRadius: '5px', textAlign: 'center' }}
//             >
//               <img
//                 src={donate}
//                 alt="donate"
//                 height="80"
//                 width="130"
//                 style={{ marginRight: '60px' }}
//               />
//               <b>
//               <p id="lhakhangname" style={{fontSize:'20px'}}>{getLhakhangName(selectedDonationId)}</p> 
//               </b>
//               <form
//                 onSubmit={handleSubmit}
//                 style={{
//                   opacity: '90%',
//                   width: '500px',
//                   paddingTop: '30px',
//                   marginLeft: '0px',
//                   paddingBottom: '30px',
//                   borderRadius: '30px',
//                   marginTop: '20px',
//                 }}
//               >
//                 <input
//                   style={{
//                     marginBottom: '10px',
//                     borderRadius: '10px',
//                     border: 'none',
//                     textAlign: 'center',
//                   }}
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <br />
//                 <input
//                   style={{
//                     marginBottom: '10px',
//                     borderRadius: '10px',
//                     border: 'none',
//                     textAlign: 'center',
//                   }}
//                   type="number"
//                   name="amount"
//                   placeholder="Amount"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//                 <br />
//                 <input
//                   style={{
//                     marginBottom: '2px',
//                     borderRadius: '10px',
//                     border: 'none',
//                     textAlign: 'center',
//                   }}
//                   type="number"
//                   name="number"
//                   placeholder="Journal Number"
//                   value={jrl_number}
//                   onChange={(e) => setJrl_number(e.target.value)}
//                 />

//                 <br></br>
//                 <br></br>
//                 <button
//                   type="submit"
//                   style={{
//                     backgroundColor: 'green',
//                     border: 'none',
//                     color: 'black',
//                     padding: '5px 10px',
//                     textDecoration: 'none',
//                     display: 'inline-block',
//                     borderRadius: '15px',
//                     cursor: 'pointer',
//                   }}
//                   onMouseOver={(e) => (e.target.style.backgroundColor = 'orange')}
//                   onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}

//     <Footer />
//   </>

  
//   );
// };

// export default Donate;


import './DonationPage.css';

import React, { useEffect, useState } from 'react';
import NavigationLink from '../Components/NavigationLink';
import Footer from './Footer';
import donate from '../Images/donate.png';
import { FaHeart, FaTimes } from 'react-icons/fa';

const Donate = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [jrl_number, setJrl_number] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [donations, setDonations] = useState([]);
  const [selectedDonationId, setSelectedDonationId] = useState(null);

  const [report, setReport] = useState([])

  useEffect(() => {
    const getDonations = async () => {
      try {
        const response = await fetch('http://localhost:8000/getdonation');
        const donate = await response.json();
        setDonations(donate);
      } catch (error) {
        console.error(error);
      }
    };

    getDonations();
  }, []);


  const getLhakhangName = (donationId) => {
    const selectedDonation = donations.find((donation) => donation.donation_id === donationId);
    return selectedDonation ? selectedDonation.lhakhang_name : '';
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, amount, jrl_number,lhakhang_name: getLhakhangName(selectedDonationId) };
      const response = await fetch('http://localhost:8000/donationsreport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        alert('Thank you for your kindness help.');
      } else {
        throw new Error('Error while donating');
      }
    } catch (err) {
      console.error(err.message);
    }
    handleClose();
  };


  const handleClose = () => {
    setShowPopup(false);
    setName('');
    setAmount('');
    setJrl_number('');
  };

  return (
    <>
      <NavigationLink />
      <div className="donation-page">
        <h1>Join the Generosity Movement & Spread Kindness</h1>
        <div className="donation-cards">
          {donations.map((donation) => (
            <div className="donation-card" id={donation.donation_id} key={donation.donation_id}>
              <h2>{donation.lhakhang_name}</h2>
              <p>
                <strong>Purpose:</strong> {donation.purpose}
              </p>
              <p style={{ marginBottom: '20px' }} id="accountholder">
                <b>Account Holder: </b> {donation.account_holder}
              </p>
              <p style={{ marginBottom: '20px' }} id="accountnumber">
                <b>Account No: </b>
                {donation.account_number}
              </p>
              <button
                onClick={() => {
                  setSelectedDonationId(donation.donation_id);
                  setShowPopup(true);
                }}
                className="donate-button"
              >
                Donate
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup-background">
          <div className="popup-container">
            <button className="close-button" onClick={handleClose}>
              <FaTimes size={20} />
            </button>
            <div className="popup-inner">
              <img src={donate} alt="donate" height="80" width="130" />
              <b>
                <p id="lhakhangname" style={{color:'white'}}>{getLhakhangName(selectedDonationId)}</p>
              </b>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <br />
                <input
                  type="number"
                  name="number"
                  placeholder="Journal Number"
                  value={jrl_number}
                  onChange={(e) => setJrl_number(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  
                  name="number"
                  placeholder="Journal Number"
                  value={getLhakhangName(selectedDonationId)} 
                  // onChange={(e) => setJrl_number(e.target.value)} 
                  disabled
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Donate;




