import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Images
import basket from "../../assets/images/basket.svg";
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

// Css
import styles from "./Cart.module.css";
import { getQuantity, shorten } from "../../helper/functions";
import {
  clear,
  checkout,
  decrease,
  increase,
  removeFromCart,
} from "../../redux/Cart/CartActions";
import { CHECKOUT } from "../../actions";

const Cart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState(false);
  const navigate = useNavigate();

  let numberOfAmounts = state.cart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  let total = state.cart
    .reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    .toFixed(2);

  const handleCheckout = () => {
    setIsCheckout(true);
    dispatch(checkout());
    setTimeout(() => {
      // navigate("/");
      // setIsCheckout(false);
    }, 3000);
  };

  if (isCheckout) {
    return (
      <section className="container">
        <div className={styles.checkout}>
          <h3>Checkout Successfully</h3>
          <p>You will be redirected to the home page in a few seconds</p>
          <Link to="/" className="btn btn-primary">
            Buy More
          </Link>
        </div>
      </section>
    );
  }

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
      <section className={styles.cart__page}>
        <section className={styles.carts}>
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
        <section className={styles.cart__summary}>
          <h2>Cart Summary</h2>
          <p>
            Total Items : <span>{numberOfAmounts}</span>
          </p>
          <p>
            Total Payments : <span>${total}</span>
          </p>
          <div className={styles.cart__summary__buttons}>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
            <button className="btn btn-success" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Cart;
