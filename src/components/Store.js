import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./common/Loading";

// Components
import Products from "./common/Products";

// redux
import { fetchProducts } from "../redux/products/productAction";

import styles from "../assets/css/Store.module.css";

const Store = () => {
    const dispatch = useDispatch();
    const productsState = useSelector((state) => state.productsState);

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts());
    }, []);

    return (
        <div className={styles.container}>
            {productsState.loading ? (
                <Loading />
            ) : productsState.error ? (
                <p>{productsState.error}</p>
            ) : (
                productsState.products.map((product) => <Products key={product.id} productData={product} />)
            )}
        </div>
    );
};

export default Store;
