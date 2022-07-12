import React from 'react';
import { Image, Row, Col, Card } from 'react-bootstrap';

function HomePortofolio() {
  return (
    <section style={{ padding: '2rem' }}>
      <h4 className="text-center mb-4">Featured Portofolio</h4>
      <Row xs={1} md={3} lg={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <div className="card" style={{ border: 'none' }}>
              <Image
                src="project-thumbnail-default.jpg"
                style={{ borderRadius: 'calc(.5rem - 1px)' }}
                alt="portofolio thumbnail"
              />
              <div className="px-0 pt-1">
                <Row>
                  <Col xs={8}>
                    <Row>
                      <Col style={{ fontWeight: 500 }}>
                        Daragang - Delivery Order Marketplace Apps
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: '0.8rem' }}>React Native, Firebase</Col>
                    </Row>
                  </Col>
                  <Col xs={4} style={{ fontSize: '0.8rem' }}>
                    Achmad Zacky Rachmatullah
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default HomePortofolio;
