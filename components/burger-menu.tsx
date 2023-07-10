import styles from './burger-menu.module.css'

import Image from 'next/image'

function BurgerMenu() {
  return (
    <div>
      <Image 
        src="/burger-menu.svg"
        alt="Burger menu"
        width={40}
        height={40}
      />
    </div>
  );
}

export default BurgerMenu;
