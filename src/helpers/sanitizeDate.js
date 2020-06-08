import { SPACE } from './stringSanitizer';

const sanizeDate = (serverTime) => {
  const tempValue = new Date(serverTime).toUTCString().split(SPACE);
  const polishedTime = `${tempValue[1]}-${tempValue[2]}-${tempValue[3]}`;
  return polishedTime;
};

export const plainDate = (serverTime) => {
  return new Date(serverTime).toLocaleDateString();
};

export default sanizeDate;
