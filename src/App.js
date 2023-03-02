//import './App.css';
//import { Container } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
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
      <Container>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
