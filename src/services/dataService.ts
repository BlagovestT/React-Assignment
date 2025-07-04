import type { AppData } from "../types/appDataType";
import data from "../data/data.json";

export const fetchAppData = async (): Promise<AppData> => {
  return new Promise<AppData>((resolve) => {
    setTimeout(() => {
      resolve(data as AppData);
    }, 2000);
  });
};
