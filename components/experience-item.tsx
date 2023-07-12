import Image from 'next/image';
import styles from './experience-item.module.css';

function ExperienceItem({ item, isDesktop }: any) {

  const handleClick = () => {
    window.open(item.url, '_blank', 'noreferrer');
  }

  const _renderStackItem = (stackItem: string) => {
    return (
      <div key={stackItem} className={styles.stackItem}>
        <p className={styles.stackLabel}>{stackItem}</p>
      </div>
    );
  };

  return (
    <div className={styles.itemContainer} onClick={handleClick}>
      <div>
        {
          isDesktop ? 
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
            :
            <span>
              <p className={styles.mobileTitle}>{item.title}</p>
              <div>

              </div>
            </span>
        }
        <span className={styles.infoLine}>
          <p>{item.date}</p>
          <div className={styles.dashedLine} />
          <p>{item.location}</p>
        </span>
        <span className={styles.descriptionLine}>
          <p>{item.description}</p>
        </span>
        <span className={styles.stackLine}>
          <div className={styles.bigStackLine}>
            {item.stack.map((stackItem: string) => _renderStackItem(stackItem))}
          </div>
        </span>
      </div>
    </div>
  );
}

export default ExperienceItem;
