import { useContext } from 'react';
import React from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-contex';
import classes from './HeaderCartButton.module.css'

const text = {
    name: 'Your Cart',
    count: 3
}


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton