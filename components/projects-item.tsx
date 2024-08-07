import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./projects-item.module.css";
import { WHITE_TEXT_THEMES } from "@/utils/color";
import { MediaType } from "./enum";

function ProjectsItem({ item, mediaType, color }: any) {
  const [textColor, setTextColor] = useState("#000000");
  const [holePunchDiameter, setHolePunchDiameter] = useState("");
  const [iconFile, setIconFile] = useState("/link-out-icon.svg");

  useEffect(() => {
    if (WHITE_TEXT_THEMES.includes(color)) {
      setTextColor("#FADFB5");
      setIconFile("/link-out-icon-light.svg");
    } else {
      setTextColor("#000000");
      setIconFile("/link-out-icon.svg");
    }
  }, [color]);

  useEffect(() => {
    if (mediaType === MediaType.Mobile) {
      setHolePunchDiameter("12vh");
    } else if (mediaType === MediaType.Tablet) {
      setHolePunchDiameter("14vh");
    } else {
      setHolePunchDiameter("18vh");
    }
  }, [mediaType]);

  const validateDescription = (description: string) => {
    if (description.includes("Nature")) {
      const splitDescription = description.split("Nature");
      return (
        <>
          {splitDescription[0]}
          <i>Nature</i>
          {splitDescription[1]}
        </>
      );
    }
    return description;
  };

  const adjust = (dimension: number) => {
    if (mediaType === MediaType.Mobile) {
      return dimension * 0.7;
    } else if (mediaType === MediaType.Tablet) {
      return dimension * 0.9;
    }
    return dimension;
  };

  const handleClick = () => {
    history.pushState({}, "", "/?tab=3");
    window.location.href = item.route;
  };

  return (
    <div
      className={styles.itemContainer}
      style={{ backgroundColor: color, color: textColor }}
      onClick={handleClick}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          className={styles.holePunch}
          style={{ width: holePunchDiameter, height: holePunchDiameter }}
        >
          <Image
            src={item.image}
            alt="Project Logo"
            width={adjust(item.dimensions[0])}
            height={adjust(item.dimensions[1])}
          />
        </div>
        {mediaType === MediaType.Mobile && (
          <div className={styles.mobileTitleContainer}>
            <span>
              <p className={styles.title}>
                {item.title}&nbsp;
                <Image
                  className={styles.linkIcon}
                  src={iconFile}
                  alt="Link out"
                  width={10}
                  height={10}
                />
              </p>
            </span>
            <span>
              <p className={styles.subtitle}>{`${item.date} • ${item.type}`}</p>
            </span>
          </div>
        )}
      </div>
      <div className={styles.textContainer}>
        {mediaType !== MediaType.Mobile && (
          <>
            <span>
              <p className={styles.title}>
                {item.title}&nbsp;
                <Image
                  className={styles.linkIcon}
                  src={iconFile}
                  alt="Link out"
                  width={20}
                  height={20}
                />
              </p>
            </span>
            <span>
              <p className={styles.subtitle}>{`${item.date} • ${item.type}`}</p>
            </span>
          </>
        )}
        <p className={styles.description}>
          {validateDescription(item.description)}
        </p>
      </div>
    </div>
  );
}

export default ProjectsItem;
