import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
// Images
import Rolling from "../../assets/images/Rolling.svg";
import errorImage from "../../assets/images/error.svg";
// Actions
import { fetchProducts } from "../../redux/Product/ProductActions";
// Css
import styles from "./ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  const state = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  const { loading, products, error } = state;

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
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

  return (
    <main className="container">
      <header className={styles.header}>
        <h2>All Products</h2>
      </header>
      <section className={styles.products}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductList;
