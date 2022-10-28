import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Image } from 'react-bootstrap';
import Link from 'next/link';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import * as qs from 'qs';
import Router from 'next/router';
import Cookies from 'js-cookie';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required')
});

export default function SignIn() {
  const [validation, setValidation] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (Cookies.get('token') && Cookies.get('username')) {
      Router.push(`/${Cookies.get('username')}`);
    }
  }, []);

  return (
    <div style={{ maxWidth: '400px' }} className="m-auto pt-3">
      {/* <Link href="/" title="Go to home"> */}
      <Image alt="Portofolic Logo" src="../logo-portofolic-dark.png" />
      {/* </Link> */}
      <h2>Sign In</h2>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SigninSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          var data = qs.stringify({
            email: values.email,
            password: values.password
          });
          var config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_BACKEND}/api/auth/login`,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
          };

          axios(config)
            .then(function (response) {
              Cookies.set('token', response.data.data.token);
              Cookies.set('username', response.data.data.username);
              setErrorMsg('');
              setValidation([]);
              Router.push(`/${response.data.data.username}`);
            })
            .catch(function (error) {
              setErrorMsg(error.response.data.message);
              setValidation(error.response.data.message);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
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
            </Form.Group>
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
            </Form.Group>
            <div className="d-flex flex-column">
              {/* <Button
                href="#"
                variant="outline-light"
                style={{ width: '200px' }}
                className="mb-4 text-primary form-control"
              >
                Forgot password?
              </Button> */}
              <Button
                className="btn-brand"
                as="input"
                type="submit"
                value="Sign In"
                disabled={isSubmitting}
              />
              {/* <hr className="divider" /> */}
            </div>
          </Form>
        )}
      </Formik>
      <div className="mt-2 text-center">
        Not a member?{' '}
        <Link href="/auth/signup">
          <a>Sign up now</a>
        </Link>
      </div>
    </div>
  );
}
