import React from "react";
import KeyConceptsImage from "../../assets/images/react-core-concepts.png"
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img src={KeyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;
