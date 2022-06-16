import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Images
import basket from "../../assets/images/basket.svg";
import { BiPlus, BiMinus, BiPulse } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

// Css
import styles from "./Cart.module.css";
import { getQuantity, shorten } from "../../helper/functions";
import {
  decrease,
  increase,
  removeFromCart,
} from "../../redux/Cart/CartActions";

const Cart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const numberOfAmounts = state.cart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  // const total = state.cart.reduce(
  //   (acc, curr) => acc + curr.quantity * curr.price
  // );

  if (!state.cart.length) {
    return (
      <main className="container">
        <section className={styles.cart__empty}>
          <img src={basket} alt="basket" />
          <h2>The Cart is Empty</h2>
          <Link to="/" className="btn btn-secondary">
            Back To Shop
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <header className={styles.header}>
        <h2>My Cart</h2>
      </header>
      <section className={styles.allCart}>
        {state.cart.map((item) => (
          <div key={item.id} className={styles.cart}>
            <div className={styles.cart__header}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.cart__body}>
              <h4>{shorten(item.title)}</h4>
              <span>${item.price}</span>
            </div>
            <div className={styles.cart__buttons}>
              {getQuantity(state.cart, item) === 1 && (
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  <BsTrash size="16px" />
                </button>
              )}
              {getQuantity(state.cart, item) > 1 && (
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(decrease(item))}
                >
                  <BiMinus />
                </button>
              )}
              <span>{item.quantity}</span>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(increase(item))}
              >
                <BiPlus />
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Cart;
