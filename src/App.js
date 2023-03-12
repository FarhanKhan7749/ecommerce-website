//import './App.css';
import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Header from './Componet/Layout/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Cart from './Componet/Cart/Cart';
import Footer from './Componet/Layout/Footer';
import ContactUs from './Pages/ContactUsPage';
function App() {
  const [showCart, setShowCart] = useState(false)
  const onShowCartHandler = () => {
    setShowCart(true);
  };

  const onHideCartHandler = () => {
    setShowCart(false);
  }
  return (
    // <Container>
    //   <Header></Header>
    // </Container>
    <div>
      
      {showCart && <Cart show={showCart} onClose={onHideCartHandler}></Cart>}
      <Header onOpen={onShowCartHandler}></Header>
      <Container>
        <React.Fragment>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Store />
          </Route>
          <Route path="/ContactUs" exact>
            <ContactUs />
          </Route>
        </React.Fragment>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
