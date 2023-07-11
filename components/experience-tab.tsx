import ExperienceItem from './experience-item';
import styles from './experience-tab.module.css';
import data from '../data/experience.json';

function ExperienceTab() {
  return (
    <div className={styles.container}>
      {data.map((item, index) => <ExperienceItem key={item.date} item={item} index={index} />)}
    </div>
  );
}

export default ExperienceTab;
