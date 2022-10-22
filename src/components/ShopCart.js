import React, { useContext } from "react";
import Card from "./common/Card";
import styles from "../assets/css/ShopCart.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkout, clear } from "../redux/cart/cartAction";

const ShopCart = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cartState);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>

            {state.itemsCounter > 0 && (
                <div className={styles.payments}>
                    <p>
                        <span>Total Items : {state.itemsCounter}</span>
                        <span>Total Payment : {state.total}</span>
                    </p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch(checkout())}>
                            Check out
                        </button>
                        <button className={styles.checkout} onClick={() => dispatch(clear())}>
                            Clear
                        </button>
                    </div>
                </div>
            )}

            {!state.checkout && state.itemsCounter === 0 && (
                <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go Shopping Please</Link>
                </div>
            )}
            {state.checkout && (
                <div className={styles.complete}>
                    <h3>Checkout Successfully</h3>
                    <Link to="/products">Go Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default ShopCart;
