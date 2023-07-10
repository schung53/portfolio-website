import PropTypes, { InferProps } from 'prop-types';
import styles from './burger-menu.module.css';
import Image from 'next/image';
import Fade from '@mui/material/Fade';

function BurgerMenu({ onClick, isMenuOpen }: InferProps<typeof BurgerMenu.propTypes>) {
  const handleClick = (event: any) => {
    event.stopPropagation();
    onClick?.();
  };

  return (
    <Fade in={!isMenuOpen!} style={{ transitionDelay: isMenuOpen ? '0ms' : '300ms' }}>
      <div onClick={handleClick}>
        <Image
          className={styles.image}
          src="/burger-menu.svg"
          alt="Burger menu"
          width={40}
          height={40}
        />
      </div>
    </Fade>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isMenuOpen: PropTypes.bool
}

export default BurgerMenu;
