import { useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "./useAppContext";
import { useModalContext } from "./useModalContext";
import type { AppData } from "../types/appDataType";
import type { Card } from "../types/cardType";

export const useModalParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useAppContext();
  const { modalState, openModal, closeModal } = useModalContext();

  // Track previous params to avoid unnecessary effects
  const prevParamsRef = useRef<string>("");

  useEffect(() => {
    const section = searchParams.get("section") as keyof AppData | null;
    const cardId = searchParams.get("cardId");
    const currentParams = `${section}-${cardId}`;

    if (currentParams === prevParamsRef.current) return;
    prevParamsRef.current = currentParams;

    if (!section || !(section in data) || !cardId) {
      if (modalState.isOpen) closeModal();
      return;
    }

    const isNew = cardId === "new";
    const currentCardId = isNew ? null : Number(cardId);
    const modalCardId = modalState.card?.id ?? null;

    if (
      modalState.isOpen &&
      modalState.section === section &&
      modalCardId === currentCardId
    ) {
      return;
    }

    if (isNew) {
      openModal(undefined, section);
    } else {
      const card = data[section].find((c) => c.id === currentCardId);
      if (card) openModal(card, section);
    }
  }, [
    searchParams,
    data,
    modalState.isOpen,
    modalState.section,
    modalState.card,
    openModal,
    closeModal,
  ]);

  const openModalWithParams = useCallback(
    (card?: Card, section?: keyof AppData) => {
      if (!section) return;
      const params = new URLSearchParams(searchParams);
      params.set("section", section);
      params.set("cardId", card?.id?.toString() || "new");
      setSearchParams(params);
    },
    [searchParams, setSearchParams]
  );

  const closeModalWithParams = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("section");
    params.delete("cardId");
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return {
    openModalWithParams,
    closeModalWithParams,
  };
};
