import PropTypes, { InferProps } from 'prop-types';
import styles from './menu-list.module.css';
import Slide from '@mui/material/Slide';

function MenuList({ onClick, isMenuOpen, isHidden }: InferProps<typeof MenuList.propTypes>) {
  const handleClick = (tabId: number) => {
    onClick?.(tabId);
  }

  return (
    <Slide direction="right" in={isMenuOpen!} mountOnEnter unmountOnExit>
      <div className={styles.listContainer}>
        {!isHidden && 
          <div id="menu-list">
            <div className={styles.listItem} onClick={() => handleClick(0)}>Home</div>
            <div className={styles.listItem} onClick={() => handleClick(1)}>Experience</div>
            <div className={styles.listItem} onClick={() => handleClick(2)}>Education</div>
            <div className={styles.listItem} onClick={() => handleClick(3)}>Projects</div>
          </div>}
        </div>
    </Slide>
  );
}

MenuList.propTypes = {
  onClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  isHidden: PropTypes.bool
};

export default MenuList;
