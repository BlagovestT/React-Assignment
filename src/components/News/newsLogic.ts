import { useAppContext } from "../../hooks/useAppContext";

export const NewsLogic = () => {
  const { data } = useAppContext();

  return {
    news: data.news,
  };
};
