import React from "react";
import aykut from "../logo/aykutsoyuk.png";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about__main">
      <img style={{ width: "784px", marginBottom: "40px" }} src={aykut} />
      <p style={{ fontSize: "20px", margin: "8px 0px 20px 0px", textAlign: "justify" }}>
        Hello I am Aykut. <br /> <br /> I am a front-end developer from
        Istanbul. I have recently decided to change my career and started
        teaching myself how to code learning from online resources. Building web
        applications has become my enthusiasm very fast and I enjoy its process
        that is full of creative thinking and problem solving.
        <br /> <br /> I am currently seeking for a job where I can contribute to
        a project and learn more technologies as well as collaborating with
        others and improving myself to become a better engineer by learning from
        them. I believe in the power of communication; the most important part
        of creation.
      </p>
      <a className="resume-link" href="#">Download my resume</a>
    </div>
  );
};

export default About;
