import styled from "styled-components";
import {
  colors,
  spacing,
  radius,
  transitions,
  fontSize,
} from "../../theme/globalStyles";

export const FormContainer = styled.div`
  padding: ${spacing.md};
`;

export const FormGroup = styled.div`
  margin-bottom: ${spacing.md};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${spacing.xs};
  font-weight: 500;
  color: ${colors.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${spacing.sm};
  border: 1px solid ${colors.border};
  border-radius: ${radius.sm};
  font-size: ${fontSize.text};
  transition: ${transitions.base};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.accent};
  }

  &::placeholder {
    color: ${colors.mutedText};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${spacing.sm};
  border: 1px solid ${colors.border};
  border-radius: ${radius.sm};
  font-size: ${fontSize.text};
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: ${transitions.base};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.accent};
  }

  &::placeholder {
    color: ${colors.mutedText};
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.sm};
  margin-top: ${spacing.lg};
  padding-top: ${spacing.md};
  border-top: 1px solid ${colors.border};
`;

type ActionButtonProps = {
  variant?: "primary" | "secondary";
};

export const ActionButton = styled.button<ActionButtonProps>`
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${radius.sm};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.base};
  border: 1px solid;

  ${(props) =>
    props.variant === "secondary"
      ? `
    background-color: transparent;
    color: ${colors.mutedText};
    border-color: ${colors.border};
    
    &:hover {
      background-color: ${colors.accent};
      color: ${colors.text};
      border-color: ${colors.primary};
    }
  `
      : `
    background-color: ${colors.primary};
    color: white;
    border-color: ${colors.primary};
    
    &:hover {
      background-color: ${colors.primaryLight};
      border-color: ${colors.primaryLight};
    }
  `}
`;

export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: ${fontSize.small};
  margin-top: ${spacing.xs};
  display: block;
`;
