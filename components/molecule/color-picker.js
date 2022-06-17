import React from 'react';
import styles from '../../styles/username.module.css';
import { SketchPicker } from 'react-color';

export default function ColorPicker({ component, handleClose, handleChange, title }) {
  return (
    <div className={styles.popover}>
      <div className={styles.cover}>
        <span className={styles.coverTitle}>{title}</span>
        <i className="bi bi-x-circle" onClick={handleClose}></i>
      </div>
      <SketchPicker
        color={component.color}
        onChange={handleChange}
        disableAlpha={true}
        presetColors={[]}
      />
    </div>
  );
}
