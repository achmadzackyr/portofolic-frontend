import Avatar from '../molecule/avatar';
import { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function Jumbotron({
  homeBg,
  homeName,
  homeHeadline,
  fullName,
  headline,
  homeAvatar,
  aboutBg,
  setFullName,
  setHeadline,
  avatarSrc
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(avatarSrc);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <>
      <div className="pt-5 text-center" style={{ backgroundColor: homeBg.color }} id="home">
        <Avatar homeAvatar={homeAvatar} handleShow={handleShow} imgSrc={preview} />
        <h1 className="display-6 fw-semibold" style={{ color: homeName.color }}>
          {fullName}
        </h1>
        <p className="fs-5" style={{ color: homeHeadline.color }}>
          {headline}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={aboutBg.color}
            fillOpacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,112C672,128,768,160,864,170.7C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Home</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProfilePicture" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                // onChange={(e) => {
                //   console.log(e.target.files[0]);
                // }}
                onChange={onSelectFile}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                autoFocus
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="headline">
              <Form.Label>Headline</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describe you in one sentence"
                value={headline}
                onChange={(e) => {
                  setHeadline(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn-brand" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Jumbotron;
