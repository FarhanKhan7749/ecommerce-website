import { Container, Nav, Navbar } from "react-bootstrap"
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
    return(
        <Navbar fixed='top' bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link className={classes.list}>HOME</Nav.Link>
            <Nav.Link className={classes.list}>STORE</Nav.Link>
            <Nav.Link className={classes.list}>ABOUT</Nav.Link>
          </Nav>
        </Container>
        <HeaderCartButton></HeaderCartButton>
      </Navbar>
    )
}

export default Header;
