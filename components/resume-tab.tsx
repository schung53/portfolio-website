import { useState, useEffect, useCallback } from "react";
import styles from "./resume-tab.module.css";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import { MediaType } from "./enum";
import { WHITE_TEXT_THEMES } from "@/utils/color";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function ResumeTab({ isMenuOpen, color }: any) {
  const [textColor, setTextColor] = useState("#000000");
  const [iconFile, setIconFile] = useState("/download-icon.svg");
  const [mediaType, setMediaType] = useState(MediaType.Desktop);
  const [containerStyles, setContainerStyles] = useState(styles.pdfContainer);

  useEffect(() => {
    if (WHITE_TEXT_THEMES.includes(color)) {
      setTextColor("#FADFB5");
      setIconFile("/download-icon-light.svg");
    } else {
      setTextColor("#000000");
      setIconFile("/download-icon.svg");
    }
  }, [color]);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const updateMenuStyles = useCallback(
    (isOpen: any) => {
      if (mediaType !== MediaType.Mobile) {
        return;
      }
      const menuStyles = isOpen
        ? styles.menuOpenContainer
        : styles.menuClosedContainer;
      setContainerStyles(menuStyles);
    },
    [mediaType]
  );

  useEffect(() => {
    updateMenuStyles(isMenuOpen);
  }, [isMenuOpen, updateMenuStyles]);

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    updateMenuStyles(isMenuOpen);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const updateMedia = () => {
    if (window.innerWidth > 1200) {
      setMediaType(MediaType.Desktop);
      return;
    }
    if (window.innerWidth > 700) {
      setMediaType(MediaType.Tablet);
      return;
    }
    setMediaType(MediaType.Mobile);
  };

  const documentHeight = (): number => {
    switch (mediaType) {
      case MediaType.Desktop:
        return 1200;
      case MediaType.Tablet:
        return 900;
      default:
        return 460;
    }
  };

  return (
    <div className={containerStyles} style={{ minWidth: "60%" }}>
      <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <a className={styles.downloadButton} href="resume.pdf" download style={{ backgroundColor: color, color: textColor }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ marginRight: "5px" }}
              src={iconFile}
              alt="Download"
              width={30}
              height={30}
            />
            <p>Download</p>
          </div>
        </a>
      </div>
      <Document file="/resume.pdf">
        <Page
          pageNumber={1}
          height={documentHeight()}
          className={styles.pageContainer}
        />
      </Document>
      <div style={{ height: 75 }}></div>
    </div>
  );
}

export default ResumeTab;
