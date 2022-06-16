import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { shorten } from "../../helper/functions";

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
        <h4>{shorten(product.title)}</h4>
        <span>${product.price}</span>
      </div>
      <div className={styles.card__buttons}>
        <Link to={`/product/${product.id}`} className="text-secondary">
          Detail
        </Link>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </section>
  );
};

export default ProductItem;
