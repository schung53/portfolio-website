import { useState } from "react";
import Image from "next/image";
import BurgerMenu from "@/components/burger-menu";
import styles from './index.module.css';
import MenuList from "@/components/menu-list";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    console.log("open")
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    console.log("close")
    setIsMenuOpen(false);
  };

  return (
    <main>
      <div onClick={handleClose} className={styles.container}>
        <div className={styles.menuContainer}>
          {isMenuOpen && <MenuList />}
        </div>
        <span className={styles.burgerMenuLine}>
          <div className={styles.burgerMenu}>
            {!isMenuOpen && <BurgerMenu onClick={handleOpen} />}
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
