import ExperienceItem from './experience-item';
import styles from './experience-tab.module.css';
import data from '../data/experience.json'

function ExperienceTab() {
  return (
    <div className={styles.container}>
      {data.map((item) => <ExperienceItem key={item.date} item={item} />)}
    </div>
  );
}

export default ExperienceTab;
