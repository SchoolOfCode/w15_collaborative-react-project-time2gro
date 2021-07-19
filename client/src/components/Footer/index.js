// Footer
// This is used on every page to inform user who made the website

import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="spacing">
      {/* <p className='text-muted spacing'>{footerText}</p> */}
      Created by{" "}
      <a href="https://github.com/Claudyu04" className="git-link">
        Claudiu Manta,{" "}
      </a>
      <a href="https://github.com/natpinnock" className="git-link">
        Natalie Pinnock
      </a>{" "}
      and
      <a href="  https://github.com/RyanBrown870" className="git-link">
        {" "}
        Ryan Brown{" "}
      </a>
      
    </footer>
  );
}
