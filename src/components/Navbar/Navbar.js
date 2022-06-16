import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { BiCart } from "react-icons/bi";

// Css
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">Products</Link>
        <button>
          <BiCart onClick={() => navigate("/cart")} />
          <span>10</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
