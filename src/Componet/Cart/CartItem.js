import { Button, Stack, Image } from "react-bootstrap";

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

    const inputChnageHnadler = (event) => {
        console.log(event.target.value)
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
        <input type="text" value="1" onChange={inputChnageHnadler} className="form-control me-2" style={inputStyle} />
        <Button variant="danger" onClick={props.onRemove}>Remove</Button>
      </div>
    </div>
  </Stack>
  );
};

export default Cartitem;
