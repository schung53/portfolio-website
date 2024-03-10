import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './education-item.module.css';
import { Fade, Grid } from '@mui/material';
import { MediaType } from './enum';
import { WHITE_TEXT_THEMES } from '@/utils/color';

function ProjectsItem({ item, mediaType, color }: any) {
  const [textColor, setTextColor] = useState("#000000")

  return (
    <div className={styles.itemContainer} style={{ backgroundColor: color, color: textColor }}></div>
  );
}

export default ProjectsItem;
