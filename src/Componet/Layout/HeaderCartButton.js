import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    return(
        <button className={classes.container    } >
            <span className={classes['cart-holder']}>
                Cart
            </span>
            <span className={classes['cart-number']}>
                1
            </span>
        </button>
    )
}

export default HeaderCartButton;