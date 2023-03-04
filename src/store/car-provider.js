import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state,action) => {
    if(action.type === "Add"){
        const updateItems = state.items.concat(action.item);
        const updateTotalAmout = state.totalAmount + action.item.price;
        return{
            items: updateItems,
            totalAmount: updateTotalAmout
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:"Add", item:item});
    };

    const removeItemFromCartHandler = (id) => {

    };

    // let totalPrice = 0;
    // items.forEach((item) => {
    //     totalPrice = totalPrice + Number(item.price * item.quantity);
    // });

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {console.log(cartContext.items)}
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;