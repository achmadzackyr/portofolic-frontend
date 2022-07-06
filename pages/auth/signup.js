import React from 'react';
import { Button, Form, Container, Image } from 'react-bootstrap';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div style={{ maxWidth: '400px' }} className="m-auto pt-3">
      <a href="/">
        <Image src="../logo-portofolic-dark.png" />
      </a>
      <h2>Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="username" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" required />
        </Form.Group>
        <div className="d-flex flex-column">
          <Button className="btn-brand" as="input" type="submit" value="Sign Up" />
          {/* <hr className="divider" /> */}
        </div>
      </Form>
      <div className="mt-2 text-center">
        Already a member?{' '}
        <Link href="/auth/signin">
          <a>Sign in now</a>
        </Link>
      </div>
    </div>
  );
}
