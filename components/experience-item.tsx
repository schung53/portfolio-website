import styles from './experience-item.module.css'

function ExperienceItem({ item }: any) {
  return (
    <div className={styles.itemContainer}>
      <span className={styles.titleLine}>
        <p className={styles.title}>{`${item.title} • ${item.company}`}</p>
      </span>
      <span className={styles.infoLine}>
        <p>{item.date}</p>
        <div className={styles.dashedLine} />
        <p>{item.location}</p>
      </span>
    </div>
  );
}

export default ExperienceItem;
