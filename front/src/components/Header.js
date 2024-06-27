import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to = "/"><Navbar.Brand>Meubl&Co</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Panier</Nav.Link>
            <Nav.Link ><Link to = "/produit">Produit</Link></Nav.Link>
            <NavDropdown title="Mon Compte" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mes Commandes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mon Profil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Déconnexion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;