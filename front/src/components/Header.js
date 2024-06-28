//import des icone panier et compte
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//import bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import router pour lier les pages .
import { Link } from 'react-router-dom';

// Style bootstrap de Header
function Header() {
  return (
    <Navbar style={{ backgroundColor: '#6D9075', color: 'white'}}>
      <Container>
      <Link to = "/"><Navbar.Brand>Meubl&Co</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link ><Link to = "/produit">Produit</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link to = "/panier">
              <FontAwesomeIcon icon={faShoppingCart} /> </Link>
            </Nav.Link>
            <Nav.Link><Link to = "/compte">
              <FontAwesomeIcon icon={faUser} /> </Link>
            </Nav.Link>
            <Nav.Link href="#connection">Connection</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
