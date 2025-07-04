import { useEffect } from "react";
import { useAppContext } from "./useAppContext";
import { fetchAppData } from "../services/dataService";

export const useAppData = () => {
  const { data, setData, isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const appData = await fetchAppData();
        setData(appData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if we don't have any data
    const hasNoData = Object.values(data).every(
      (section) => section.length === 0
    );
    if (hasNoData) {
      loadData();
    }
  }, [data, setData, setIsLoading]);

  return { data, isLoading };
};
