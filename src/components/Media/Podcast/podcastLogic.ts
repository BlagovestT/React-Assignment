import { useAppContext } from "../../../hooks/useAppContext";

export const PodcastLogic = () => {
  const { data } = useAppContext();

  return {
    podcasts: data.podcast,
  };
};
