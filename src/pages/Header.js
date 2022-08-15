import * as React from "react";
import Navbar from "./Navbar";

const Header = ({ props }) => {
  let name = "Lider";

  return (
    <header>
      Welcome to {name}
      <Navbar />
    </header>
  );
};

export default Header;
