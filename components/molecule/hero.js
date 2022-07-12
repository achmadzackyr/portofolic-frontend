import React from 'react';
import { Button, Image } from 'react-bootstrap';

export default function Hero() {
  return (
    <section className="bg-light">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: '#292C6D' }}>
              Help you shine on your next interview
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first portofolio sites for free.
              Portofolic is designed according to the needs of the IT field.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button
                href="/auth/signup"
                title="Create my portofolio site"
                className="text-white btn-brand btn-lg px-4 me-md-2"
              >
                Get Started
              </Button>
              <Button
                href="demo"
                title="Demo portofolio"
                className="btn-brand-outline btn-lg px-4 me-md-2"
              >
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
