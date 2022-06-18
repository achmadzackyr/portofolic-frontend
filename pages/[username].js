import { useState } from 'react';
import styles from '../styles/username.module.css';
import PortofolioNavbar from '../components/molecule/portofolio-navbar';
import Jumbotron from '../components/organism/jumbotron';
import About from '../components/molecule/about';
import Skill from '../components/organism/skill';
import Contact from '../components/molecule/contact';
import Portofolio from '../components/organism/portofolio';
import Fab from '../components/molecule/fab';
import PaletteSidebar from '../components/organism/palette-sidebar';
import ColorPicker from '../components/molecule/color-picker';

export async function getServerSideProps({ params }) {
  //   const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills/${params.id}`);
  //   const res = await req.data.data;
  return {
    props: {
      username: params.username
    }
  };
}

function MyPortofolio(props) {
  const { username } = props;

  //#region navbar
  const [navbarBg, setNavbarBg] = useState({
    displayColorPicker: false,
    color: '#3F7C85'
  });

  const [navbarText, setNavbarText] = useState({
    displayColorPicker: false,
    color: '#ffffff'
  });

  const [logoTheme, setLogoTheme] = useState('1');

  const logoThemes = [
    { name: 'Light', value: '1' },
    { name: 'Dark', value: '2' }
  ];

  const handleCloseNavbarBg = () => {
    setNavbarBg({ ...navbarBg, displayColorPicker: false });
  };

  const handleChangeNavbarBg = (color) => {
    setNavbarBg({ ...navbarBg, color: color.hex });
  };

  const handleCloseNavbarText = () => {
    setNavbarText({ ...navbarText, displayColorPicker: false });
  };

  const handleChangeNavbarText = (color) => {
    setNavbarText({ ...navbarText, color: color.hex });
  };
  //#endregion

  //#region home
  const [homeBg, setHomeBg] = useState({
    displayColorPicker: false,
    color: '#00CCBF'
  });

  const [homeName, setHomeName] = useState({
    displayColorPicker: false,
    color: '#333333'
  });

  const [homeHeadline, setHomeHeadline] = useState({
    displayColorPicker: false,
    color: '#555555'
  });

  const [homeAvatar, setHomeAvatar] = useState({
    displayColorPicker: false,
    color: '#ffffff'
  });

  const handleCloseHomeBg = () => {
    setHomeBg({ ...homeBg, displayColorPicker: false });
  };

  const handleChangeHomeBg = (color) => {
    setHomeBg({ ...homeBg, color: color.hex });
  };

  const handleCloseHomeName = () => {
    setHomeName({ ...homeName, displayColorPicker: false });
  };

  const handleChangeHomeName = (color) => {
    setHomeName({ ...homeName, color: color.hex });
  };

  const handleCloseHomeHeadline = () => {
    setHomeHeadline({ ...homeHeadline, displayColorPicker: false });
  };

  const handleChangeHomeHeadline = (color) => {
    setHomeHeadline({ ...homeHeadline, color: color.hex });
  };

  const handleCloseHomeAvatar = () => {
    setHomeAvatar({ ...homeAvatar, displayColorPicker: false });
  };

  const handleChangeHomeAvatar = (color) => {
    setHomeAvatar({ ...homeAvatar, color: color.hex });
  };
  //#endregion

  //#region about
  const [aboutBg, setAboutBg] = useState({
    displayColorPicker: false,
    color: '#FFFFFF'
  });

  const [aboutTitle, setAboutTitle] = useState({
    displayColorPicker: false,
    color: '#333333'
  });

  const [aboutContent, setAboutContent] = useState({
    displayColorPicker: false,
    color: '#555555'
  });

  const handleCloseAboutBg = () => {
    setAboutBg({ ...aboutBg, displayColorPicker: false });
  };

  const handleChangeAboutBg = (color) => {
    setAboutBg({ ...aboutBg, color: color.hex });
  };

  const handleCloseAboutTitle = () => {
    setAboutTitle({ ...aboutTitle, displayColorPicker: false });
  };

  const handleChangeAboutTitle = (color) => {
    setAboutTitle({ ...aboutTitle, color: color.hex });
  };

  const handleCloseAboutContent = () => {
    setAboutContent({ ...aboutContent, displayColorPicker: false });
  };

  const handleChangeAboutContent = (color) => {
    setAboutContent({ ...aboutContent, color: color.hex });
  };
  //#endregion

  //#region portofolio
  const [portofolioBg, setPortofolioBg] = useState({
    displayColorPicker: false,
    color: '#00CCBF'
  });

  const [portofolioTitle, setPortofolioTitle] = useState({
    displayColorPicker: false,
    color: '#333333'
  });

  const [portofolioSkill, setPortofolioSkill] = useState({
    displayColorPicker: false,
    color: '#3F7C85'
  });

  const handleClosePortofolioBg = () => {
    setPortofolioBg({ ...portofolioBg, displayColorPicker: false });
  };

  const handleChangePortofolioBg = (color) => {
    setPortofolioBg({ ...portofolioBg, color: color.hex });
  };

  const handleClosePortofolioTitle = () => {
    setPortofolioTitle({ ...portofolioTitle, displayColorPicker: false });
  };

  const handleChangePortofolioTitle = (color) => {
    setPortofolioTitle({ ...portofolioTitle, color: color.hex });
  };

  const handleClosePortofolioSkill = () => {
    setPortofolioSkill({ ...portofolioSkill, displayColorPicker: false });
  };

  const handleChangePortofolioSkill = (color) => {
    setPortofolioSkill({ ...portofolioSkill, color: color.hex });
  };
  //#endregion

  //#region skill
  const [skillBg, setSkillBg] = useState({
    displayColorPicker: false,
    color: '#FFFFFF'
  });

  const [skillTitle, setSkillTitle] = useState({
    displayColorPicker: false,
    color: '#333333'
  });

  const [skillBar, setSkillBar] = useState({
    displayColorPicker: false,
    color: '#3F7C85'
  });

  const handleCloseSkillBg = () => {
    setSkillBg({ ...skillBg, displayColorPicker: false });
  };

  const handleChangeSkillBg = (color) => {
    setSkillBg({ ...skillBg, color: color.hex });
  };

  const handleCloseSkillTitle = () => {
    setSkillTitle({ ...skillTitle, displayColorPicker: false });
  };

  const handleChangeSkillTitle = (color) => {
    setSkillTitle({ ...skillTitle, color: color.hex });
  };

  const handleCloseSkillBar = () => {
    setSkillBar({ ...skillBar, displayColorPicker: false });
  };

  const handleChangeSkillBar = (color) => {
    setSkillBar({ ...skillBar, color: color.hex });
  };
  //#endregion

  //#region contact
  const [contactBg, setContactBg] = useState({
    displayColorPicker: false,
    color: '#00CCBF'
  });

  const [contactTitle, setContactTitle] = useState({
    displayColorPicker: false,
    color: '#333333'
  });

  const [contactLabel, setContactLabel] = useState({
    displayColorPicker: false,
    color: '#333333'
  });

  const [contactButton, setContactButton] = useState({
    displayColorPicker: false,
    color: '#3F7C85'
  });

  const handleCloseContactBg = () => {
    setContactBg({ ...contactBg, displayColorPicker: false });
  };

  const handleChangeContactBg = (color) => {
    setContactBg({ ...contactBg, color: color.hex });
  };

  const handleCloseContactTitle = () => {
    setContactTitle({ ...contactTitle, displayColorPicker: false });
  };

  const handleChangeContactTitle = (color) => {
    setContactTitle({ ...contactTitle, color: color.hex });
  };

  const handleCloseContactLabel = () => {
    setContactLabel({ ...contactLabel, displayColorPicker: false });
  };

  const handleChangeContactLabel = (color) => {
    setContactLabel({ ...contactLabel, color: color.hex });
  };

  const handleCloseContactButton = () => {
    setContactButton({ ...contactButton, displayColorPicker: false });
  };

  const handleChangeContactButton = (color) => {
    setContactButton({ ...contactButton, color: color.hex });
  };
  //#endregion

  //#region footer
  const [footerBg, setFooterBg] = useState({
    displayColorPicker: false,
    color: '#3F7C85'
  });

  const [footerText, setFooterText] = useState({
    displayColorPicker: false,
    color: '#ffffff'
  });

  const handleCloseFooterBg = () => {
    setFooterBg({ ...footerBg, displayColorPicker: false });
  };

  const handleChangeFooterBg = (color) => {
    setFooterBg({ ...footerBg, color: color.hex });
  };

  const handleCloseFooterText = () => {
    setFooterText({ ...footerText, displayColorPicker: false });
  };

  const handleChangeFooterText = (color) => {
    setFooterText({ ...footerText, color: color.hex });
  };
  //#endregion

  //   const updateSkill = async (e) => {
  //     e.preventDefault();

  //     const formData = new FormData();
  //     formData.append('skill_name', skillName);
  //     formData.append('_method', 'PUT');

  //     await axios
  //       .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills/${skill.id}`, formData)
  //       .then(() => {
  //         Router.push('/admin/master/skills');
  //       })
  //       .catch((error) => {
  //         setValidation(error.response.data);
  //       });
  //   };

  return (
    <>
      <header>
        <PortofolioNavbar bgColor={navbarBg.color} textColor={navbarText.color} logo={logoTheme} />
      </header>
      <main className={styles.body}>
        <div>
          {navbarBg.displayColorPicker && (
            <ColorPicker
              component={navbarBg}
              handleClose={handleCloseNavbarBg}
              handleChange={handleChangeNavbarBg}
              title="Navbar Background"
            />
          )}
          {navbarText.displayColorPicker && (
            <ColorPicker
              component={navbarText}
              handleClose={handleCloseNavbarText}
              handleChange={handleChangeNavbarText}
              title="Navbar Menu"
            />
          )}
          {homeBg.displayColorPicker && (
            <ColorPicker
              component={homeBg}
              handleClose={handleCloseHomeBg}
              handleChange={handleChangeHomeBg}
              title="Home Background"
            />
          )}
          {homeName.displayColorPicker && (
            <ColorPicker
              component={homeName}
              handleClose={handleCloseHomeName}
              handleChange={handleChangeHomeName}
              title="Home Fullname"
            />
          )}
          {homeHeadline.displayColorPicker && (
            <ColorPicker
              component={homeHeadline}
              handleClose={handleCloseHomeHeadline}
              handleChange={handleChangeHomeHeadline}
              title="Home Headline"
            />
          )}
          {homeAvatar.displayColorPicker && (
            <ColorPicker
              component={homeAvatar}
              handleClose={handleCloseHomeAvatar}
              handleChange={handleChangeHomeAvatar}
              title="Home Avatar"
            />
          )}
          {aboutBg.displayColorPicker && (
            <ColorPicker
              component={aboutBg}
              handleClose={handleCloseAboutBg}
              handleChange={handleChangeAboutBg}
              title="About Background"
            />
          )}
          {aboutTitle.displayColorPicker && (
            <ColorPicker
              component={aboutTitle}
              handleClose={handleCloseAboutTitle}
              handleChange={handleChangeAboutTitle}
              title="About Title"
            />
          )}
          {aboutContent.displayColorPicker && (
            <ColorPicker
              component={aboutContent}
              handleClose={handleCloseAboutContent}
              handleChange={handleChangeAboutContent}
              title="About Content"
            />
          )}
          {portofolioBg.displayColorPicker && (
            <ColorPicker
              component={portofolioBg}
              handleClose={handleClosePortofolioBg}
              handleChange={handleChangePortofolioBg}
              title="Portofolio Background"
            />
          )}
          {portofolioTitle.displayColorPicker && (
            <ColorPicker
              component={portofolioTitle}
              handleClose={handleClosePortofolioTitle}
              handleChange={handleChangePortofolioTitle}
              title="Portofolio Title"
            />
          )}
          {portofolioSkill.displayColorPicker && (
            <ColorPicker
              component={portofolioSkill}
              handleClose={handleClosePortofolioSkill}
              handleChange={handleChangePortofolioSkill}
              title="Portofolio Skill"
            />
          )}
          {skillBg.displayColorPicker && (
            <ColorPicker
              component={skillBg}
              handleClose={handleCloseSkillBg}
              handleChange={handleChangeSkillBg}
              title="Skill Background"
            />
          )}
          {skillTitle.displayColorPicker && (
            <ColorPicker
              component={skillTitle}
              handleClose={handleCloseSkillTitle}
              handleChange={handleChangeSkillTitle}
              title="Skill Title"
            />
          )}
          {skillBar.displayColorPicker && (
            <ColorPicker
              component={skillBar}
              handleClose={handleCloseSkillBar}
              handleChange={handleChangeSkillBar}
              title="Skill Bar"
            />
          )}
          {contactBg.displayColorPicker && (
            <ColorPicker
              component={contactBg}
              handleClose={handleCloseContactBg}
              handleChange={handleChangeContactBg}
              title="Contact Background"
            />
          )}
          {contactTitle.displayColorPicker && (
            <ColorPicker
              component={contactTitle}
              handleClose={handleCloseContactTitle}
              handleChange={handleChangeContactTitle}
              title="Contact Title"
            />
          )}
          {contactLabel.displayColorPicker && (
            <ColorPicker
              component={contactLabel}
              handleClose={handleCloseContactLabel}
              handleChange={handleChangeContactLabel}
              title="Contact Label"
            />
          )}
          {contactButton.displayColorPicker && (
            <ColorPicker
              component={contactButton}
              handleClose={handleCloseContactButton}
              handleChange={handleChangeContactButton}
              title="Contact Button"
            />
          )}
          {footerBg.displayColorPicker && (
            <ColorPicker
              component={footerBg}
              handleClose={handleCloseFooterBg}
              handleChange={handleChangeFooterBg}
              title="Footer Background"
            />
          )}
          {footerText.displayColorPicker && (
            <ColorPicker
              component={footerText}
              handleClose={handleCloseFooterText}
              handleChange={handleChangeFooterText}
              title="Contact Text"
            />
          )}
        </div>
        <Jumbotron
          homeBg={homeBg}
          homeName={homeName}
          homeHeadline={homeHeadline}
          homeAvatar={homeAvatar}
          aboutBg={aboutBg}
          fullName={'Achmad Zacky Rachmatullah'}
          headline={'10 Years+ Experienced Full Stack Developer'}
        />
        <About
          aboutBg={aboutBg}
          aboutTitle={aboutTitle}
          aboutContent={aboutContent}
          portofolioBg={portofolioBg}
        >
          Hallo I'm Zacky, I love to code. <br />
          I have more than 10 years of experience in web programming and 3 years in mobile
          programming. <br />
          Now I work in an airline in Indonesia as a Full Stack Developer. <br /> I can build
          website, desktop application and mobile application. <br /> I am open to freelance offers.
        </About>
        <Portofolio
          portofolioBg={portofolioBg}
          portofolioTitle={portofolioTitle}
          portofolioSkill={portofolioSkill}
          skillBg={skillBg}
        />
        <Skill
          skillBg={skillBg}
          skillTitle={skillTitle}
          skillBar={skillBar}
          contactBg={contactBg}
        />
        <Contact
          contactBg={contactBg}
          contactTitle={contactTitle}
          contactLabel={contactLabel}
          contactButton={contactButton}
          footerBg={footerBg}
        />
        <PaletteSidebar
          navbarBg={navbarBg}
          setNavbarBg={setNavbarBg}
          navbarText={navbarText}
          setNavbarText={setNavbarText}
          logoTheme={logoTheme}
          setLogoTheme={setLogoTheme}
          logoThemes={logoThemes}
          homeBg={homeBg}
          setHomeBg={setHomeBg}
          homeName={homeName}
          setHomeName={setHomeName}
          homeHeadline={homeHeadline}
          setHomeHeadline={setHomeHeadline}
          homeAvatar={homeAvatar}
          setHomeAvatar={setHomeAvatar}
          aboutBg={aboutBg}
          setAboutBg={setAboutBg}
          aboutTitle={aboutTitle}
          setAboutTitle={setAboutTitle}
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          portofolioBg={portofolioBg}
          setPortofolioBg={setPortofolioBg}
          portofolioTitle={portofolioTitle}
          setPortofolioTitle={setPortofolioTitle}
          portofolioSkill={portofolioSkill}
          setPortofolioSkill={setPortofolioSkill}
          skillBg={skillBg}
          setSkillBg={setSkillBg}
          skillTitle={skillTitle}
          setSkillTitle={setSkillTitle}
          skillBar={skillBar}
          setSkillBar={setSkillBar}
          contactBg={contactBg}
          setContactBg={setContactBg}
          contactTitle={contactTitle}
          setContactTitle={setContactTitle}
          contactLabel={contactLabel}
          setContactLabel={setContactLabel}
          contactButton={contactButton}
          setContactButton={setContactButton}
          footerBg={footerBg}
          setFooterBg={setFooterBg}
          footerText={footerText}
          setFooterText={setFooterText}
        />
        <Fab />
      </main>
      <footer
        className="pb-5 text-center"
        style={{ backgroundColor: footerBg.color, color: footerText.color }}
      >
        Portofolic - Made By IT Worker For IT Worker &middot; &copy; 2022
      </footer>
    </>
  );
}

export default MyPortofolio;
