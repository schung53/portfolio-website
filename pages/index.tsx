import { useState } from "react";
import BurgerMenu from "@/components/burger-menu";
import styles from './index.module.css';
import MenuList from "@/components/menu-list";
import HomeTab from "@/components/home-tab";
import ExperienceTab from "@/components/experience-tab";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tabId, setTabId] = useState(0);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const handleTabClick = (tabId: number) => {
    return setTabId(tabId)
  }

  const tabIdToComponent = (tabId: number) => {
    switch (tabId) {
      case 0:
        return <HomeTab />;
      case 1:
        return <ExperienceTab />;
      default:
        return <HomeTab />;
    }
  }

  return (
    <main>
      <div onClick={handleClose} className={styles.container}>
        <div className={styles.menuContainer}>
          <MenuList onClick={handleTabClick} isMenuOpen={isMenuOpen} />
        </div>
        <span className={styles.burgerMenuLine}>
          <div className={styles.burgerMenu}>
            {!isMenuOpen && <BurgerMenu onClick={handleOpen} />}
          </div>
        </span>
        {tabIdToComponent(tabId)}
      </div>
    </main>
  );
}

export default Home;
