import React from "react";
import logo from "../../img/logo.png";

export default function Banner() {
  return (
    <div data-testid="banner">
      <img src={logo} alt="logo" width="280px" height="280px"></img>
    </div>
  );
}
