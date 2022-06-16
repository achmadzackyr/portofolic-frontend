import { Image } from 'react-bootstrap';

export default function Avatar({ homeAvatar }) {
  return (
    <div className="avatar">
      <Image
        roundedCircle
        className="img-thumbnail mt-5"
        src="/achmadzackyr.jpeg"
        style={{ width: '200px', backgroundColor: homeAvatar.color, borderColor: homeAvatar.color }}
      />
      <i className="bi bi-pencil rounded-circle edit-icon"></i>
    </div>
  );
}
