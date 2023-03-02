import { Col , Container, Row } from "react-bootstrap";
import StoreItem from "../Componet/StoreItem/StoreItem";

const Store = () => {
    const productsArr = [
        {
            id: "p1",
            tag: "Album 1",
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            id: "p2",
            tag: "Album 2",
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            id: "p3",
            tag: "Album 3",
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            id: "p4",
            tag: "Album 3",
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]

    const h1style = {
        fontFamily:'Metal Mania',
        fontWeight:'bold',
        padding: '20px',
        fontSize: '30px'
    }
    return (
        <Container>
            <h1 className="text-center" style={h1style}>MUSIC</h1>
            <Row md="2" xs="1" lg="2" className="g-5">
                {productsArr.map(item => (
                    <Col key={item.id}>
                        <StoreItem 
                            itemId={item.id}
                            itemTag={item.tag}
                            itemTitle={item.title}
                            itemPrice={item.price}
                            itemImgUrl={item.imageUrl}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default Store;
