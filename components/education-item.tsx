import { useState } from 'react';
import Image from 'next/image';
import styles from './education-item.module.css';
import { Fade, Grid } from '@mui/material';

function EducationItem({ item, isDesktop }: any) {
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
        {isDesktop && <div className={styles.degreeShorthand}>
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
        <Fade in={isOpen} timeout={{ enter: 1000, exit: 200 }}>
          <Grid container className={styles.courseworkContainer} justifyContent="center">
            {item.coursework.map((course: string) => 
              <Grid item key={course} className={styles.course}>
                <div className={styles.courseLabel}>
                  <p>{course}</p>
                </div>
              </Grid>
            )}
          </Grid>
        </Fade>
      </div>
      <span className={styles.iconRow}>
        <div className={styles.arrowIcon}>
          <Image
            src="/arrow.svg"
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
