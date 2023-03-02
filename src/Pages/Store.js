import { Col , Row } from "react-bootstrap";
import StoreItem from "../Componet/StoreItem/StoreItem";

const Store = () => {
    const productsArr = [
        {
            id: "p1",
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            id: "p2",
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            id: "p3",
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            id: "p4",
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]
    return (
        <>
            <h1>Store</h1>
            <Row md="2" xs="1" lg="2" className="g-3">
                {productsArr.map(item => (
                    <Col key={item.id}>
                        <StoreItem 
                            itemId={item.id}
                            itemTitle={item.title}
                            itemPrice={item.price}
                            itemImgUrl={item.imageUrl}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
};

export default Store;
