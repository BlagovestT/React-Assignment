import styled from "styled-components";
import {
  colors,
  spacing,
  radius,
  shadows,
  transitions,
  fontSize,
} from "../../theme/globalStyles";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: ${radius.md};
  box-shadow: ${shadows.card};
  max-width: 600px;
  max-height: 80vh;
  width: 90%;
  overflow-y: auto;
  animation: slideIn 0.2s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.md};
  border-bottom: 1px solid ${colors.border};
`;

export const ModalTitle = styled.h2`
  color: ${colors.text};
  font-size: ${fontSize.heading};
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  color: ${colors.mutedText};
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius.sm};
  transition: ${transitions.base};

  &:hover {
    background-color: ${colors.accent};
    color: ${colors.text};
  }
`;

export const ModalContent = styled.div`
  padding: ${spacing.md};
`;
