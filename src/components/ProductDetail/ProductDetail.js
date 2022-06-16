import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
// Images
import Rolling from "../../assets/images/Rolling.svg";
import errorImage from "../../assets/images/error.svg";
// Redux
import { fetchProducts } from "../../redux/Product/ProductActions";
// Css
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const state = useSelector((state) => state.productsState);
  const dispatch = useDispatch();
  const id = +useParams().id;
  const product = state.products[id - 1];
  const { loading, error } = state;

  useEffect(() => {
    if (!state.productsState) dispatch(fetchProducts());
  }, []);

  if (loading) {
    return (
      <section className={styles.loading}>
        <img src={Rolling} alt="loading" />
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.error}>
        <img src={errorImage} alt="networkError" />
        <h2>{error}</h2>
      </section>
    );
  }

  if (product)
    return (
      <main className="container">
        <div className={styles.detail}>
          <div className={styles.detail__header}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.detail__body}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <div className={styles.category}>
              Category : <span>{product.category}</span>
            </div>
            <div className={styles.buttons}>
              <span className="btn btn-success">${product.price}</span>
              <Link to="/" className="btn btn-primary">
                Back To Shop
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
};

export default ProductDetail;
