import React from 'react';
import Card from 'react-bootstrap/Card';

function PortofolioCard() {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Img variant="top" src="/project-thumbnail-default.jpg" alt="Project Thumbnail" />
      <Card.Body>
        <Card.Title>VaksinKesdamJaya.id - Aplikasi Pencatatan Vaksinasi</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </Card.Text>
        <div>
          <span className="badge rounded-pill bg-primary me-1">Laravel</span>
          <span className="badge rounded-pill bg-primary me-1">Next Js</span>
          <span className="badge rounded-pill bg-primary me-1">AWS</span>
          <span className="badge rounded-pill bg-primary me-1">MySql</span>
          <span className="badge rounded-pill bg-primary me-1">PHP</span>
          <span className="badge rounded-pill bg-primary me-1">React Js</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PortofolioCard;
