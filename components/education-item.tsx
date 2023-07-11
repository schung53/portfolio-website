import styles from './education-item.module.css';

const dummy = {
  university: "Johns Hopkins University",
  degreeShorthand: "B.A.",
  degree: "Bachelor of Arts in Chemistry",
  date: "2013 - 2017",
  location: "Baltimore, MD"
}

function EducationItem() {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.degreeShorthand}>
        <p>{dummy.degreeShorthand}</p>
      </div>
      <div className={styles.main}>
        <p className={styles.university}>{dummy.university}</p>
        <p className={styles.degree}>{dummy.degree}</p>
        <div className={styles.infoLine}>
          <p>{dummy.date}</p>
          <div className={styles.dashedLine} />
          <p>{dummy.location}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
