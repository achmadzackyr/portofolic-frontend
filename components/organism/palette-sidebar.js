import React, { useState } from 'react';
import ColorSelector from '../molecule/color-selector';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function PaletteSidebar({
  navbarBg,
  setNavbarBg,
  navbarText,
  setNavbarText,
  logoTheme,
  setLogoTheme,
  logoThemes
}) {
  const handleClickNavbarBg = () => {
    setNavbarBg({ ...navbarBg, displayColorPicker: !navbarBg.displayColorPicker });
  };

  const handleCloseNavbarBg = () => {
    setNavbarBg({ ...navbarBg, displayColorPicker: false });
  };

  const handleChangeNavbarBg = (color) => {
    setNavbarBg({ ...navbarBg, color: color.hex });
  };

  const handleClickNavbarText = () => {
    setNavbarText({ ...navbarText, displayColorPicker: !navbarText.displayColorPicker });
  };

  const handleCloseNavbarText = () => {
    setNavbarText({ ...navbarText, displayColorPicker: false });
  };

  const handleChangeNavbarText = (color) => {
    setNavbarText({ ...navbarText, color: color.hex });
  };

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
                        Background Color
                        <ColorSelector
                          component={navbarBg}
                          handleClose={handleCloseNavbarBg}
                          handleChange={handleChangeNavbarBg}
                          handleClick={handleClickNavbarBg}
                        />
                      </li>
                      <li>
                        Text Color
                        <ColorSelector
                          component={navbarText}
                          handleClose={handleCloseNavbarText}
                          handleChange={handleChangeNavbarText}
                          handleClick={handleClickNavbarText}
                        />
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
                        Background Color
                        <ColorSelector
                          component={navbarBg}
                          handleClose={handleCloseNavbarBg}
                          handleChange={handleChangeNavbarBg}
                          handleClick={handleClickNavbarBg}
                        />
                      </li>
                      <li>
                        Text Color
                        <ColorSelector
                          component={navbarText}
                          handleClose={handleCloseNavbarText}
                          handleChange={handleChangeNavbarText}
                          handleClick={handleClickNavbarText}
                        />
                      </li>
                      <li>Background Color</li>
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
                        Background Color
                        <ColorSelector
                          component={navbarBg}
                          handleClose={handleCloseNavbarBg}
                          handleChange={handleChangeNavbarBg}
                          handleClick={handleClickNavbarBg}
                        />
                      </li>
                      <li>
                        Text Color
                        <ColorSelector
                          component={navbarText}
                          handleClose={handleCloseNavbarText}
                          handleChange={handleChangeNavbarText}
                          handleClick={handleClickNavbarText}
                        />
                      </li>
                      <li>Background Color</li>
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
                        Background Color
                        <ColorSelector
                          component={navbarBg}
                          handleClose={handleCloseNavbarBg}
                          handleChange={handleChangeNavbarBg}
                          handleClick={handleClickNavbarBg}
                        />
                      </li>
                      <li>
                        Text Color
                        <ColorSelector
                          component={navbarText}
                          handleClose={handleCloseNavbarText}
                          handleChange={handleChangeNavbarText}
                          handleClick={handleClickNavbarText}
                        />
                      </li>
                      <li>Background Color</li>
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
                        Background Color
                        <ColorSelector
                          component={navbarBg}
                          handleClose={handleCloseNavbarBg}
                          handleChange={handleChangeNavbarBg}
                          handleClick={handleClickNavbarBg}
                        />
                      </li>
                      <li>
                        Text Color
                        <ColorSelector
                          component={navbarText}
                          handleClose={handleCloseNavbarText}
                          handleChange={handleChangeNavbarText}
                          handleClick={handleClickNavbarText}
                        />
                      </li>
                      <li>Background Color</li>
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
                        Background Color
                        <ColorSelector
                          component={navbarBg}
                          handleClose={handleCloseNavbarBg}
                          handleChange={handleChangeNavbarBg}
                          handleClick={handleClickNavbarBg}
                        />
                      </li>
                      <li>
                        Text Color
                        <ColorSelector
                          component={navbarText}
                          handleClose={handleCloseNavbarText}
                          handleChange={handleChangeNavbarText}
                          handleClick={handleClickNavbarText}
                        />
                      </li>
                      <li>Background Color</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">
                    New...
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
