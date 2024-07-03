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
      <Link to = "/"><Navbar.Brand><img src="img/logo.svg" alt="logo meubl&Co"/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to = "/produit">Canapés</Link></Nav.Link>
            <Nav.Link ><Link to = "/produit">Tables</Link></Nav.Link>
            <Nav.Link ><Link to = "/produit">Chaises</Link></Nav.Link>
            <Nav.Link ><Link to = "/produit">Rangements</Link></Nav.Link>
            <Nav.Link ><Link to = "/produit">Luminaires</Link></Nav.Link>
            <Nav.Link ><Link to = "/produit">Décoration</Link></Nav.Link>
            <Nav.Link ><Link to = "/produit">Divers</Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link>
            <Link to = "/Vendre">
              <button className="btn btn-primary">Vendre</button>
            </Link>
            </Nav.Link>
            <Nav.Link><Link to = "/panier">
              <FontAwesomeIcon icon={faShoppingCart} /> </Link>
            </Nav.Link>
            <Nav.Link><Link to = "/connexion">
              <FontAwesomeIcon icon={faUser} /> </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
