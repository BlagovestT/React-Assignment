import styled from "styled-components";
import { colors, spacing, radius, fontSize } from "../../theme/globalStyles";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.background};
  width: 13%;
  height: auto;
  padding: ${spacing.md};

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
    padding: ${spacing.sm};
  }

  @media (max-width: 768px) {
    padding: ${spacing.xs};
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 15px;
    justify-content: center;
  }
`;

export const SidebarLink = styled.a`
  text-decoration: none;
  color: ${colors.text};
  font-weight: 500;
  padding: 12px;
  border-radius: ${radius.md};
  font-size: ${fontSize.bigText};

  &:hover {
    background-color: #b3d8fd;
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: ${fontSize.mobile.text};
    padding: 8px;
  }
`;
