import ScrollToTop from "@/components/scroll-to-top";
import styles from "./status-share.module.css";
import Image from "next/image";
import Link from "next/link";
import { getWidth, getHeight, getNewDimensions } from "@/utils/dimension";
import { useEffect, useState } from "react";
import { MediaType } from "@/components/enum";

const SOURCE_CODE_URL = "https://github.com/medical-physics/status-share";

function StatusShare() {
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
            <p className={styles.title}>Status Share for BC Cancer</p>
          </span>
          <span className={styles.fullWidthLine}>
            <div className={styles.subHeader}>
              <div className={styles.leftSubHeader}>
                Contributors:
                <ul style={{ marginTop: "0.3vh" }}>
                  <li>Don Ta (Product, BC Cancer)</li>
                  <li>James Chung (Development)</li>
                </ul>
              </div>
              <div className={styles.rightSubHeader}>
                <div
                  className={styles.linkButton}
                  onClick={() => handleLinkClick(SOURCE_CODE_URL)}
                >
                  <Image
                    src="/github-logo.svg"
                    alt="GitHub"
                    width={40}
                    height={40}
                  />
                </div>
                <p
                  className={styles.linkName}
                  onClick={() => handleLinkClick(SOURCE_CODE_URL)}
                >
                  Source Code
                </p>
              </div>
            </div>
          </span>
          <span className={styles.bodyContainer}>
            <Image
              className={styles.photoContainer}
              src="/status-share-0.png"
              alt="Status Share"
              style={getNewDimensions("status-share-0.png", isMobile)}
              width={getWidth("status-share-0.png")}
              height={getHeight("status-share-0.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              Status Share is an internal tool used daily by staff of the
              Medical Physics Department at BC Cancer, a cancer treatment center
              in Vancouver, Canada. The web app tracks equipment and employee
              statuses and allows staff to send messages and share memos. I
              worked with Don Ta, a Radiation Therapy Services Technologist at
              BC Cancer, to develop requirements and design the product.
            </p>
            <p className={styles.paragraph} style={{ marginTop: "0.3vh" }}>
              On a surface level, it’s a run-of-the-mill CRUD app built on the
              standard MERN stack. But it’s also an app used by a critical
              department supporting cancer patients via medical imaging and
              radiation therapy. As such, I wanted to make this as robust and
              “production-grade” as possible. Some important features include:
            </p>
            <Image
              className={styles.photoContainer}
              src="/status-share-diagram.png"
              alt="Status Share"
              style={getNewDimensions("status-share-diagram.png", isMobile)}
              width={getWidth("status-share-diagram.png")}
              height={getHeight("status-share-diagram.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              Real-time update capability was implemented using web sockets
              (Socket.IO) and change streams (MongoDB). This allows all users to
              see status updates and messages delivered in real-time.
            </p>
            <Image
              className={styles.photoContainer}
              src="/status-share-1.png"
              alt="Status Share"
              style={getNewDimensions("status-share-1.png", isMobile)}
              width={getWidth("status-share-1.png")}
              height={getHeight("status-share-1.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              The auth system uses JWT to ensure that all routes are protected
              and to enable persistent login. Although the app doesn’t handle
              patient data, I was asked to prioritize security, since all
              hospital data is considered sensitive in nature.
            </p>
            <Image
              className={styles.photoContainer}
              src="/status-share-2.png"
              alt="Status Share"
              style={getNewDimensions("status-share-2.png", isMobile)}
              width={getWidth("status-share-2.png")}
              height={getHeight("status-share-2.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              Since launch, the app has gone through many iterations. I
              maintained contact with the department and handled any bugs or
              feature requests. In 2022, I re-built the app from the ground up
              to include a UI re-design and new features such as dark mode.
            </p>
          </span>
        </div>
      </main>
    </ScrollToTop>
  );
}

export default StatusShare;
