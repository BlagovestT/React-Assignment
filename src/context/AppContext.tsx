import { createContext, useState, useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import type { AppData } from "../types/appDataType";
import type { Card } from "../types/cardType";

type AppContextType = {
  // Data from JSON
  data: AppData;
  setData: (data: AppData) => void;

  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // CRUD operations
  addCard: (card: Card, section: keyof AppData) => void;
  updateCard: (card: Card, section: keyof AppData) => void;
  deleteCard: (cardId: number, section: keyof AppData) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [data, setData] = useState<AppData>({
    solutions: [],
    featured: [],
    events: [],
    podcast: [],
    news: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const addCard = useCallback((card: Card, section: keyof AppData) => {
    setData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], card],
    }));
  }, []);

  const updateCard = useCallback((card: Card, section: keyof AppData) => {
    setData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((existingCard) =>
        existingCard.id === card.id ? card : existingCard
      ),
    }));
  }, []);

  const deleteCard = useCallback((cardId: number, section: keyof AppData) => {
    setData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((card) => card.id !== cardId),
    }));
  }, []);

  const value = useMemo(
    () => ({
      data,
      setData,
      isLoading,
      setIsLoading,
      addCard,
      updateCard,
      deleteCard,
    }),
    [
      data,
      isLoading,
      addCard,
      updateCard,
      deleteCard,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext };
