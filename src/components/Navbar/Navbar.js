import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { BiCart } from "react-icons/bi";

// Css
import styles from "./Navbar.module.css";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  const navigate = useNavigate();

  const numberOfAmounts = state.cart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">Products</Link>
        <button>
          <BiCart onClick={() => navigate("/cart")} />
          <span>{numberOfAmounts}</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
