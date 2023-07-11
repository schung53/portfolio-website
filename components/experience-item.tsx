import Image from 'next/image';
import styles from './experience-item.module.css'

function ExperienceItem({ item }: any) {

  const handleClick = (event: any) => {
    window.open(item.url, '_blank', 'noreferrer');
  }

  return (
    <div className={styles.itemContainer} onClick={handleClick}>
      <div>
        <span className={styles.titleLine}>
          <p className={styles.title}>{`${item.title} • ${item.company}`}</p>
          <Image 
            className={styles.linkIcon}
            src="/link-out-icon.svg"
            alt="Link out"
            width={20}
            height={20}
          />
        </span>
        <span className={styles.infoLine}>
          <p>{item.date}</p>
          <div className={styles.dashedLine} />
          <p>{item.location}</p>
        </span>
        <span className={styles.descriptionLine}>
          <p>{item.description}</p>
        </span>
      </div>
    </div>
  );
}

export default ExperienceItem;
