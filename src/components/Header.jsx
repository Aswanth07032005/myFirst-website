import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FiUser } from "react-icons/fi";

function Header() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Image
            className="logo-width"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1280px-Xiaomi_logo_%282021-%29.svg.png?20221112002517"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-margin-left-align" href="#home">
              Store
            </Nav.Link>
            <Nav.Link className="nav-margin-left-align" href="#home">
              Phones
            </Nav.Link>
            <Nav.Link className="nav-margin-left-align" href="#home">
              Tablets
            </Nav.Link>
            <Nav.Link className="nav-margin-left-align" href="#home">
              TV & Smart Home
            </Nav.Link>
            <Nav.Link className="nav-margin-left-align" href="#home">
              Smart Watch & Audio
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto ">
            <Nav.Link className="margin-left-align-second-nav" href="#home">
              Discover
            </Nav.Link>

            <Nav.Link className="margin-left-align-second-nav" href="#home">
              Support
            </Nav.Link>
          </Nav>


          <Nav className="ms-auto">
            <Nav.Link className="nav-margin-right" href="#home">
             <GoSearch size={20} />
            </Nav.Link>

            <Nav.Link className="nav-margin-right" href="#home">
             <LuShoppingCart size={20} />
            </Nav.Link>

             <Nav.Link className="nav-margin-right" href="#home">
             <FiUser size={20} />
            </Nav.Link>

            

             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
