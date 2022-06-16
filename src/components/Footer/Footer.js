import React from "react";

// Css
import styles from "./Footer.module.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section className="container">
        <h2>© {currentDate} Shop All rights reserved</h2>
      </section>
    </footer>
  );
};

export default Footer;
