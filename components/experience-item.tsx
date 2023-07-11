import styles from './experience-item.module.css'

function ExperienceItem({ item }: any) {
  return (
    <div className={styles.itemContainer}>
      <span>
        <p className={styles.title}>{`${item.title} • ${item.company}`}</p>
      </span>
    </div>
  );
}

export default ExperienceItem;
