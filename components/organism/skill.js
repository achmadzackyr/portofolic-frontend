import { Container, Row, Col } from 'react-bootstrap';

function Skill() {
  return (
    <section id="skill" className="pt-5">
      <Container className="pt-3">
        <Row className="mb-3">
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
                style={{ width: `${7 * 10}%` }}
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
                style={{ width: `${7 * 10}%` }}
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
                style={{ width: `${7 * 10}%` }}
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
                style={{ width: `${7 * 10}%` }}
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
                style={{ width: `${7 * 10}%` }}
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
                style={{ width: `${7 * 10}%` }}
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#c8c8ff4d"
          fill-opacity="1"
          d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,165.3C672,160,768,192,864,186.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Skill;
