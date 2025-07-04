import { createContext, useState, useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import type { AppData } from "../types/appDataType";
import type { Card, ModalState } from "../types/cardType";

type AppContextType = {
  // Data from JSON
  data: AppData;
  setData: (data: AppData) => void;

  modalState: ModalState;
  openModal: (card?: Card, section?: keyof AppData) => void;
  closeModal: () => void;

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

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    card: null,
    section: undefined,
  });

  const [isLoading, setIsLoading] = useState(false);

  const openModal = useCallback((card?: Card, section?: keyof AppData) => {
    setModalState({
      isOpen: true,
      card: card || null,
      section: section,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState({
      isOpen: false,
      card: null,
      section: undefined,
    });
  }, []);

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
      modalState,
      openModal,
      closeModal,
      isLoading,
      setIsLoading,
      addCard,
      updateCard,
      deleteCard,
    }),
    [
      data,
      modalState,
      openModal,
      closeModal,
      isLoading,
      addCard,
      updateCard,
      deleteCard,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext };
