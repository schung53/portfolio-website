import { useState, useEffect } from 'react';
import EducationItem from './education-item';
import styles from './education-tab.module.css';
import data from '../data/education.json';

function EducationTab() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1000)
  };

  return (
    <div className={styles.container}>
      {data.map((item, index) => 
        <EducationItem key={item.degree} item={item} index={index} isDesktop={isDesktop} />)
      }
    </div>
  );
}

export default EducationTab;
