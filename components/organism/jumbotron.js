import Avatar from '../molecule/avatar';

function Jumbotron({ homeBg, homeName, homeHeadline, fullName, headline, homeAvatar }) {
  return (
    <div className="pt-5 mb-4 text-center" style={{ backgroundColor: homeBg.color }} id="home">
      <Avatar homeAvatar={homeAvatar} />
      <h1 className="display-6 fw-semibold" style={{ color: homeName.color }}>
        {fullName}
      </h1>
      <p className="fs-5" style={{ color: homeHeadline.color }}>
        {headline}
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,112C672,128,768,160,864,170.7C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Jumbotron;
