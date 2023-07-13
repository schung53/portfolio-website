import Image from 'next/image';
import styles from './experience-item.module.css';
import { MediaType, ThemeColor } from './enum';
import { useEffect, useState } from 'react';

const whiteTextThemes = [ThemeColor.Red, ThemeColor.Brown];

function ExperienceItem({ item, mediaType, color }: any) {
  const [textColor, setTextColor] = useState("#000000")
  const [iconFile, setIconFile] = useState("/link-out-icon.svg");

  useEffect(() => {
    if (whiteTextThemes.includes(color)) {
      setTextColor("#FADFB5");
      setIconFile("/link-out-icon-light.svg");
    } else {
      setTextColor("#000000");
      setIconFile("/link-out-icon.svg");
    }
  }, [color]);

  const handleClick = () => {
    window.open(item.url, '_blank', 'noreferrer');
  };

  const _renderStackItem = (stackItem: string) => {
    const correctedStackItem = 
      (mediaType !== MediaType.Desktop && stackItem === "Spring Boot") ? "Spring" : stackItem;
    return (
      <div key={stackItem} className={styles.stackItem}>
        <p className={styles.stackLabel}>{correctedStackItem}</p>
      </div>
    );
  };

  return (
    <div className={styles.itemContainer} style={{ backgroundColor: color, color: textColor }} onClick={handleClick}>
      <div>
        {
          (mediaType !== MediaType.Mobile) ? 
            <span className={styles.titleLine}>
              <p className={styles.title}>{`${item.title} • ${item.company}`}</p>
              <Image 
                className={styles.linkIcon}
                src={iconFile}
                alt="Link out"
                width={20}
                height={20}
              />
            </span>
            :
            <span className={styles.titleLine}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.companyLine}>
                <p className={styles.title}>{item.company}</p>
                <Image 
                  className={styles.linkIcon}
                  src={iconFile}
                  alt="Link out"
                  width={10}
                  height={10}
              />
              </div>
            </span>
        }
        {
          (mediaType !== MediaType.Mobile) ? 
            <span className={styles.infoLine}>
              <p>{item.date}</p>
              <div className={styles.dashedLine} />
              <p>{item.location}</p>
            </span>
            :
            <span className={styles.infoLine}>
              <p>{`${item.date} • ${item.location}`}</p>
            </span>
        }
        <span className={styles.descriptionLine}>
          <p>{item.description}</p>
        </span>
        <span className={styles.stackLine}>
          <div className={styles.subStackLine}>
            {item.stack.map((stackItem: string) => _renderStackItem(stackItem))}
          </div>
        </span>
      </div>
    </div>
  );
}

export default ExperienceItem;
