import { createContext, useState, useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import type { AppData } from "../types/appDataType";
import type { Card, ModalState } from "../types/cardType";

type ModalContextType = {
  modalState: ModalState;
  openModal: (card?: Card, section?: keyof AppData) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    card: null,
    section: undefined,
  });

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

  const value = useMemo(
    () => ({
      modalState,
      openModal,
      closeModal,
    }),
    [modalState, openModal, closeModal]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export { ModalContext };
