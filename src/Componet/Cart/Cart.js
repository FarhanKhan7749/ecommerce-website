import { useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap"
import Cartitem from "./CartItem";
const fonstStyle = {
    fontFamily: "Times New Roman",
}
const Cart = (props) => {
    const cartElements = [
        {
            tag: "Album 1",
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            tag: "Album 2",
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            tag: "Album 3",
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ];
    const [items, updateItems] = useState(cartElements);
    let totalPrice = 0
    cartElements.forEach((item) => {
        totalPrice += item.price;
    })
    const removeItemFromCartHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.title === "Colors" || i.title === "Black and white Colors" || i.title === "Yellow and Black Colors");
        if (idx !== -1) {
            itemsCopy.splice(idx, 1);
            updateItems(itemsCopy);
        }
    };
    return (
        <Offcanvas show={props.show} onHide={props.onClose} placement="end" style={fonstStyle}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fs-2" style={fonstStyle}>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {items.map(item => {
                        return <Cartitem
                            key={item.title}
                            itemImg={item.imageUrl}
                            imageTitle={item.title}
                            itemPrice={item.price}
                            itemTag={item.tag}
                            onRemove={removeItemFromCartHandler}
                        />
                    })}
                    <div className="ms-auto fw-bold fs-5">
                        <span>Total Price is ${totalPrice}</span>
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Cart;