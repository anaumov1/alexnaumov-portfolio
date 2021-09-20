import React from "react";
import "./topbar.scss";
import { AccountCircle, MailOutline } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Coffee and Code
          </a>
          <div className="itemContainer">
            <AccountCircle className="icon" />
            <span>+1-512-574-5105</span>
          </div>
          <div className="itemContainer">
            <MailOutline className="icon" />
            <span>alexandru.naumov@gmail.com</span>
          </div>
        </div>
        <div className="right" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
