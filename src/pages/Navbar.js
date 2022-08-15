import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/layout.module.css";

const Navbar = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <a href="">Cart</a>
      </li>
    </ul>
  );
};

export default Navbar;
