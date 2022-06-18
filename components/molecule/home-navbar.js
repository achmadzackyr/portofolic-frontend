import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function HomeNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-white border-bottom">
      <Container>
        <Navbar.Brand href="/">
          <img src="./logo-portofolic-dark.png" height={40} alt="Portofolic" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Discover</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Button className="me-2 btn-brand-outline">Log In</Button>
          <Button className="btn-brand">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
