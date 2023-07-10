import PropTypes, { InferProps } from 'prop-types';
import styles from './burger-menu.module.css';
import Image from 'next/image';

function BurgerMenu({ onClick }: InferProps<typeof BurgerMenu.propTypes>) {
  const handleClick = (event: any) => {
    event.stopPropagation();
    onClick?.();
  };

  return (
    <div onClick={handleClick}>
      <Image 
        className={styles.button}
        src="/burger-menu.svg"
        alt="Burger menu"
        width={40}
        height={40}
      />
    </div>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func
}

export default BurgerMenu;
