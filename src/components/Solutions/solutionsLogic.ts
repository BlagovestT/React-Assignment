import { useAppContext } from "../../hooks/useAppContext";

export const SolutionsLogic = () => {
  const { data } = useAppContext();

  return {
    solutions: data.solutions,
  };
};
