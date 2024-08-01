import React from "react";

const imageUrl = "https://i.imgur.com/mV8PQxj.gif";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a brief description about me.</p>
      <img src={imageUrl} alt="I made this" />
    </div>
  );
}

export default About;
