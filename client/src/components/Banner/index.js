// This is the carrot logo at the top of each page 

import React from "react";
import logo from "../../img/logo.png";

export default function Banner() {
  return (
    <div>
      <img src={logo} alt="logo" width="280px" height="280px"></img>
    </div>
  );
}
