import React from 'react';
import styles from '../../styles/PaletteSidebar.module.css';
import { SketchPicker } from 'react-color';

export default function ColorSelector({ component, handleClick }) {
  return (
    <>
      <div className={styles.swatch} onClick={handleClick} data-bs-dismiss="offcanvas">
        <div
          className={styles.color}
          style={{
            backgroundColor: component.color
          }}
        />
      </div>
      {/* {component.displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={component.color}
            onChange={handleChange}
            disableAlpha={true}
            presetColors={[]}
          />
        </div>
      ) : null} */}
    </>
  );
}
