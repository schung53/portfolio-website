import ScrollToTop from "@/components/scroll-to-top";
import styles from "./neuro-research.module.css";
import Image from "next/image";
import Link from "next/link";
import { getWidth, getHeight, getNewDimensions } from "@/utils/dimension";
import { useEffect, useState } from "react";
import { MediaType } from "@/components/enum";

const GOOGLE_SCHOLAR_URL =
  "https://scholar.google.com/citations?hl=en&user=fZUV7CMAAAAJ";
const ECS_PAPER_URL = "https://www.nature.com/articles/npp2017252";
const DBS_PAPER_URL = "https://www.nature.com/articles/npp2015350";

function NeuroResearch() {
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
            <p className={styles.title}>Published Neuroscience Research</p>
          </span>
          <span className={styles.fullWidthLine}>
            <div className={styles.subHeader}>
              <div className={styles.leftSubHeader}>
                Institution:
                <ul style={{ marginTop: "0.3vh" }}>
                  <li>Johns Hopkins University School of Medicine</li>
                </ul>
              </div>
              <div className={styles.rightSubHeader}>
                <div
                  className={styles.linkButton}
                  onClick={() => handleLinkClick(GOOGLE_SCHOLAR_URL)}
                >
                  <Image
                    src="/google-scholar-icon.png"
                    alt="Google Scholar"
                    width={27.5}
                    height={27.5}
                  />
                </div>
                <p
                  className={styles.linkName}
                  onClick={() => handleLinkClick(GOOGLE_SCHOLAR_URL)}
                >
                  Google Scholar
                </p>
              </div>
            </div>
          </span>
          <span className={styles.bodyContainer}>
            <Image
              className={styles.photoContainer}
              src="/jhmi-photo.png"
              alt="Johns Hopkins Medicine"
              style={getNewDimensions("jhmi-photo.png", isMobile)}
              width={getWidth("jhmi-photo.png")}
              height={getHeight("jhmi-photo.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              Before I entered the tech industry, I studied chemistry and had
              strong interests in pharmacology, neuroscience, and psychology. I
              was a research assistant for three years in the lab of Dr. Irving
              M. Reti at Johns Hopkins Medicine (Depts. of Psychiatry &
              Neuroscience).
            </p>
            <p className={styles.paragraph} style={{ marginTop: "0.3vh" }}>
              During my time at the lab, I designed and performed experiments,
              analyzed data, and led projects. My work contributed to two
              publications in a <i>Nature</i> sub-journal. I also received the
              Provost’s Undergraduate Research Award, a grant to support my
              research at Hopkins.
            </p>
            <Image
              className={styles.photoContainer}
              src="/neurogenesis.png"
              alt="Neurogenesis"
              style={getNewDimensions("neurogenesis.png", isMobile)}
              width={getWidth("neurogenesis.png")}
              height={getHeight("neurogenesis.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              Our work focused on the neuronal basis and efficacy of brain
              stimulation therapies such as ECT and DBS. Electroconvulsive
              therapy (ECT) was my main focus and I investigated its mechanism
              of action, which remains elusive to this day. ECT, once called
              electroshock therapy, is used as a last-line treatment for
              depression (MDD). Although it’s incredibly effective, it’s still
              unknown exactly how the procedure delivers its therapeutic
              effects.
            </p>
            <p className={styles.paragraph} style={{ marginTop: "0.3vh" }}>
              I studied the role of a protein called neuronal activity-regulated
              pentraxin (Narp or Nptx2) in stimulating neurogenesis (new neuron
              growth) and BDNF expression in the brain after treatment with ECT.
            </p>
            <Image
              className={styles.photoContainer}
              src="/crispr.jpg"
              alt="CRISPR"
              style={getNewDimensions("crispr.jpg", isMobile)}
              width={getWidth("crispr.jpg")}
              height={getHeight("crispr.jpg")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              I also worked on creating a new mouse model using CRISPR, a modern
              gene-editing technique. The goal was to create a line of
              genetically modified mice that lack the Nptx2 gene (called Narp KO
              mice). CRISPR greatly streamlines the gene-editing process and I
              was able to lead the project by conducting due diligence,
              designing the gRNA, and collaborating with scientists at the
              Transgenic Core to carry out the genome modification.
            </p>
            <Image
              className={styles.photoContainer}
              src="/stn-dbs.png"
              alt="STN DBS"
              style={getNewDimensions("stn-dbs.png", isMobile)}
              width={getWidth("stn-dbs.png")}
              height={getHeight("stn-dbs.png")}
            />
            <p className={styles.paragraph} style={{ marginTop: "3vh" }}>
              Another area of research was deep brain stimulation (DBS) for the
              treatment of self-injurious behavior (SIB) associated with autism
              (ASD). We were able to demonstrate that DBS-like stimulation at
              the subthalamic nucleus of the mouse brain suppresses SIB-like
              behavior in mouse models.
            </p>
            <p className={styles.paragraph} style={{ marginTop: "5vh" }}>
              Below are my co-authored publications:
            </p>
            <p
              className={styles.paragraph}
              style={{ marginTop: "0.5vh", cursor: "pointer" }}
              onClick={() => handleLinkClick(ECS_PAPER_URL)}
            >
              Chang, A., Vaidya, P., Retzbach, E., <b>Chung, S.</b> et al. Narp
              Mediates Antidepressant-Like Effects of Electroconvulsive
              Seizures. <i>Neuropsychopharmacology</i> <b>43</b>, 1088–1098
              (2018).{" "}
              <a style={{ color: "blue", textDecoration: "underline" }}>
                <i>Nature</i>
              </a>
            </p>
            <p
              className={styles.paragraph}
              style={{ marginTop: "0.5vh", cursor: "pointer" }}
              onClick={() => handleLinkClick(DBS_PAPER_URL)}
            >
              Chang, A., Berges, V., <b>Chung, S.</b> et al. High-Frequency
              Stimulation at the Subthalamic Nucleus Suppresses Excessive
              Self-Grooming in Autism-Like Mouse Models.{" "}
              <i>Neuropsychopharmacology</i> <b>41</b>, 1813–1821 (2016).{" "}
              <a style={{ color: "blue", textDecoration: "underline" }}>
                <i>Nature</i>
              </a>
            </p>
            <div style={{ height: "15vh" }} />
          </span>
        </div>
      </main>
    </ScrollToTop>
  );
}

export default NeuroResearch;
