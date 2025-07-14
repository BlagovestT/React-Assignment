import { ModalLogic } from "./Modal.logic";
import { CardForm } from "../CardForm/CardForm";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
} from "./Modal.styles";

export const Modal: React.FC = () => {
  const {
    modalState,
    handleOverlayClick,
    closeModalWithParams,
    title,
    isOpen,
  } = ModalLogic();

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={closeModalWithParams}>×</CloseButton>
        </ModalHeader>

        <ModalContent>
          <CardForm section={modalState.section!} />
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
