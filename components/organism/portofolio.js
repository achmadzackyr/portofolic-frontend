import { Container, Row, Col } from 'react-bootstrap';
import PortofolioCard from '../molecule/portofolio-card';

function Portofolio() {
  return (
    <section id="portofolio" className="pt-5" style={{ backgroundColor: '#c8c8ff4d' }}>
      <Container className="pt-3">
        <Row className="mb-3">
          <Col className="text-center">
            <h1>Portofolio</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <PortofolioCard />
          </Col>
          <Col md={4}>
            <PortofolioCard />
          </Col>
          <Col md={4}>
            <PortofolioCard />
          </Col>
          <Col md={4}>
            <PortofolioCard />
          </Col>
          <Col md={4}>
            <PortofolioCard />
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,165.3C672,181,768,203,864,197.3C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Portofolio;
