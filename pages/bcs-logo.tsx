import ScrollToTop from "@/components/scroll-to-top";
import styles from "./bcs-logo.module.css";
import Image from "next/image";
import Link from "next/link";
import { getWidth, getHeight, getNewDimensions } from "@/utils/dimension";
import { useEffect, useState } from "react";
import { MediaType } from "@/components/enum";

const UBC_BCS_URL =
  "https://www.cs.ubc.ca/students/undergrad/degree-programs/bcs-program-second-degree";

function BcsLogo() {
  const [mediaType, setMediaType] = useState(MediaType.Desktop);
  const isMobile = mediaType === MediaType.Mobile;

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
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

  const handleLinkClick = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <ScrollToTop>
      <main style={{ display: "grid", justifyContent: "center" }}>
        <div className={styles.container}>
          <Link href="/?tab=3">
            <Image
              className={styles.backButton}
              src="/back-button.svg"
              alt="Back"
              width={50}
              height={50}
            />
          </Link>
          <span className={styles.fullWidthLine}>
            <p className={styles.title}>Logo for the BCS Program at UBC</p>
          </span>
          <span className={styles.fullWidthLine}>
            <div className={styles.subHeader}>
              <div className={styles.leftSubHeader}>
                Contributors:
                <ul style={{ marginTop: "0.3vh" }}>
                  <li>James Chung (Design)</li>
                </ul>
              </div>
              <div className={styles.rightSubHeader}>
                <div
                  className={styles.linkButton}
                  onClick={() => handleLinkClick(UBC_BCS_URL)}
                >
                  <Image
                    style={{ width: 99 * 0.2, height: 135 * 0.2 }}
                    src="/ubc-logo.png"
                    alt="UBC"
                    width={99}
                    height={135}
                  />
                </div>
                <p
                  className={styles.linkName}
                  onClick={() => handleLinkClick(UBC_BCS_URL)}
                >
                  UBC BCS
                </p>
              </div>
            </div>
          </span>
          <span className={styles.bodyContainer}>
            <Image
              className={styles.photoContainer}
              src="/bcs-logo-wide.png"
              alt="UBC BCS"
              style={getNewDimensions("bcs-logo-wide.png", isMobile)}
              width={getWidth("bcs-logo-wide.png")}
              height={getHeight("bcs-logo-wide.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              BCS is the post-baccalaureate computer science program at the
              University of British Columbia. It’s a CS degree designed for
              mature learners who’ve already completed a bachelor’s in another
              field. I studied alongside many non-traditional types from former
              lawyers to petroleum engineers.
            </p>
            <p className={styles.paragraph} style={{ marginTop: "0.3vh" }}>
              In 2021, the student association of BCS held a design competition
              to create a new logo to represent the program.
            </p>
            <Image
              className={styles.photoContainer}
              src="/design-brief.png"
              alt="Design Brief"
              style={getNewDimensions("design-brief.png", isMobile)}
              width={getWidth("design-brief.png")}
              height={getHeight("design-brief.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              I submitted a design brief with my interpretation. It’s an
              alteration of UBC’s crest logo that incorporates classic
              signifiers of computers. My submission was selected as the winner
              and since then, the logo has been used on school merchandise, the
              student association website, ads for events, email signatures, and
              more.
            </p>
            <Image
              className={styles.photoContainer}
              src="/bcs-site.png"
              alt="BCS SA Site"
              style={getNewDimensions("bcs-site.png", isMobile)}
              width={getWidth("bcs-site.png")}
              height={getHeight("bcs-site.png")}
            />
            <Image
              className={styles.photoContainer}
              src="/bcs-sweater.png"
              alt="BCS Sweater"
              style={{
                ...getNewDimensions("bcs-sweater.png", isMobile),
                marginTop: "4vh",
              }}
              width={getWidth("bcs-sweater.png")}
              height={getHeight("bcs-sweater.png")}
            />
            <Image
              className={styles.photoContainer}
              src="/bcs-hacks.png"
              alt="BCS Hacks"
              style={{
                ...getNewDimensions("bcs-hacks.png", isMobile),
                marginTop: "4vh",
              }}
              width={getWidth("bcs-hacks.png")}
              height={getHeight("bcs-hacks.png")}
            />
          </span>
        </div>
      </main>
    </ScrollToTop>
  );
}

export default BcsLogo;
