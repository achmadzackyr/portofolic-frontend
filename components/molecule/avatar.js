import { Image } from 'react-bootstrap';

export default function Avatar({ homeAvatar, handleShow }) {
  return (
    <div className="avatar">
      <Image
        alt="My Profile Picture"
        roundedCircle
        className="img-thumbnail mt-5"
        src="/achmadzackyr.jpeg"
        style={{ width: '200px', backgroundColor: homeAvatar.color, borderColor: homeAvatar.color }}
      />
      <i className="bi bi-pencil rounded-circle edit-icon" onClick={handleShow}></i>
    </div>
  );
}
