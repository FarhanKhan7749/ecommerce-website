//import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './Componet/Layout/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Cart from './Componet/Cart/Cart';
import Footer from './Componet/Layout/Footer';
function App() {
  const [showCart,setShowCart] = useState(false)
  const onShowCartHandler = () =>{
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
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
