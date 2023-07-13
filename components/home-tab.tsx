import Image from "next/image";
import styles from './home-tab.module.css';
import { ThemeColor } from "./enum";
import { useEffect, useState } from "react";

function HomeTab({ color }: any) {
  const [logoFile, setLogoFile] = useState("/name-logo-red.svg");

  useEffect(() => {
    setLogo(color);
  }, [color]);

  const setLogo = (color: ThemeColor) => {
    switch (color) {
      case ThemeColor.Red:
        setLogoFile("/name-logo-red.svg");
        return;
      case ThemeColor.Pink:
        setLogoFile("/name-logo-pink.svg");
        return;
      case ThemeColor.Yellow:
        setLogoFile("/name-logo-yellow.svg");
        return;
      case ThemeColor.Blue:
        setLogoFile("/name-logo-blue.svg");
        return;
      case ThemeColor.Brown:
        setLogoFile("/name-logo-brown.svg");
        return;
      default:
        setLogoFile("/name-logo-red.svg");
    }
  }

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
