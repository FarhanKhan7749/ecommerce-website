import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state,action) => {
    if(action.type === "Add"){
        //const updateTotalAmout = state.totalAmount + action.item.price;
        const existingItemIndx = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingItemIndx];
        let updatedItems;
        let updateTotalAmout;
        if (existingCartItem){
            // const updatedItem = {
            //     ...existingCartItem,
            //     amount: existingCartItem.amount + action.item.amount,
            // };
            // updatedItems = [...state.items];
            // updatedItem[existingItemIndx] = updatedItem;
            updatedItems = [...state.items];
            updateTotalAmout = state.totalAmount;
            alert("Item Already added");

        }else{
            updatedItems = state.items.concat(action.item);
            updateTotalAmout = state.totalAmount + action.item.price;
        }
        return{
            items: updatedItems,
            totalAmount: updateTotalAmout,
        }
    }
    if(action.type === "Remove"){
        const existingCartItemIndex = state.items.findIndex(
            (item)=> item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updateTotalAmout = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount -1}
            updatedItems = [state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return{
            items: updatedItems,
            totalAmount: updateTotalAmout,
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
        dispatchCartAction({type:"Remove", id:id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;