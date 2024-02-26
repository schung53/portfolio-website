import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './education-item.module.css';
import { Fade, Grid } from '@mui/material';
import { MediaType, ThemeColor } from './enum';

const whiteTextThemes = [ThemeColor.DarkBlue];

function ProjectsItem({ item, mediaType, color }: any) {
  const [textColor, setTextColor] = useState("#000000")

  return (
    <div className={styles.itemContainer} style={{ backgroundColor: color, color: textColor }}></div>
  );
}

export default ProjectsItem;
