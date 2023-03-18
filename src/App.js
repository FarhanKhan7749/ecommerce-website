//import './App.css';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Header from './Componet/Layout/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Cart from './Componet/Cart/Cart';
import Footer from './Componet/Layout/Footer';
import ContactUs from './Pages/ContactUsPage';
import ProductDetails from './Componet/StoreItem/PrductDetails';
import AuthForm from './Auth/AuthForm';
import AuthContext from './store/auth-context';
function App() {
  const authCtx = useContext(AuthContext);
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
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {authCtx.isLoggedin && <Route path="/store" exact>
            <Store />
          </Route>}
          <Route path="/ContactUs" exact>
            <ContactUs />
          </Route>
          <Route path="/login" exact>
            <AuthForm />
          </Route>
          {authCtx.isLoggedin && <Route path="/store/:productId" exact>
            <ProductDetails />
          </Route>}
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
