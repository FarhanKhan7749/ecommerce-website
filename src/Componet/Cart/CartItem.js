import { useContext } from "react";
import { Button, Stack, Image } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const fonstStyle = {
  fontFamily: "Times New Roman",
};
const inputStyle = {
  width: "40px",
  height: "30px",
  border: "1px solid rgb(0, 204, 255)",
  borderRadius: "8%",
  outline: "none",
  textAlign: "center",
  marginRight: "20px",
};
const Cartitem = (props) => {
    const cartCntx = useContext(CartContext);
    const inputChnageHnadler = (event) => {
        console.log(event.target.value)
    }
    const cartItemRemoveHandler = () => {
      cartCntx.removeItem(props.id);
    }
  return (
    <Stack direction="horizontal" gap={2}>
    <div className="me-auto">
      <h3 style={fonstStyle}>ITEM</h3>
      <div className="d-flex align-items-center">
        <Image src={props.itemImg} alt={props.imageTitle} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
        <span className="ms-2">{props.itemTag}</span>
      </div>
    </div>
    <div className="me-auto">
      <h3 style={fonstStyle}>Price</h3>
      <span>${props.itemPrice.toFixed(2)}</span>
    </div>
    <div className="me-auto">
      <h3 style={fonstStyle}>Quantity</h3>
      <div className="d-flex align-items-center">
        <input type="text" value={props.itemQuantity} onChange={inputChnageHnadler} className="form-control me-2" style={inputStyle} />
        <Button variant="danger" onClick={cartItemRemoveHandler}>Remove</Button>
      </div>
    </div>
  </Stack>
  );
};

export default Cartitem;
