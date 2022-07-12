import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function About({ children, aboutBg, aboutTitle, aboutContent, portofolioBg, aboutMe, setAboutMe }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section id="about" className="pt-5" style={{ backgroundColor: aboutBg.color }}>
        <Container className="pt-3">
          <Row className="mb-3">
            <Col className="text-center">
              <div className="edit-icon-container">
                <h1 style={{ color: aboutTitle.color }}>About Me</h1>
                <i className="bi bi-pencil rounded-circle edit-icon" onClick={handleShow}></i>
              </div>
            </Col>
          </Row>
          <Row className="text-center fs-5">
            <Col>
              <p style={{ color: aboutContent.color }}>{aboutMe}</p>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={portofolioBg.color}
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formAboutMe">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setAboutMe(e.target.value);
                }}
                value={aboutMe}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default About;
