import React from "react";
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="iem">
          <img src="assets/myregistry.png" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
