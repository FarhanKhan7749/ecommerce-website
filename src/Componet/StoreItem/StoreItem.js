import { Card, Button } from "react-bootstrap"

const StoreItem = (props) =>{
    return(
      <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-center align-items-center fs-2" style={{fontFamily:'Times New Roman'}}>{props.itemTag}</Card.Title>
        </Card.Body>
        <Card.Img
          variant="top"
          className="p-4"
          src={props.itemImgUrl} 
          height="300px" 
          style={{objectFit: "cover"}}>
        </Card.Img>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline">
            <span className="ms-2 text-muted">Price ${props.itemPrice.toFixed(2)}</span>
            <Button className="">Add to Cart</Button>
          </Card.Title>
        </Card.Body>
      </Card>  
    );
}

export default StoreItem;