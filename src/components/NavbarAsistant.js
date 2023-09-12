import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Chat from './Chat'
import Marketing from './Marketing';
import Objective from './Objective';
import Solutions from './Solutions';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
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
              <Nav.Link>
                <Link to={"/"}>
                  Chat
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/objetivo"}>
                  Objetivo
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to={"/marketing"}>
                  Marketing
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/soluciones"}>
                  Soluciones
                </Link>
              </Nav.Link>
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