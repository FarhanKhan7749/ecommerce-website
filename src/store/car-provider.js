import { useState, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";
import { useContext } from "react";
// const defaultCartState = {
//     items: [],
//     totalAmount: 0,
// };

// const cartReducer = (state,action) => {
//     if(action.type === "Add"){
//         //const updateTotalAmout = state.totalAmount + action.item.price;
//         const existingItemIndx = state.items.findIndex(item => item.id === action.item.id)
//         const existingCartItem = state.items[existingItemIndx];
//         let updatedItems;
//         let updateTotalAmout;
//         if (existingCartItem){
//             // const updatedItem = {
//             //     ...existingCartItem,
//             //     amount: existingCartItem.amount + action.item.amount,
//             // };
//             // updatedItems = [...state.items];
//             // updatedItem[existingItemIndx] = updatedItem;
//             updatedItems = [...state.items];
//             updateTotalAmout = state.totalAmount;
//             alert("Item Already added");

//         }else{
//             updatedItems = state.items.concat(action.item);
//             updateTotalAmout = state.totalAmount + action.item.price;
//         }
//         return{
//             items: updatedItems,
//             totalAmount: updateTotalAmout,
//         }
//     }
//     if(action.type === "Remove"){
//         const existingCartItemIndex = state.items.findIndex(
//             (item)=> item.id === action.id
//         );
//         const existingItem = state.items[existingCartItemIndex];
//         const updateTotalAmout = state.totalAmount - existingItem.price;
//         let updatedItems;
//         if(existingItem.amount === 1){
//             updatedItems = state.items.filter(item => item.id !== action.id)
//         }else{
//             const updatedItem = {...existingItem, amount: existingItem.amount -1}
//             updatedItems = [state.items];
//             updatedItems[existingCartItemIndex] = updatedItem;
//         }

//         return{
//             items: updatedItems,
//             totalAmount: updateTotalAmout,
//         }
//     }
//     return defaultCartState;
// }

const CartProvider = (props) => {
    // const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
    // const addItemToCartHandler = (item) => {
    //     dispatchCartAction({type:"Add", item:item});
    // };

    // const removeItemFromCartHandler = (id) => {
    //     dispatchCartAction({type:"Remove", id:id});
    // };

    // const cartContext = {
    //     items: cartState.items,
    //     totalAmount: cartState.totalAmount,
    //     addItem: addItemToCartHandler,
    //     removeItem: removeItemFromCartHandler
    // }
    const authCtx = useContext(AuthContext);
    const [items, updateItems] = useState([]);
    
    let email = "";
    if(authCtx.email != null){
        email = authCtx.email.replace('@', '').replace('.', '')
    }

    useEffect(() => {
        // Fetch the items from the API
        fetch("https://crudcrud.com/api/fb96b3b6353045b797d49a1ac1bbadb7/" + email)
            .then((response) => response.json())
            .then((data) => updateItems(data))
            .catch((error) => console.log(error));
    }, [email]);

    const addItemToCartHandler = (item) => {
        let itemsCopy = [...items];
        let itemIndex = itemsCopy.findIndex((i) => i.id === item.id);
        if (itemIndex === -1) {
            // Add the item to the cart
            updateItems([...items, item]);

            // Post the item to the API
            fetch("https://crudcrud.com/api/fb96b3b6353045b797d49a1ac1bbadb7/"+ email, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
        } else {
            itemsCopy[itemIndex].amount =
                parseInt(itemsCopy[itemIndex].amount) + parseInt(item.amount);
            itemsCopy[itemIndex].totalPrice =
                itemsCopy[itemIndex].quantity * itemsCopy[itemIndex].price;
            console.log(itemsCopy);
            updateItems(itemsCopy);
        }
    };

    const removeItemFromCartHandler = (id) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i._id === id);

        if (idx !== -1 && itemsCopy[idx].amount < 2) {
            // Remove the item from the cart
            itemsCopy.splice(idx, 1);
            updateItems(itemsCopy);

            // Delete the item from the API
            fetch(
                `https://crudcrud.com/api/fb96b3b6353045b797d49a1ac1bbadb7/${email}/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
        } else {
            itemsCopy[idx].amount--;
            updateItems(itemsCopy);
        }
    };

    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice = totalPrice + Number(item.price * item.amount);
        console.log(item.amount);
    });

    const cartContext = {
        items: items,
        totalAmount: totalPrice.toFixed(2),
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;