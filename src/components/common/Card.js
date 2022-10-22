import React from "react";

import trash from "../../assets/images/trash.svg";
import { shortner } from "../../utils/helper";
import styles from "../../assets/css/Cart.module.css";
import { useDispatch } from "react-redux";
import { decrease, removeItem, increase } from "../../redux/cart/cartAction";

const Card = (props) => {
    const dispatch = useDispatch();

    const { image, title, price, quantity } = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} />
            <div className={styles.data}>
                <h3>{shortner(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>

            <div className={styles.buttonContainer}>
                {quantity > 1 ? (
                    <button onClick={() => dispatch(decrease(props.data))}>-</button>
                ) : (
                    <button onClick={() => dispatch(removeItem(props.data))}>
                        <img src={trash} alt="trash" />
                    </button>
                )}

                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Card;
