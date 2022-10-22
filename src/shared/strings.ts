import moment from "moment";
import { IBooking } from "typings";

export const capitalizeFirstLetter = (text: string) => {
  return text?.charAt(0)?.toUpperCase() + text?.slice(1);
};

export const calculateMomentAgo = (date: string) => {
  return moment.utc(date).local().startOf("seconds").fromNow();
};

export const checkBookStatus = (item: IBooking): string => {
  return item?.status === "completed"
    ? "green"
    : item?.status === "cancelled"
    ? "red"
    : "blue";
};

export const randomizeNumber = (items: any[]) => {
  return items[Math.floor(Math.random() * items.length)];
};
