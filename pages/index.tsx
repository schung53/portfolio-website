import { useState } from "react";
import BurgerMenu from "@/components/burger-menu";
import styles from './index.module.css';
import MenuList from "@/components/menu-list";
import HomeTab from "@/components/home-tab";
import ExperienceTab from "@/components/experience-tab";
import ContactList from "@/components/contact-list";
import EducationTab from "@/components/education-tab";
import ScrollToTop from "@/components/scroll-to-top";
import ColorPalette from "@/components/color-palette";
import { ThemeColor } from "@/components/enum";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tabId, setTabId] = useState(0);
  const [themeColor, setThemeColor] = useState(ThemeColor.Red);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const handleTabClick = (tabId: number) => {
    return setTabId(tabId)
  };

  const tabIdToComponent = (tabId: number) => {
    switch (tabId) {
      case 0:
        return <HomeTab />;
      case 1:
        return <ExperienceTab isMenuOpen={isMenuOpen} color={themeColor} />;
      case 2:
        return <EducationTab isMenuOpen={isMenuOpen} color={themeColor} />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <ScrollToTop>
      <main>
        <div onClick={handleClose} className={styles.container}>
          <div className={styles.menuContainer}>
            <MenuList onClick={handleTabClick} isMenuOpen={isMenuOpen} />
            <ContactList isMenuOpen={isMenuOpen} />
            <ColorPalette isMenuOpen={isMenuOpen} onClick={setThemeColor} />
          </div>
          <span className={styles.burgerMenuLine}>
            <div className={styles.burgerMenu}>
              {!isMenuOpen && <BurgerMenu onClick={handleOpen} />}
            </div>
          </span>
          {tabIdToComponent(tabId)}
        </div>
      </main>
    </ScrollToTop>
  );
}

export default Home;
