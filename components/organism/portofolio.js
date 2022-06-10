import { Container, Row, Col } from 'react-bootstrap';
import PortofolioCard from '../molecule/portofolio-card';

function Portofolio() {
  return (
    <Container id="portofolio" className="mb-5">
      <Row>
        <Col className="text-center">
          <h1>Portofolio</h1>
        </Col>
      </Row>
      <Row>
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
  );
}

export default Portofolio;
