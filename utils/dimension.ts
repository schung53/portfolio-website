const PHOTO_DIMENSIONS: Map<string, number[]> = new Map([
  ["jhmi-photo.png", [1400, 933]],
  ["neurogenesis.png", [984, 413]],
  ["crispr.jpg", [1921, 1081]],
  ["stn-dbs.png", [978, 504]],
  ["status-share-diagram.png", [4026, 2336]],
  ["status-share-0.png", [3006, 1636]],
  ["status-share-1.png", [1527, 834]],
  ["status-share-2.png", [3002, 1644]],
  ["status-share-4.png", [391, 791]],
  ["status-share-5.png", [385, 788]],
  ["status-share-6.png", [385, 790]],
]);

const DESKTOP_WIDTH_SCALE = 45;
const MOBILE_WIDTH_SCALE = 80;

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
    return `${MOBILE_WIDTH_SCALE}vw`;
  }
  return `${DESKTOP_WIDTH_SCALE}vw`;
};

const getNewHeight = (photo: string, isMobile: boolean): string => {
  const width = getWidth(photo);
  const height = getHeight(photo);
  let newWidth = DESKTOP_WIDTH_SCALE;
  if (isMobile) {
    newWidth = MOBILE_WIDTH_SCALE;
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
