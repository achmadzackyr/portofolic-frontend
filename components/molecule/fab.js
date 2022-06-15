import React from 'react';
import { Button } from 'react-bootstrap';

export default function Fab() {
  return (
    <div className="fab-container">
      <button
        className="p-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        style={{ borderWidth: 0, backgroundColor: 'transparent' }}
      >
        <i className="bi bi-palette-fill"></i>
      </button>
    </div>
  );
}
