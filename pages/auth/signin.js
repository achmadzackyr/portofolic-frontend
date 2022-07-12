import React from 'react';
import { Button, Form, Container, Image } from 'react-bootstrap';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div style={{ maxWidth: '400px' }} className="m-auto pt-3">
      {/* <Link href="/" title="Go to home"> */}
      <Image alt="Portofolic Logo" src="../logo-portofolic-dark.png" />
      {/* </Link> */}
      <h2>Sign In</h2>
      <Form>
        <Form.Group className="mb-3" controlId="emailusername">
          <Form.Label>Username or Email Address</Form.Label>
          <Form.Control type="text" placeholder="name@example.com or username" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" required />
        </Form.Group>
        <div className="d-flex flex-column">
          <Button
            href="#"
            variant="outline-light"
            style={{ width: '200px' }}
            className="mb-4 text-primary form-control"
          >
            Forgot password?
          </Button>
          <Button className="btn-brand" as="input" type="submit" value="Sign In" />
          {/* <hr className="divider" /> */}
        </div>
      </Form>
      <div className="mt-2 text-center">
        Not a member?{' '}
        <Link href="/auth/signup">
          <a>Sign up now</a>
        </Link>
      </div>
    </div>
  );
}
