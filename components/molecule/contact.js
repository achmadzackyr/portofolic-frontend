import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { SocialMediaIconsReact } from 'social-media-icons-react';

function Contact() {
  return (
    <section id="contact" className="pt-5" style={{ backgroundColor: '#c8c8ff4d' }}>
      <Container className="pt-3">
        <Row className="mb-3">
          <Col className="text-center">
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="fullname-contact">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="input your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email-contact">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message-contact">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center d-flex justify-content-center">
            <div className="mx-1">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.10)"
                icon="whatsapp"
                url="https://some-website.com/my-social-media-url"
                size="48"
              />
            </div>
            <div className="mx-1">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.10)"
                icon="github"
                url="https://some-website.com/my-social-media-url"
                size="48"
              />
            </div>
            <div className="mx-1">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.10)"
                icon="twitter"
                url="https://some-website.com/my-social-media-url"
                size="48"
              />
            </div>
            <div className="mx-1">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.10)"
                icon="instagram"
                url="https://some-website.com/my-social-media-url"
                size="48"
              />
            </div>
            <div className="mx-1">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.10)"
                icon="facebook"
                url="https://some-website.com/my-social-media-url"
                size="48"
              />
            </div>
            <div className="mx-1">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.10)"
                icon="youtube"
                url="https://some-website.com/my-social-media-url"
                size="48"
                className="mx-2"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5f5f5f"
          fill-opacity="1"
          d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,261.3C672,256,768,256,864,266.7C960,277,1056,299,1152,298.7C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Contact;
