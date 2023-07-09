import Image from "next/image";
import styles from './index.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image 
          src="/name-logo.svg"
          alt="James S. Chung"
          width={100}
          height={100}
        />
      </div>
    </main>
  );
}

export default Home;
