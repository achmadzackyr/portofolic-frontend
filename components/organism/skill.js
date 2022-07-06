import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import SkillBar from '../molecule/skill-bar';
import { useState } from 'react';

function Skill({ skillBg, skillTitle, skillBar, contactBg }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section id="skill" className="pt-5" style={{ backgroundColor: skillBg.color }}>
        <Container className="pt-3">
          <Row className="mb-3">
            <Col className="text-center">
              <div className="edit-icon-container">
                <h1 style={{ color: skillTitle.color }}>Skill</h1>
                <i className="bi bi-pencil rounded-circle edit-icon" onClick={handleShow}></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={2}>
              Laravel
            </Col>
            <Col xs={8} md={4}>
              <SkillBar skillProf={9} skillBar={skillBar} />
            </Col>
            <Col xs={4} md={2}>
              Next Js
            </Col>
            <Col xs={8} md={4}>
              <SkillBar skillProf={8} skillBar={skillBar} />
            </Col>
            <Col xs={4} md={2}>
              React Js
            </Col>
            <Col xs={8} md={4}>
              <SkillBar skillProf={8} skillBar={skillBar} />
            </Col>
            <Col xs={4} md={2}>
              ASP.Net
            </Col>
            <Col xs={8} md={4}>
              <SkillBar skillProf={9} skillBar={skillBar} />
            </Col>
            <Col xs={4} md={2}>
              Firebase
            </Col>
            <Col xs={8} md={4}>
              <SkillBar skillProf={6} skillBar={skillBar} />
            </Col>
            <Col xs={4} md={2}>
              SQL Server
            </Col>
            <Col xs={8} md={4}>
              <SkillBar skillProf={7} skillBar={skillBar} />
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={contactBg.color}
            fillOpacity="1"
            d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,165.3C672,160,768,192,864,186.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Skill</Modal.Title>
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

export default Skill;
