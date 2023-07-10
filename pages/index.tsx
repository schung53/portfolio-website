import Image from "next/image";
import styles from './index.module.css';

function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.centerBox}>
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
        </div>
      </div>
    </main>
  );
}

export default Home;
