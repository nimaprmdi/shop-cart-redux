import React from "react";
import { shortner, isInCart, quantityCount } from "../../utils/helper";
import { Link } from "react-router-dom";
import trashIcon from "../../assets/images/trash.svg";
import styles from "../../assets/css/Product.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, increase, decrease } from "../../redux/cart/cartAction";

const Products = ({ productData }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cartState);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt={productData.title} />
            <h3>{shortner(productData.title)}</h3>
            <p>{productData.price}</p>

            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) === 1 && (
                        <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}>
                            <img src={trashIcon} alt="trash" />
                        </button>
                    )}
                    {quantityCount(state, productData.id) > 1 && (
                        <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>
                            -
                        </button>
                    )}
                    {quantityCount(state, productData.id) > 0 && (
                        <span className={styles.counter}>{quantityCount(state, productData.id)}</span>
                    )}
                    {isInCart(state, productData.id) ? (
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>
                            +
                        </button>
                    ) : (
                        <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
