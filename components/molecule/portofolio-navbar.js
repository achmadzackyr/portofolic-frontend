import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';

function PortofolioNavbar({ bgColor, textColor, logo }) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: bgColor }} fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={logo == '1' ? './logo-portofolic-light.png' : './logo-portofolic-dark.png'}
            height={40}
            alt="Portofolic"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ color: textColor }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: textColor }}>
              About
            </Nav.Link>
            <Nav.Link href="#portofolio" style={{ color: textColor }}>
              Portofolio
            </Nav.Link>
            <Nav.Link href="#skill" style={{ color: textColor }}>
              Skill
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: textColor }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortofolioNavbar;
