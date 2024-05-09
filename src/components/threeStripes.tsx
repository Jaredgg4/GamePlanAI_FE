import React, { useState } from 'react';
import styles from './ThreeStripes.module.css' // Assuming your CSS file is named styles.css

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.ThreeStripes}>
      <input
        id={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className={styles.toggle} htmlFor="checkbox">
        <div id={styles.bar1} className={styles.bars}></div>
        <div id={styles.bar2} className={styles.bars}></div>
        <div id={styles.bar3} className={styles.bars}></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;