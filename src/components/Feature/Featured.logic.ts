import { useAppContext } from "../../hooks/useAppContext";

export const FeaturedLogic = () => {
  const { data } = useAppContext();

  return {
    featured: data.featured,
  };
};
