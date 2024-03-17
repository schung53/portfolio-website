import PropTypes, { InferProps } from "prop-types";
import styles from "./contact-list.module.css";
import Image from "next/image";
import Slide from "@mui/material/Slide";

function ContactList({
  isMenuOpen,
  isHidden,
}: InferProps<typeof ContactList.propTypes>) {
  const handleClick = (event: any, type: number) => {
    event.stopPropagation();
    switch (type) {
      case 0:
        window.open("https://github.com/schung53", "_blank", "noreferrer");
        return;
      case 1:
        window.open("https://linkedin.com/in/schung53", "_blank", "noreferrer");
        return;
      case 2:
        window.open("mailto:sunhochung53@gmail.com");
        return;
      default:
        return;
    }
  };

  return (
    <Slide direction="left" in={isMenuOpen!} mountOnEnter unmountOnExit>
      <div className={styles.listContainer}>
        {!isHidden && (
          <>
            <span className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/github-logo.svg"
                alt="GitHub logo"
                width={50}
                height={50}
                onClick={(event) => handleClick(event, 0)}
              />
            </span>
            <span className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/linkedin-logo.svg"
                alt="LinkedIn logo"
                width={50}
                height={50}
                onClick={(event) => handleClick(event, 1)}
              />
            </span>
            <span className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/email-logo.svg"
                alt="Email logo"
                width={50}
                height={50}
                onClick={(event) => handleClick(event, 2)}
              />
            </span>
          </>
        )}
      </div>
    </Slide>
  );
}

ContactList.propTypes = {
  isMenuOpen: PropTypes.bool,
  isHidden: PropTypes.bool,
};

export default ContactList;
