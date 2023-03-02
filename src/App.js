//import './App.css';
//import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './Componet/Layout/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
function App() {
  return (
    // <Container>
    //   <Header></Header>
    // </Container>
    <div>
      <Header></Header>
      <Routes>
      <Route path='/home' element={<Home />}>Store</Route>
      <Route path='/store' element={<Store />}>Store</Route>
      <Route path='/about' element={<About />}>Store</Route>
      </Routes>
    </div>
  );
}

export default App;
