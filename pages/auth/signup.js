import React, { useState } from 'react';
import { Button, Form, Container, Image, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import * as qs from 'qs';
import Router from 'next/router';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  userName: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default function SignUp() {
  const [validation, setValidation] = useState([]);

  return (
    <Container className="pt-3">
      <div className="text-center">
        <Image alt="Portofolic Logo" src="../logo-portofolic-dark.png" />
        <h2>Sign Up</h2>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          userName: '',
          email: '',
          password: '',
          passwordConfirm: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          var data = qs.stringify({
            first_name: values.firstName,
            last_name: values.lastName,
            username: values.userName,
            email: values.email,
            password: values.password
          });
          var config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_BACKEND}/api/auth/register`,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
          };

          axios(config)
            .then(function (response) {
              alert('Registration Success!');
              resetForm();
              Router.push('/auth/signin');
            })
            .catch(function (error) {
              setValidation(error.response.data.message);
              // alert(JSON.stringify(error.response.data.message, null, 2));
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={touched.firstName && errors.firstName ? 'error' : null}
                  />
                  {touched.firstName && errors.firstName ? (
                    <div className="alert alert-danger">{errors.firstName}</div>
                  ) : null}
                  {validation.first_name && (
                    <div className="alert alert-danger">{validation.first_name[0]}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={touched.lastName && errors.lastName ? 'error' : null}
                  />
                  {touched.lastName && errors.lastName ? (
                    <div className="alert alert-danger">{errors.lastName}</div>
                  ) : null}
                  {validation.last_name && (
                    <div className="alert alert-danger">{validation.last_name[0]}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="userName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Username"
                    name="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    className={touched.userName && errors.userName ? 'error' : null}
                  />
                  {touched.userName && errors.userName ? (
                    <div className="alert alert-danger">{errors.userName}</div>
                  ) : null}
                  {validation.username && (
                    <div className="alert alert-danger">{validation.username[0]}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={touched.email && errors.email ? 'error' : null}
                  />
                  {touched.email && errors.email ? (
                    <div className="alert alert-danger">{errors.email}</div>
                  ) : null}
                  {validation.email && (
                    <div className="alert alert-danger">{validation.email[0]}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={touched.password && errors.password ? 'error' : null}
                  />
                  {touched.password && errors.password ? (
                    <div className="alert alert-danger">{errors.password}</div>
                  ) : null}
                  {validation.password && (
                    <div className="alert alert-danger">{validation.password[0]}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="passwordConfirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password Type Again"
                    name="passwordConfirm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirm}
                    className={touched.passwordConfirm && errors.passwordConfirm ? 'error' : null}
                  />
                  {touched.passwordConfirm && errors.passwordConfirm ? (
                    <div className="alert alert-danger">{errors.passwordConfirm}</div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex flex-column">
              <Button
                className="btn-brand"
                as="input"
                type="submit"
                value="Sign Up"
                disabled={isSubmitting}
              />
              {/* <hr className="divider" /> */}
            </div>
          </Form>
        )}
      </Formik>
      <div className="mt-2 text-center">
        Already a member?{' '}
        <Link href="/auth/signin">
          <a>Sign in now</a>
        </Link>
      </div>
    </Container>
  );
}
