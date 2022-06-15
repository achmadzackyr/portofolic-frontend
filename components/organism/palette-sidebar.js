import React, { useState } from 'react';
import ColorSelector from '../molecule/color-selector';

export default function PaletteSidebar({ navbarBg, setNavbarBg, navbarText, setNavbarText }) {
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
                    <ul>
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