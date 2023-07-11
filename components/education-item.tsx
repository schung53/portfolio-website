import styles from './education-item.module.css';

function EducationItem({ item }: any) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.degreeShorthand}>
        <p>{item.degreeShorthand}</p>
      </div>
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
  );
}

export default EducationItem;
