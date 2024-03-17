import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./education-item.module.css";
import { Fade, Grid, Dialog, DialogContent } from "@mui/material";
import { MediaType } from "./enum";
import { WHITE_TEXT_THEMES } from "@/utils/color";

function EducationItem({ item, mediaType, color }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseworkHeight, setCourseworkHeight] = useState("0vh");
  const [textColor, setTextColor] = useState("#000000");
  const [iconFile, setIconFile] = useState("/link-out-icon.svg");

  const isMobile = window.matchMedia("(max-width: 700px)").matches;

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

  const updateCourseworkStyles = useCallback(
    (isOpen: boolean) => {
      const openHeight = mediaType === MediaType.Mobile ? "45vh" : "35vh";
      if (isOpen) {
        setCourseworkHeight(openHeight);
        return;
      }
      setCourseworkHeight("0vh");
    },
    [mediaType]
  );

  useEffect(() => {
    updateCourseworkStyles(isOpen);
  }, [isOpen, updateCourseworkStyles]);

  return (
    <div
      className={styles.itemContainer}
      style={{ backgroundColor: color, color: textColor }}
      onClick={handleClick}
    >
      <div className={styles.innerContainer}>
        {!isMobile && mediaType === MediaType.Desktop && (
          <>
            <div className={styles.degreeContainer}>
              <Image
                className={styles.degreeImage}
                src={item.diplomaImage}
                alt="Diploma"
                width={item.diplomaDimensions[0] * 1.1}
                height={item.diplomaDimensions[1] * 1.1}
                onClick={handleModalOpen}
              />
            </div>
            <Dialog
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#213555",
                  border: "0.33vh solid",
                  borderRadius: "1.75vh",
                  marginRight: "12vh",
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
      <div
        className={styles.courseworkListContainer}
        style={{
          height: courseworkHeight,
          marginTop: mediaType === MediaType.Mobile ? "1vh" : "0vh",
          marginBottom: mediaType === MediaType.Mobile ? "1vh" : "0vh",
        }}
      >
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
                  sx={{
                    paddingTop: "3.3vh",
                    paddingBottom: "3.3vh",
                    marginRight: "1vh",
                  }}
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
      <span
        className={styles.iconRow}
        style={{ marginTop: isOpen ? "-5vh" : "0vh" }}
      >
        <div id="arrow-icon" className={styles.arrowIcon}>
          <Image src={iconFile} alt="Arrow" width={30} height={30} />
        </div>
      </span>
    </div>
  );
}

export default EducationItem;
