import { useState, useEffect, useCallback } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { useModalContext } from "../../hooks/useModalContext";
import { useModalParams } from "../../hooks/useModalParams";
import type { Card, CardFormData } from "../../types/cardType";
import type { AppData } from "../../types/appDataType";

const DEFAULT_FORM_DATA: CardFormData = {
  title: "",
  description: "",
  ctaButtonLabel: "",
  imageUrl: "",
  subtitle: "",
};

export const CardFormLogic = (section: keyof AppData) => {
  const { data, setData } = useAppContext();
  const { modalState } = useModalContext();
  const { closeModalWithParams } = useModalParams();

  const [formData, setFormData] = useState<CardFormData>(DEFAULT_FORM_DATA);
  const [errors, setErrors] = useState<Partial<CardFormData>>({});

  useEffect(() => {
    if (modalState.card) {
      const newFormData = {
        title: modalState.card.title,
        description: modalState.card.description,
        ctaButtonLabel: modalState.card.ctaButtonLabel,
        imageUrl: modalState.card.imageUrl || "",
        subtitle: modalState.card.subtitle || "",
      };

      setFormData((prev) =>
        JSON.stringify(prev) !== JSON.stringify(newFormData)
          ? newFormData
          : prev
      );
    } else {
      setFormData(DEFAULT_FORM_DATA);
    }
  }, [modalState.card]);

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<CardFormData> = {};
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name as keyof CardFormData]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors]
  );

  const generateNewId = useCallback((): number => {
    const sectionData = data[section];
    const allIds = sectionData.map((card) => card.id);
    return allIds.length > 0 ? Math.max(...allIds) + 1 : 1;
  }, [data, section]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      const isEditing = modalState.card !== null;

      if (isEditing) {
        const updatedSectionData = data[section].map((card) =>
          card.id === modalState.card!.id
            ? { ...modalState.card!, ...formData }
            : card
        );

        setData({
          ...data,
          [section]: updatedSectionData,
        });
      } else {
        const newCard: Card = {
          id: generateNewId(),
          title: formData.title || undefined,
          description: formData.description || undefined,
          ctaButtonLabel: formData.ctaButtonLabel || undefined,
          imageUrl: formData.imageUrl || undefined,
          subtitle: formData.subtitle || undefined,
        };

        setData({
          ...data,
          [section]: [...data[section], newCard],
        });
      }
      closeModalWithParams();
    },
    [
      validateForm,
      modalState.card,
      data,
      section,
      setData,
      formData,
      generateNewId,
      closeModalWithParams,
    ]
  );

  const handleCancel = useCallback(() => {
    closeModalWithParams();
  }, [closeModalWithParams]);

  return {
    formData,
    errors,
    modalState,
    handleInputChange,
    handleSubmit,
    handleCancel,
  };
};
