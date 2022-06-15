import React from 'react';
import styles from '../../styles/PaletteSidebar.module.css';
import { SketchPicker } from 'react-color';

export default function ColorSelector({ component, handleClose, handleChange, handleClick }) {
  return (
    <>
      <div className={styles.swatch} onClick={handleClick}>
        <div
          className={styles.color}
          style={{
            backgroundColor: component.color
          }}
        />
      </div>
      {component.displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker color={component.color} onChange={handleChange} />
        </div>
      ) : null}
    </>
  );
}
