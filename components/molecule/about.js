import { Container, Row, Col } from 'react-bootstrap';

function About({ children }) {
  return (
    <Container id="about" className="mb-5">
      <Row className="text-center">
        <Col>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row className="text-center fs-5">
        <Col>
          <p>{children}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
