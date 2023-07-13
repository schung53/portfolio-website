import { useEffect, useState } from "react";
import Image from "next/image";
import styles from './home-tab.module.css';
import { getLogoFile } from "@/utils/color";

function HomeTab({ color }: any) {
  const [logoFile, setLogoFile] = useState("/name-logo-red.svg");

  useEffect(() => {
    setLogoFile(getLogoFile(color));
  }, [color]);

  return (
    <span className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src={logoFile}
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
