const PHOTO_DIMENSIONS: Map<string, number[]> = new Map([
  ["jhmi-photo.png", [1400, 933]],
  ["neurogenesis.png", [984, 413]],
  ["crispr.jpg", [1921, 1081]],
  ["stn-dbs.png", [978, 504]],
]);

const getDimension = (photo: string, index: number): number => {
  if (PHOTO_DIMENSIONS.get(photo)) {
    const dimensions = PHOTO_DIMENSIONS.get(photo);
    return dimensions ? dimensions[index] : 100;
  }
  return 100;
};

export const getWidth = (photo: string): number => {
  return getDimension(photo, 0);
};

export const getHeight = (photo: string): number => {
  return getDimension(photo, 1);
};

const getNewWidth = (isMobile: boolean): string => {
  if (isMobile) {
    return "75vw";
  }
  return "45vw";
};

const getNewHeight = (photo: string, isMobile: boolean): string => {
  const width = getWidth(photo);
  const height = getHeight(photo);
  let newWidth = 45;
  if (isMobile) {
    newWidth = 75;
  }
  const newHeight = (height / width) * newWidth;
  return `${newHeight}vw`;
};

export const getNewDimensions = (photo: string, isMobile: boolean): any => {
  return {
    width: getNewWidth(isMobile),
    height: getNewHeight(photo, isMobile),
  };
};
