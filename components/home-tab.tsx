import Image from "next/image";
import styles from './home-tab.module.css'

function HomeTab() {
  return (
    <span className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src="/name-logo.svg"
          alt="James S. Chung"
          width={150}
          height={150}
        />
      </div>
      <div className={styles.summaryContainer}>
        <span>Software Engineer</span>
        <span className={styles.summaryLine}>Full-Stack at CharterUP</span>
        <span className={styles.summaryLine}>Canada • USA</span>
      </div>
    </span>
  );
}

export default HomeTab;
