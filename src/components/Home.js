import React from "react";

// Define name and city variables
const name = "Liza";
const city = "New York";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
