// import React, { Component } from 'react';

// class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       map: null
//     };
//   }

//   componentDidMount() {
//     const googleMapScript = document.createElement('script');
//     googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY_HERE}`;
//     window.document.body.appendChild(googleMapScript);

//     googleMapScript.addEventListener('load', () => {
//       this.createGoogleMap();
//     });
//   }

//   createGoogleMap = () => {
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       center: { lat: 37.7749, lng: -122.4194 },
//       zoom: 12,
//     });
//     this.setState({ map });
//   };

//   render() {
//     return <div id="map" style={{ height: '400px' }} />;
//   }
// }

// export default Map;
