import { Form, Container, Row, Col } from 'react-bootstrap';
import { SocialMediaIconsReact } from 'social-media-icons-react';

function Contact() {
  return (
    <Container id="contact" className="mb-5">
      <Row className="text-center">
        <Col>
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center d-flex justify-content-center">
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
  );
}

export default Contact;
