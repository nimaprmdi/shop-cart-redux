const shortner = (data) => {
    let splitTitle = data.split(" ").filter((data) => data !== "-");
    return `${splitTitle[0]} ${splitTitle[1]}`;
};

const isInCart = (state, id) => {
    return !!state.selectedItems.find((item) => item.id === id);
};

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    return index !== -1 && state.selectedItems[index].quantity;
};

export { shortner, isInCart, quantityCount };
