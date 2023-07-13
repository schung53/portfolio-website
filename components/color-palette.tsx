import styles from './color-palette.module.css';
import { ThemeColor } from './enum';
import { Slide } from '@mui/material';

function ColorPalette({ isMenuOpen, onClick }: any) {
  const colors = Object.keys(ThemeColor);

  const handleClick = (color: ThemeColor) => {
    onClick(color);
  };

  return (
    <Slide direction="up" in={isMenuOpen!} mountOnEnter unmountOnExit>
      <span className={styles.container}>
        <div className={styles.subContainer}>
          {colors.map((color) => {
            const hexColor = ThemeColor[color as keyof typeof ThemeColor];
            return (
              <div 
                key={hexColor} 
                className={styles.colorBox} 
                style={{ backgroundColor: hexColor }}
                onClick={() => handleClick(hexColor)}
              />
            );
          })}
        </div>
      </span>
    </Slide>
  );
}

export default ColorPalette;
