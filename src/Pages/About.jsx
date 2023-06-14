import React from "react";
import tiger from "../Images/tiger.jpg";

const About = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <b>
          <h1
            className="text-center mb-5"
            style={{ paddingTop: "40px", fontFamily: "Poppin" }}
          >
            About Us
          </h1>
        </b>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "serif",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              marginLeft: "120px",
              width: "400px",
              flex: "1 1 400px",
              paddingRight: "20px",
            }}
            className="about"
          >
            <h10>Vision</h10>
            <br />
            <h5 style={{ paddingBottom: "30px" }}>Our Core Vision and Mission</h5>

            <p>VISION</p>
            <p>
              Our vision is to create a virtual platform that connects devotees
              to the spiritual teachings and practices of the temple, fostering
              a sense of community and inspiring individuals to engage in
              meaningful acts of devotion and service. Our website aims to
              provide a seamless and engaging user experience, with
              comprehensive information on the temple, its lhakhangs, and
              events, and a simple and secure donation system that supports the
              temple's mission and programs.
            </p>

            <p>MISSION</p>
            <p>
              Our mission is to promote the teachings and practices of the
              temple, cultivate a sense of devotion and connection among our
              community, and provide resources and opportunities for individuals
              to deepen their spiritual practice and engage in acts of service.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              flex: "1 1 450px",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <img
              src={tiger}
              alt="Tiger"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
