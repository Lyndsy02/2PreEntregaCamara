import React, { useEffect, useState } from "react";
import cart from './assets/cart.svg'
import { useCartContext } from "../../context/CartState";

const CartWidgets = () => {
const [ total, setTotal] = useState(0);
const { getNumberOfItems, openCart } = useCartContext();
const handleOpen = () => {
    openCart();
};
useEffect (() => {
    const numberOfItems = getNumberOfItems();
    setTotal(numberOfItems);
}, [getNumberOfItems]);
return (
        <div className="cart-widgets" onClick={handleOpen}>
            <img src={cart} alt="cart-widget" className="cart-widgets__cart"/>
            <span className="cart-widgets__items-counter"{...total}></span>
        </div>
    );
};

export default CartWidgets;

