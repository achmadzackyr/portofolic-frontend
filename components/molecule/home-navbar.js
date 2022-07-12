import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';

function HomeNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-white border-bottom">
      <Container>
        <Navbar.Brand href="/">
          <Image src="./logo-portofolic-dark.png" height={40} alt="Portofolic" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Discover</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Nav.Link href="auth/signin">Sign In</Nav.Link>
          <Button href="demo" className="me-2 btn-brand-outline">
            Demo
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
