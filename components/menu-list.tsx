import styles from './menu-list.module.css'

function MenuList() {
  return (
    <div className={styles.listContainer}>
      <p className={styles.listItem}>Experience</p>
      <p className={styles.listItem}>Education</p>
      <p className={styles.listItem}>Projects</p>
      <p className={styles.listItem}>Contact</p>
    </div>
  );
}

export default MenuList;
