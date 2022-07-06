import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import PortofolioCard from '../molecule/portofolio-card';
import { useState } from 'react';

function Portofolio({ portofolioBg, portofolioTitle, portofolioSkill, skillBg }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section id="portofolio" className="pt-5" style={{ backgroundColor: portofolioBg.color }}>
        <Container className="pt-3">
          <Row className="mb-3">
            <Col className="text-center">
              <div className="edit-icon-container">
                <h1 style={{ color: portofolioTitle.color }}>Portofolio</h1>
                <i className="bi bi-pencil rounded-circle edit-icon" onClick={handleShow}></i>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4} lg={3}>
              <PortofolioCard portofolioSkill={portofolioSkill} />
            </Col>
            <Col md={4} lg={3}>
              <PortofolioCard portofolioSkill={portofolioSkill} />
            </Col>
            <Col md={4} lg={3}>
              <PortofolioCard portofolioSkill={portofolioSkill} />
            </Col>
            <Col md={4} lg={3}>
              <PortofolioCard portofolioSkill={portofolioSkill} />
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={skillBg.color}
            fillOpacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,165.3C672,181,768,203,864,197.3C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Portofolio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
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

export default Portofolio;
