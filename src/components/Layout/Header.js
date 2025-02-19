import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const onAlert = function (el) {
    console.log(el)
}

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShownCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious" />
            </div>
        </Fragment>)

}

export default Header;