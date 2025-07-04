import { useCallback } from "react";
import type { Card as CardType } from "../../types/cardType";
import type { AppData } from "../../types/appDataType";
import { useAppContext } from "../../hooks/useAppContext";
import { useModalParams } from "../../hooks/useModalParams";

export const CardLogic = (card: CardType, section: keyof AppData) => {
  const { data, setData } = useAppContext();
  const { openModalWithParams } = useModalParams();

  const handleEdit = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      openModalWithParams(card, section);
    },
    [card, section, openModalWithParams]
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      const updatedSectionData = data[section].filter(
        (existingCard) => existingCard.id !== card.id
      );
      setData({
        ...data,
        [section]: updatedSectionData,
      });
    },
    [card.id, section, data, setData]
  );

  return {
    handleEdit,
    handleDelete,
  };
};
