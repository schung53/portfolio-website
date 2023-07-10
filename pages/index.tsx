import Image from "next/image";
import BurgerMenu from "@/components/burger-menu";
import styles from './index.module.css';

function Home() {
  return (
    <main>
      <div className={styles.container}>
        <span className={styles.burgerMenuLine}>
          <div className={styles.burgerMenu}>
            <BurgerMenu />
          </div>
        </span>
        <span className={styles.centerBox}>
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
      </div>
    </main>
  );
}

export default Home;
