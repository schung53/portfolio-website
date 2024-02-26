import { useState, useEffect, useCallback } from 'react';
import ProjectsItem from './projects-item';
import styles from './projects-tab.module.css';
import data from '../data/projects.json';
import { MediaType } from './enum';

function ProjectsTab({ isMenuOpen, color }: any) {
  const [mediaType, setMediaType] = useState(MediaType.Desktop);
  const [containerStyles, setContainerStyles] = useState(styles.container);

  const updateMenuStyles = useCallback((isOpen: any) => {
    if (mediaType !== MediaType.Mobile) {
      return;
    }
    const menuStyles = isOpen ? styles.menuOpenContainer : styles.menuClosedContainer;
    setContainerStyles(menuStyles);
  }, [mediaType]);

  useEffect(() => {
    updateMenuStyles(isMenuOpen);
  }, [isMenuOpen, updateMenuStyles]);

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    updateMenuStyles(isMenuOpen);
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
    <div className={containerStyles}>
      {data.map((item) => 
        <ProjectsItem key={item.date} item={item} mediaType={mediaType} color={color} />)}
    </div>
  );
}

export default ProjectsTab;
