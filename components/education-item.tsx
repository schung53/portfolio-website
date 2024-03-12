import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./education-item.module.css";
import { Fade, Grid, Dialog, DialogContent } from "@mui/material";
import { MediaType } from "./enum";
import { WHITE_TEXT_THEMES } from "@/utils/color";

function EducationItem({ item, mediaType, color }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courseworkStyles = isOpen
    ? styles.openContainer
    : styles.closedContainer;
  const [textColor, setTextColor] = useState("#000000");
  const [iconFile, setIconFile] = useState("/link-out-icon.svg");

  useEffect(() => {
    if (WHITE_TEXT_THEMES.includes(color)) {
      setTextColor("#FADFB5");
      setIconFile("/arrow-icon-light.svg");
    } else {
      setTextColor("#000000");
      setIconFile("/arrow-icon.svg");
    }
  }, [color]);

  const handleClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const handleModalOpen = (event: any) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const handleModalClose = (event: any) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div
      className={styles.itemContainer}
      style={{ backgroundColor: color, color: textColor }}
      onClick={handleClick}
    >
      <div className={styles.innerContainer}>
        {mediaType === MediaType.Desktop && (
          <>
            <div className={styles.degreeContainer} onClick={handleModalOpen}>
              <Image
                className={styles.degreeImage}
                src={item.diplomaImage}
                alt="Diploma"
                width={item.diplomaDimensions[0]}
                height={item.diplomaDimensions[1]}
              />
            </div>
            <Dialog
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "",
                  border: "0.33vh solid",
                  borderRadius: "1.75vh",
                },
              }}
              maxWidth="lg"
              open={isModalOpen}
              onClose={handleModalClose}
            >
              <DialogContent
                sx={{ backgroundColor: "#213555" }}
                onClick={handleModalClose}
              >
                <Image
                  className={styles.degreeImage}
                  src={item.diplomaImage}
                  alt="Diploma"
                  width={item.diplomaDimensions[0] * item.diplomaScale}
                  height={item.diplomaDimensions[1] * item.diplomaScale}
                />
              </DialogContent>
            </Dialog>
          </>
        )}
        <div className={styles.main}>
          <div>
            {mediaType === MediaType.Mobile ? (
              <div className={styles.universityLine}>
                <div className={styles.sealContainer}>
                  <Image
                    src={item.image}
                    alt="Academic Seal"
                    width={item.dimensions[0]}
                    height={item.dimensions[1]}
                  />
                </div>
                <p className={styles.university}>{item.university}</p>
              </div>
            ) : (
              <p className={styles.university}>{item.university}</p>
            )}
            <p className={styles.degree}>{item.degree}</p>
            <div className={styles.infoLine}>
              <p>{item.date}</p>
              <div className={styles.dashedLine} />
              <p>{item.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={courseworkStyles}>
        <Fade in={isOpen} timeout={{ enter: 1400, exit: 0 }}>
          <Grid
            container
            className={styles.courseworkContainer}
            justifyContent="center"
          >
            {item.coursework.map((course: string) => {
              return mediaType !== MediaType.Mobile ? (
                <Grid
                  item
                  sx={{ paddingTop: 3.3, paddingBottom: 3.3 }}
                  key={course}
                  className={styles.course}
                >
                  <div className={styles.courseLabel}>
                    <p>{course}</p>
                  </div>
                </Grid>
              ) : (
                <Grid item key={course} className={styles.course}>
                  <div className={styles.courseLabel}>
                    <p>{course}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Fade>
      </div>
      <span className={styles.iconRow}>
        <div className={styles.arrowIcon}>
          <Image src={iconFile} alt="Arrow" width={30} height={30} />
        </div>
      </span>
    </div>
  );
}

export default EducationItem;
