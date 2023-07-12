import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './education-item.module.css';

function EducationItem({ item }: any) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1000)
  }

  return (
    <div className={styles.itemContainer}>
      <div className={styles.innerContainer}>
        {isDesktop && <div className={styles.degreeShorthand}>
          <p>{item.degreeShorthand}</p>
        </div>}
        <div className={styles.main}>
          <p className={styles.university}>{item.university}</p>
          <p className={styles.degree}>{item.degree}</p>
          <div className={styles.infoLine}>
            <p>{item.date}</p>
            <div className={styles.dashedLine} />
            <p>{item.location}</p>
          </div>
        </div>
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
