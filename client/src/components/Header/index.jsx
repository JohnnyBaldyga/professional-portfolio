import React from "react";
import NavBar from "../NavBar";
import jb from "../../assets/jb.png";
export default function Header(props) {
  return (
    <header>
      <img src={jb} alt="Jonathan Baldyga" className="logo" />
      <NavBar />
    </header>
  );
}
