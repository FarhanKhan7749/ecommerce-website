import { Button, Col, Container, Row, Stack } from "react-bootstrap";
// const divStyle = {
//   background: "#777",
//   padding: "40px",
// };
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
const Home = () => {
  return (
    <Container fluid>
      <Row className="p-2">
        <Col className="d-flex justify-content-center">
          <Button variant="outline-primary" className="m-2 p-2 fs-3">
            {" "}
            Get our Latest Album
          </Button>
        </Col>
      </Row>
      <Row className="p-2">
        <Col className="d-flex justify-content-center">
          <Button variant="outline-primary" className="m-2 p-2 rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8 5v14l11-7z" />
            </svg>
          </Button>
        </Col>
      </Row>
      <ColoredLine color="black" width="" />
      <Container fluid>
      <h1 className="text-center">Tours</h1>

        <Stack gap={3}  className="justify-content-between align-items-center">
          <div>
            <div className="bg-light border ">
              <span className="p-2">JUL 16</span>
              <span className="p-2">DETROIT, MI</span>
              <span className="p-2">DTE ENERGY MUSIC THEATRE</span>
              <Button variant="outline-primary" className="m-2 p-2">
                {" "}
                Book Tickets
              </Button>
            </div>
            <div className="vr" />
            <div className="bg-light border ">
              <span className="p-2">JUL19</span>
              <span className="p-2">TORONTO,ON</span>
              <span className="p-2" style={{marginLeft: '20px', marginRight: '45px'}}>BUDWEISER STAGE</span>
              <Button variant="outline-primary" className="m-2 p-2">
                {" "}
                Book Tickets
              </Button>
            </div>
            <div className="vr" />
            <div className="bg-light border ">
              <span className="p-2">JUL 22</span>
              <span className="p-2"> BRISTOW, VA</span>
              <span className="p-2" style={{marginLeft: '20px', marginRight: '65px'}}>JIGGY LUBE LIVE</span>
              <Button variant="outline-primary" className="m-2 p-2">
                {" "}
                Book Tickets
              </Button>
            </div>
            <div className="vr" />
            <div className="bg-light border ">
              <span className="p-2">JUL 29</span>
              <span className="p-2">PHOENIX, AZ</span>
              <span className="p-2" style={{marginLeft: '20px', marginRight: '45px'}}> AK-CHIN PAVILION</span>
              <Button variant="outline-primary" className="m-2 p-2">
                {" "}
                Book Tickets
              </Button>
            </div>
            <div className="vr" />
            <div className="bg-light border ">
              <span className="p-2">AUG 2</span>
              <span className="p-2">LAS VEGAS, NV</span>
              <span className="p-2" style={{marginLeft: '20px', marginRight: '45px'}}>T-MOBILE ARENA</span>
              <Button variant="outline-primary" className="m-2 p-2">
                {" "}
                Book Tickets
              </Button>
            </div>
            <div className="vr" />
            <div className="bg-light border ">
              <span className="p-2">AUG 7</span>
              <span className="p-2">CONCORD, CA</span>
              <span className="p-2" style={{marginLeft: '20px', marginRight: '25px'}}> CONCORD PAVILION</span>
              <Button variant="outline-primary" className="m-2 p-2">
                {" "}
                Book Tickets
              </Button>
            </div>
            <div className="vr" />
          </div>
        </Stack>
      </Container>
    </Container>
  );
};

export default Home;