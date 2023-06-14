import React, { useEffect, useState } from 'react';
import './Event.css';
import NavigationLink from '../Components/NavigationLink';
import Footer from './Footer';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import temple01 from "../Images/cal1.png";


export default function Event() {

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
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.8)',
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

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch('http://localhost:8000/getevent');
        const event = await response.json();
        setEvents(event);
      } catch (error) {
        console.error(error);
      }
    };

    getEvents();
  }, []);

  return (
    <>
    <NavigationLink/>
      
      <div style={heroStyle}>
      <style>{keyframesStyle}</style>
      <style>{mediaQuery}</style>
      <div style={textStyle}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', marginLeft:'140px' }}>
          Upcoming Events
        </h1>
      </div>
      <div style={imageStyle}>
        <img src={temple01} alt="Moving Image" style={{ maxWidth: '100%' }} />
      </div>
    </div>

    <div className="event-container">
        <div className="post-container">
          {events.map((event) => (
            <div key={event.event_id} className="post-card">
              <p className="post-title">{event.event_name}</p>
              <div className="post-details">
                <p>Detail: {event.event_detail}</p>
                <p>
                  <FaMapMarkerAlt /> Location: {event.location}
                </p>
                <p>
                  <FaCalendarAlt /> Date: {event.date}
                </p>
                <p>
                  <FaClock /> Time: {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}



