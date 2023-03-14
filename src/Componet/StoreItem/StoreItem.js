import { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
//import { Alert } from "bootstrap";

const StoreItem = (props) => {
  const cartCntx = useContext(CartContext);
  //const [showAlert, setShowAlert] = useState(false);

  const addToCartHandler = (event) => {
    event.preventDefault();
    cartCntx.addItem({
      id: props.itemId,
      imgUrl: props.itemImgUrl,
      price: props.itemPrice,
      tag: props.itemTag,
      title: props.itemTitle,
      amount: 1,
    });
    // setShowAlert(true);
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 1000);
  };

  // const AlertComponent = () => {
  //   return (
  //     <Alert
  //       variant="success"
  //       className="position-fixed bottom-0 end-0 m-3"
  //       style={{ zIndex: 9999 }}
  //     >
  //       <Alert.Heading>Item Successfully Added</Alert.Heading>
  //       <p>Thank you for considering</p>
  //       <hr />
  //       <p className="mb-0">
  //         If you face any problems, feel free to contact us through our contact
  //         page.
  //       </p>
  //     </Alert>
  //   );
  // };

  return (
    <>
      <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title
            className="d-flex justify-content-center align-items-center fs-2"
            style={{ fontFamily: "Times New Roman" }}
          >
            {props.itemTag}
          </Card.Title>
        </Card.Body>
        <Link to={`store/${props.itemId}`}>
          <Card.Img
            variant="top"
            className="p-4"
            src={props.itemImgUrl}
            height="300px"
            onClick={() => {
              console.log("I am Image");
            }}
            style={{ objectFit: "cover" }}
          ></Card.Img>
        </Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline">
            <span className="ms-2 text-muted">
              Price ${props.itemPrice.toFixed(2)}
            </span>
            <Button className="" onClick={addToCartHandler}>
              Add to Cart
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>
      {/* {showAlert && <AlertComponent />} */}
    </>
  );
};

export default StoreItem;
