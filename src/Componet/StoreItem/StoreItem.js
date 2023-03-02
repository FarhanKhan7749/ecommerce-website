import { Card } from "react-bootstrap"

const StoreItem = (props) =>{
    return(
      <Card>
        <Card.Img variant="top" src={props.itemImgUrl} height="400px" style={{objectFit: "cover"}}></Card.Img>
      </Card>  
    );
}

export default StoreItem;