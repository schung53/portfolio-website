import PropTypes, { InferProps } from 'prop-types';
import styles from './menu-list.module.css'
import Slide from '@mui/material/Slide';

function MenuList({ isMenuOpen }: InferProps<typeof MenuList.propTypes>) {
  
  return (
    <Slide direction="right" in={isMenuOpen!} mountOnEnter unmountOnExit>
      <div id="menu-list" className={styles.listContainer}>
        <p className={styles.listItem}>Experience</p>
        <p className={styles.listItem}>Education</p>
        <p className={styles.listItem}>Projects</p>
        <p className={styles.listItem}>Resume</p>
        <p className={styles.listItem}>Contact</p>
      </div>
    </Slide>
  );
}

MenuList.propTypes = {
  isMenuOpen: PropTypes.bool
}


export default MenuList;
