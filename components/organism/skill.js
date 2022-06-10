import { Container, Row, Col } from 'react-bootstrap';
import randomColor from 'randomcolor';

function Skill() {
  return (
    <Container id="skill" className="mb-5">
      <Row>
        <Col className="text-center">
          <h1>Skill</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={2}>
          Wordpress Plugin
        </Col>
        <Col xs={8} md={4}>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${7 * 10}%`, background: randomColor() }}
              aria-valuenow="7"
              aria-valuemin="0"
              aria-valuemax="10"
            >
              7
            </div>
          </div>
        </Col>
        <Col xs={4} md={2}>
          Wordpress Plugin
        </Col>
        <Col xs={8} md={4}>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${7 * 10}%`, background: randomColor() }}
              aria-valuenow="7"
              aria-valuemin="0"
              aria-valuemax="10"
            >
              7
            </div>
          </div>
        </Col>
        <Col xs={4} md={2}>
          Wordpress Plugin
        </Col>
        <Col xs={8} md={4}>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${7 * 10}%`, background: randomColor() }}
              aria-valuenow="7"
              aria-valuemin="0"
              aria-valuemax="10"
            >
              7
            </div>
          </div>
        </Col>
        <Col xs={4} md={2}>
          Wordpress Plugin
        </Col>
        <Col xs={8} md={4}>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${7 * 10}%`, background: randomColor() }}
              aria-valuenow="7"
              aria-valuemin="0"
              aria-valuemax="10"
            >
              7
            </div>
          </div>
        </Col>
        <Col xs={4} md={2}>
          Wordpress Plugin
        </Col>
        <Col xs={8} md={4}>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${7 * 10}%`, background: randomColor() }}
              aria-valuenow="7"
              aria-valuemin="0"
              aria-valuemax="10"
            >
              7
            </div>
          </div>
        </Col>
        <Col xs={4} md={2}>
          Wordpress Plugin
        </Col>
        <Col xs={8} md={4}>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${7 * 10}%`, background: randomColor() }}
              aria-valuenow="7"
              aria-valuemin="0"
              aria-valuemax="10"
            >
              7
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
