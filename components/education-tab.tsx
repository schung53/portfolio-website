import EducationItem from './education-item';
import styles from './education-tab.module.css';
import data from '../data/education.json';

function EducationTab() {
  return (
    <div className={styles.container}>
      {data.map((item) => <EducationItem key={item.degree} item={item} />)}
    </div>
  );
}

export default EducationTab;
