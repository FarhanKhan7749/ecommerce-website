import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { productsArr } from "../../Pages/Store";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  let finalItem = {};
  //
  productsArr.map((item) => {
    if (item.id === params.productId) {
      finalItem = item;
      return finalItem;
    }
    return item;
  });
  //
  const cartCntx = useContext(CartContext);
  const addToCartHandler = (event) => {
    event.preventDefault();
    cartCntx.addItem({
      id: finalItem.id,
      imgUrl: finalItem.imageUrl,
      price: finalItem.price,
      tag: finalItem.tag,
      title: finalItem.title,
      amount: 1,
    });
  };
  return (
    <Container
      className="mt-5 p-5 justify-content-center align-items-center border rounded"
      style={{ fontFamily: "Times New Roman" }}
    >
      <Card>
        <Row>
          <Col className="p-4">
            <Card.Title className="d-flex fs-2 justify-content-center text-muted">
              <span>{finalItem.title}</span>
            </Card.Title>
            <Card.Img
              variant="top"
              src={finalItem.imageUrl}
              height="300px"
              style={{ objectFit: "cover" }}
            ></Card.Img>
          </Col>
          <Col className="p-4">
            <h2 className="text-center text-muted">{finalItem.tag}</h2>
            <p>
              Lorem ipsum carrots enhanced rebates. Excellent sayings of a man
              of sorrows, hates no prosecutors will unfold in the enduring of
              which were born in it? Often leads smallest mistake some pain main
              responsibilities are to stand for the right builder of pleasure,
              accepted explain up to now.
            </p>
            <br />
            <div className="p-2 text-end text-muted">
              <span className="p-3">Reviews(26)</span>
            </div>
            <br />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="d-flex justify-content-between align-items-baseline">
                <span className="ms-2 text-muted">
                  Price ${finalItem.price.toFixed(2)}
                </span>
                <Button className="" onClick={addToCartHandler}>
                  Add to Cart
                </Button>
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetails;
