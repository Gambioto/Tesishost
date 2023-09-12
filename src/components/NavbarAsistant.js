import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Chat from './Chat'
import Marketing from './Marketing';
import Objective from './Objective';
import Solutions from './Solutions';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function Navigation() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Asistente Empresarial</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Chat</Nav.Link>
              <Nav.Link href="/objetivo">Objetivo</Nav.Link>
              <Nav.Link href="/marketing">Marketing</Nav.Link>
              <Nav.Link href="/soluciones">Soluciones</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
          <Route path="/" element={<Chat />}/>
          <Route path="/objetivo" element={<Objective />}/>
          <Route path="/marketing" element={<Marketing />}/>
          <Route path="/soluciones" element={<Solutions/>}/>
      </Routes>
    </Router>
    
  );
}