import { useState } from 'react';
import Image from 'next/image';
import styles from './education-item.module.css';
import { Fade, Grid } from '@mui/material';
import { MediaType } from './enum';

function EducationItem({ item, mediaType }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const courseworkStyles = isOpen ? styles.openContainer : styles.closedContainer;

  const handleClick = () => {
    setIsOpen((prev) => {
      return !prev;
    })
  };

  return (
    <div className={styles.itemContainer} onClick={handleClick}>
      <div className={styles.innerContainer}>
        {(mediaType === MediaType.Desktop) && 
          <div className={styles.degreeShorthand}>
            <p>{item.degreeShorthand}</p>
          </div>}
        <div className={styles.main}>
          <div>
            <p className={styles.university}>{item.university}</p>
            <p className={styles.degree}>{item.degree}</p>
            <div className={styles.infoLine}>
              <p>{item.date}</p>
              <div className={styles.dashedLine} />
              <p>{item.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={courseworkStyles}>
        <Fade in={isOpen} timeout={{ enter: 1400, exit: 0 }}>
          <Grid container className={styles.courseworkContainer} justifyContent="center">
            {item.coursework.map((course: string) => {
              return (mediaType !== MediaType.Mobile) ? 
              <Grid item sx={{ paddingTop: 3.3, paddingBottom: 3.3 }} key={course} className={styles.course}>
                <div className={styles.courseLabel}>
                  <p>{course}</p>
                </div>
              </Grid>
              :
              <Grid item key={course} className={styles.course}>
                <div className={styles.courseLabel}>
                  <p>{course}</p>
                </div>
              </Grid>
          })}
          </Grid>
        </Fade>
      </div>
      <span className={styles.iconRow}>
        <div className={styles.arrowIcon}>
          <Image
            src="/arrow-icon.svg"
            alt="Arrow"
            width={30}
            height={30}
          />
        </div>
      </span>
    </div>
  );
}

export default EducationItem;
