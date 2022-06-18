import React, { useState } from 'react';
import ColorSelector from '../molecule/color-selector';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function PaletteSidebar({
  navbarBg,
  setNavbarBg,
  navbarText,
  setNavbarText,
  logoTheme,
  setLogoTheme,
  logoThemes,
  homeBg,
  setHomeBg,
  homeName,
  setHomeName,
  homeHeadline,
  setHomeHeadline,
  homeAvatar,
  setHomeAvatar,
  aboutBg,
  setAboutBg,
  aboutTitle,
  setAboutTitle,
  aboutContent,
  setAboutContent,
  portofolioBg,
  setPortofolioBg,
  portofolioTitle,
  setPortofolioTitle,
  portofolioSkill,
  setPortofolioSkill,
  skillBg,
  setSkillBg,
  skillTitle,
  setSkillTitle,
  skillBar,
  setSkillBar,
  contactBg,
  setContactBg,
  contactTitle,
  setContactTitle,
  contactLabel,
  setContactLabel,
  contactButton,
  setContactButton,
  footerBg,
  setFooterBg,
  footerText,
  setFooterText
}) {
  //#region navbar
  const handleClickNavbarBg = () => {
    setNavbarBg({ ...navbarBg, displayColorPicker: !navbarBg.displayColorPicker });
  };

  const handleClickNavbarText = () => {
    setNavbarText({ ...navbarText, displayColorPicker: !navbarText.displayColorPicker });
  };
  //#endregion

  //#region home
  const handleClickHomeBg = () => {
    setHomeBg({ ...homeBg, displayColorPicker: !homeBg.displayColorPicker });
  };

  const handleClickHomeName = () => {
    setHomeName({ ...homeName, displayColorPicker: !homeName.displayColorPicker });
  };

  const handleClickHomeHeadline = () => {
    setHomeHeadline({ ...homeHeadline, displayColorPicker: !homeHeadline.displayColorPicker });
  };

  const handleClickHomeAvatar = () => {
    setHomeAvatar({ ...homeAvatar, displayColorPicker: !homeAvatar.displayColorPicker });
  };
  //#endregion home

  //#region about
  const handleClickAboutBg = () => {
    setAboutBg({ ...aboutBg, displayColorPicker: !aboutBg.displayColorPicker });
  };

  const handleClickAboutTitle = () => {
    setAboutTitle({ ...aboutTitle, displayColorPicker: !aboutTitle.displayColorPicker });
  };

  const handleClickAboutContent = () => {
    setAboutContent({ ...aboutContent, displayColorPicker: !aboutContent.displayColorPicker });
  };
  //#endregion

  //#region portofolio
  const handleClickPortofolioBg = () => {
    setPortofolioBg({ ...portofolioBg, displayColorPicker: !portofolioBg.displayColorPicker });
  };

  const handleClickPortofolioTitle = () => {
    setPortofolioTitle({
      ...portofolioTitle,
      displayColorPicker: !portofolioTitle.displayColorPicker
    });
  };

  const handleClickPortofolioSkill = () => {
    setPortofolioSkill({
      ...portofolioSkill,
      displayColorPicker: !portofolioSkill.displayColorPicker
    });
  };
  //#endregion

  //#region skill
  const handleClickSkillBg = () => {
    setSkillBg({ ...skillBg, displayColorPicker: !skillBg.displayColorPicker });
  };

  const handleClickSkillTitle = () => {
    setSkillTitle({ ...skillTitle, displayColorPicker: !skillTitle.displayColorPicker });
  };

  const handleClickSkillBar = () => {
    setSkillBar({ ...skillBar, displayColorPicker: !skillBar.displayColorPicker });
  };
  //#endregion

  //#region contact
  const handleClickContactBg = () => {
    setContactBg({ ...contactBg, displayColorPicker: !contactBg.displayColorPicker });
  };

  const handleClickContactTitle = () => {
    setContactTitle({ ...contactTitle, displayColorPicker: !contactTitle.displayColorPicker });
  };

  const handleClickContactLabel = () => {
    setContactLabel({ ...contactLabel, displayColorPicker: !contactLabel.displayColorPicker });
  };

  const handleClickContactButton = () => {
    setContactButton({ ...contactButton, displayColorPicker: !contactButton.displayColorPicker });
  };
  //#endregion

  //#region footer
  const handleClickFooterBg = () => {
    setFooterBg({ ...footerBg, displayColorPicker: !footerBg.displayColorPicker });
  };

  const handleClickFooterText = () => {
    setFooterText({ ...footerText, displayColorPicker: !footerText.displayColorPicker });
  };
  //#endregion

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      style={{ width: 300 }}
    >
      <div className="offcanvas-header border-bottom">
        <span className="fs-5 fw-semibold" id="offcanvasRightLabel">
          Color Palette
        </span>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-collapse"
              aria-expanded="true"
            >
              Navbar
            </button>
            <div className="collapse show toggled-content" id="navbar-collapse">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <div className="d-flex align-items-center">
                    <ul style={{ lineHeight: '2em' }}>
                      <li>
                        Background
                        <ColorSelector component={navbarBg} handleClick={handleClickNavbarBg} />
                      </li>
                      <li>
                        Menu
                        <ColorSelector component={navbarText} handleClick={handleClickNavbarText} />
                      </li>
                      <li>
                        Logo
                        <ButtonGroup className="ms-2">
                          {logoThemes.map((radio, idx) => (
                            <ToggleButton
                              key={idx}
                              id={`radio-${idx}`}
                              type="radio"
                              variant={idx == 2 ? 'outline-light' : 'outline-dark'}
                              name="radio"
                              value={radio.value}
                              checked={logoTheme === radio.value}
                              onChange={(e) => setLogoTheme(e.currentTarget.value)}
                              size="sm"
                            >
                              {radio.name}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              Home
            </button>
            <div className="collapse toggled-content" id="home-collapse">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <div className="d-flex align-items-center">
                    <ul style={{ lineHeight: '2em' }}>
                      <li>
                        Background
                        <ColorSelector component={homeBg} handleClick={handleClickHomeBg} />
                      </li>
                      <li>
                        Name
                        <ColorSelector component={homeName} handleClick={handleClickHomeName} />
                      </li>
                      <li>
                        Headline
                        <ColorSelector
                          component={homeHeadline}
                          handleClick={handleClickHomeHeadline}
                        />
                      </li>
                      <li>
                        Avatar Border
                        <ColorSelector component={homeAvatar} handleClick={handleClickHomeAvatar} />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#about-collapse"
              aria-expanded="false"
            >
              About
            </button>
            <div className="collapse toggled-content" id="about-collapse">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <div className="d-flex align-items-center">
                    <ul style={{ lineHeight: '2em' }}>
                      <li>
                        Background
                        <ColorSelector component={aboutBg} handleClick={handleClickAboutBg} />
                      </li>
                      <li>
                        Header
                        <ColorSelector component={aboutTitle} handleClick={handleClickAboutTitle} />
                      </li>
                      <li>
                        Content
                        <ColorSelector
                          component={aboutContent}
                          handleClick={handleClickAboutContent}
                        />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#portofolio-collapse"
              aria-expanded="false"
            >
              Portofolio
            </button>
            <div className="collapse toggled-content" id="portofolio-collapse">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <div className="d-flex align-items-center">
                    <ul style={{ lineHeight: '2em' }}>
                      <li>
                        Background
                        <ColorSelector
                          component={portofolioBg}
                          handleClick={handleClickPortofolioBg}
                        />
                      </li>
                      <li>
                        Title
                        <ColorSelector
                          component={portofolioTitle}
                          handleClick={handleClickPortofolioTitle}
                        />
                      </li>
                      <li>
                        Skill
                        <ColorSelector
                          component={portofolioSkill}
                          handleClick={handleClickPortofolioSkill}
                        />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#skill-collapse"
              aria-expanded="false"
            >
              Skill
            </button>
            <div className="collapse toggled-content" id="skill-collapse">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <div className="d-flex align-items-center">
                    <ul style={{ lineHeight: '2em' }}>
                      <li>
                        Background
                        <ColorSelector component={skillBg} handleClick={handleClickSkillBg} />
                      </li>
                      <li>
                        Title
                        <ColorSelector component={skillTitle} handleClick={handleClickSkillTitle} />
                      </li>
                      <li>
                        Bar
                        <ColorSelector component={skillBar} handleClick={handleClickSkillBar} />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#contact-collapse"
              aria-expanded="false"
            >
              Contact
            </button>
            <div className="collapse toggled-content" id="contact-collapse">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <div className="d-flex align-items-center">
                    <ul style={{ lineHeight: '2em' }}>
                      <li>
                        Background
                        <ColorSelector component={contactBg} handleClick={handleClickContactBg} />
                      </li>
                      <li>
                        Title
                        <ColorSelector
                          component={contactTitle}
                          handleClick={handleClickContactTitle}
                        />
                      </li>
                      <li>
                        Label
                        <ColorSelector
                          component={contactLabel}
                          handleClick={handleClickContactLabel}
                        />
                      </li>
                      <li>
                        Button
                        <ColorSelector
                          component={contactButton}
                          handleClick={handleClickContactButton}
                        />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#footer-collapse"
              aria-expanded="true"
            >
              Footer
            </button>
            <div className="collapse show toggled-content" id="footer-collapse">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <div className="d-flex align-items-center">
                    <ul style={{ lineHeight: '2em' }}>
                      <li>
                        Background
                        <ColorSelector component={footerBg} handleClick={handleClickFooterBg} />
                      </li>
                      <li>
                        Text
                        <ColorSelector component={footerText} handleClick={handleClickFooterText} />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <Button variant="primary" className="me-1">
              Save
            </Button>
            <Button variant="secondary">Reset</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
