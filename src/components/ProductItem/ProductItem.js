import React from "react";

import { useSelector, useDispatch } from "react-redux";

// Css
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  const state = useSelector((state) => state.prdouctsState);
  const dispatch = useDispatch();

  return (
    <section className={styles.card}>
      <div className={styles.card__header}>
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className={styles.card__body}>
        <h4>{product.title}</h4>
        <span>${product.price}</span>
      </div>
    </section>
  );
};

export default ProductItem;
