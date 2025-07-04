import styled from "styled-components";
import {
  colors,
  spacing,
  radius,
  shadows,
  transitions,
} from "../../theme/globalStyles";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${colors.background};
  padding: ${spacing.md};
`;

export const AuthCard = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: ${radius.md};
  box-shadow: ${shadows.card};
  padding: ${spacing.xl};
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const AuthTitle = styled.h1`
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
  font-size: 2em;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const AuthInput = styled.input`
  padding: ${spacing.md};
  border: 1px solid ${colors.border};
  border-radius: ${radius.sm};
  font-size: 1em;
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

export const AuthButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: ${spacing.md};
  border-radius: ${radius.sm};
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.base};

  &:hover {
    background-color: ${colors.primaryLight};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.9em;
  text-align: left;
`;
