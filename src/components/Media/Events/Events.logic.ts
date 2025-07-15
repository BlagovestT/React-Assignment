import { useAppContext } from "../../../hooks/useAppContext";

export const EventsLogic = () => {
  const { data } = useAppContext();

  return {
    events: data.events,
  };
};
