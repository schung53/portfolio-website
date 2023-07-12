import { useState, useEffect } from 'react';
import ExperienceItem from './experience-item';
import styles from './experience-tab.module.css';
import data from '../data/experience.json';

function ExperienceTab() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1200)
  };

  return (
    <div className={styles.container}>
      {data.map((item) => 
        <ExperienceItem key={item.date} item={item} isDesktop={isDesktop} />)}
    </div>
  );
}

export default ExperienceTab;
