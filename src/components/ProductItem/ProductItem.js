import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Icons
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
// React-Router-Dom
import { Link } from "react-router-dom";
// Helper
import { getQuantity, isInCart, shorten } from "../../helper/functions";
// Actions
import {
  addToCart,
  decrease,
  increase,
  removeFromCart,
} from "../../redux/Cart/CartActions";
// Css
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  const state = useSelector((state) => state.cartState);
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
        <section>
          {getQuantity(state.cart, product) === 1 && (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(removeFromCart(product))}
            >
              <BsTrash />
            </button>
          )}
          {getQuantity(state.cart, product) > 1 && (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(decrease(product))}
            >
              <BiMinus />
            </button>
          )}
          {isInCart(state.cart, product) ? (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increase(product))}
            >
              <BiPlus />
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
          )}
        </section>
      </div>
    </section>
  );
};

export default ProductItem;
