import moment from "moment";

export const capitalizeFirstLetter = (text: string) => {
  return text?.charAt(0)?.toUpperCase() + text?.slice(1);
};

export const calculateMomentAgo = (date: string) => {
  return moment.utc(date).local().startOf("seconds").fromNow();
};
