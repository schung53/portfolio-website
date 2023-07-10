import PropTypes, { InferProps } from 'prop-types';
import styles from './menu-list.module.css'
import Slide from '@mui/material/Slide';

function MenuList({ onClick, isMenuOpen }: InferProps<typeof MenuList.propTypes>) {
  const handleClick = (tabId: number) => {
    onClick?.(tabId);
  }
  
  return (
    <Slide direction="right" in={isMenuOpen!} mountOnEnter unmountOnExit>
      <div id="menu-list" className={styles.listContainer}>
        <div className={styles.listItem} onClick={() => handleClick(1)}>Experience</div>
        <div className={styles.listItem} onClick={() => handleClick(2)}>Education</div>
        <div className={styles.listItem} onClick={() => handleClick(3)}>Projects</div>
        <div className={styles.listItem} onClick={() => handleClick(4)}>Resume</div>
        <div className={styles.listItem} onClick={() => handleClick(5)}>Contact</div>
      </div>
    </Slide>
  );
}

MenuList.propTypes = {
  onClick: PropTypes.func,
  isMenuOpen: PropTypes.bool
}

export default MenuList;
