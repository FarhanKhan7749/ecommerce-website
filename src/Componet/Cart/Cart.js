import { useContext } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap"
import CartContext from "../../store/cart-context";
import Cartitem from "./CartItem";
const fonstStyle = {
    fontFamily: "Times New Roman",
}
const Cart = (props) => {
    const cartCntx = useContext(CartContext);
    // const cartElements = [
    //     {
    //         tag: "Album 1",
    //         title: 'Colors',
    //         price: 100,
    //         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    //         quantity: 2,
    //     },
    //     {
    //         tag: "Album 2",
    //         title: 'Black and white Colors',
    //         price: 50,
    //         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    //         quantity: 3,
    //     },
    //     {
    //         tag: "Album 3",
    //         title: 'Yellow and Black Colors',
    //         price: 70,
    //         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    //         quantity: 1,
    //     }
    // ];
    // const [items, updateItems] = useState(cartElements);
    // let totalPrice = 0
    // cartElements.forEach((item) => {
    //     totalPrice += item.price;
    // })
    // const removeItemFromCartHandler = (item) => {
    //     const itemsCopy = [...items];
    //     const idx = itemsCopy.findIndex((i) => i.title === "Colors" || i.title === "Black and white Colors" || i.title === "Yellow and Black Colors");
    //     if (idx !== -1) {
    //         itemsCopy.splice(idx, 1);
    //         updateItems(itemsCopy);
    //     }
    // };
    // console.log(cartCntx.items)
    return (
        <Offcanvas show={props.show} onHide={props.onClose} placement="end" style={fonstStyle}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fs-2" style={fonstStyle}>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartCntx.items.map(item => {
                        return <Cartitem
                            key={item.id}
                            id={item.id}
                            itemImg={item.imgUrl}
                            imageTitle={item.title}
                            itemPrice={item.price}
                            itemTag={item.tag}
                            itemQuantity={item.amount}
                        />
                    })}
                    <div className="ms-auto fw-bold fs-2 m-4 text-muted">
                        <span>Total Price is ${cartCntx.totalAmount}</span>
                    </div>
                    <div className="text-center">
                        <Button 
                            variant="primary"
                            style={{ width: "8rem", height: "3rem", position: "relative"}}
                        >PURCHASE</Button>
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Cart;