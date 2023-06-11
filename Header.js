import React from "react";
import Navbar from "../NavBar/NavBar";
import logo from "../Photos/logo.svg";

const Header = ({ showAs }) => {
  return (
    <header
      className={`${showAs === "Shadow" ? "header header--shadow" : "header"}`}
    >
      <img src={logo} alt="" className="header__logo" />
      <Navbar />
    </header>
  );
};

export default Header;