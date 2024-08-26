import React from "react";
import "../../index.css";
import avatar from "../../assets/avatar.jpg";
import "./homepage.css";

export default function Homepage() {
  return (
    <section className="homepage-container">
      <div className="image-container">
        <img src={avatar} alt="Developer" />
      </div>
      <div className="text-container">
        <h2>About Me</h2>
        <p>Jonathan is a new Developer...</p>
      </div>
    </section>
  );
}
