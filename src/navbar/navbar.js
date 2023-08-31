import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item>Cart</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
