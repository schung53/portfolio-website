import { useState, useEffect, useCallback } from 'react';
import styles from './resume-tab.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { MediaType } from './enum';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function ResumeTab({ isMenuOpen, color }: any) {
  const [mediaType, setMediaType] = useState(MediaType.Desktop);
  const [containerStyles, setContainerStyles] = useState(styles.pdfContainer);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const updateMenuStyles = useCallback((isOpen: any) => {
    if (mediaType !== MediaType.Mobile) {
      return;
    }
    const menuStyles = isOpen ? styles.menuOpenContainer : styles.menuClosedContainer;
    setContainerStyles(menuStyles);
  }, [mediaType]);

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
        return 1000;
      case MediaType.Tablet:
        return 700;
      default:
        return 460
    }
  };

  return (
      <div className={containerStyles}>
        <Document file="/resume.pdf">
          <Page pageNumber={1} height={documentHeight()} className={styles.pageContainer} />
        </Document>
        <div style={{ height: 75 }}></div>
      </div>
  );
}

export default ResumeTab;
