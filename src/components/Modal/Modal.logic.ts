import { useModalContext } from "../../hooks/useModalContext";
import { useModalParams } from "../../hooks/useModalParams";

export const ModalLogic = () => {
  const { modalState } = useModalContext();
  const { closeModalWithParams } = useModalParams();

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModalWithParams();
    }
  };

  const isEditing = modalState.card !== null;
  const title = isEditing ? "Edit Card" : "Add New Card";
  const isOpen = modalState.isOpen && modalState.section;

  return {
    modalState,
    handleOverlayClick,
    closeModalWithParams,
    title,
    isOpen,
  };
};
