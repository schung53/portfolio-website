import { useState, useEffect } from 'react';
import EducationItem from './education-item';
import styles from './education-tab.module.css';
import data from '../data/education.json';
import { MediaType } from './enum';

function EducationTab() {
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
      {data.map((item, index) => 
        <EducationItem key={item.degree} item={item} index={index} mediaType={mediaType} />)
      }
    </div>
  );
}

export default EducationTab;
