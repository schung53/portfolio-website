import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./projects-item.module.css";
import { WHITE_TEXT_THEMES } from "@/utils/color";
import { MediaType } from "./enum";

function ProjectsItem({ item, mediaType, color }: any) {
  const [textColor, setTextColor] = useState("#000000");
  const [holePunchDiameter, setHolePunchDiameter] = useState("");

  useEffect(() => {
    if (WHITE_TEXT_THEMES.includes(color)) {
      setTextColor("#FADFB5");
    } else {
      setTextColor("#000000");
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

  return (
    <div
      className={styles.itemContainer}
      style={{ backgroundColor: color, color: textColor }}
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
              <p className={styles.title}>{item.title}</p>
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
              <p className={styles.title}>{item.title}</p>
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
