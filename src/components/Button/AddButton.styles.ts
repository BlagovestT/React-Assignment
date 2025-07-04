import styled from "styled-components";
import { colors, spacing, radius, transitions } from "../../theme/globalStyles";

export const StyledAddButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${radius.sm};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.base};
  white-space: nowrap;

  &:hover {
    background-color: ${colors.primaryLight};
  }
`;
