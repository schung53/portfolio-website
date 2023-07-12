import { useState, useEffect } from 'react';
import ExperienceItem from './experience-item';
import styles from './experience-tab.module.css';
import data from '../data/experience.json';
import { MediaType } from './enum';

function ExperienceTab() {
  const [mediaType, setMediaType] = useState(MediaType.Desktop);

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const updateMedia = () => {
    if (window.innerWidth > 1200) {
      setMediaType(MediaType.Desktop);
      return;
    }
    if (window.innerWidth > 700) {
      setMediaType(MediaType.Tablet);
      return;
    }
    setMediaType(MediaType.Mobile);
  };

  return (
    <div className={styles.container}>
      {data.map((item) => 
        <ExperienceItem key={item.date} item={item} mediaType={mediaType} />)}
    </div>
  );
}

export default ExperienceTab;
