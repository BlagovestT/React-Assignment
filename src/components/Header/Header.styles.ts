import styled from "styled-components";
import { colors, spacing, radius, fontSize } from "../../theme/globalStyles";

export const HeaderContainer = styled.header`
  background-color: ${colors.primary};
  color: white;
  padding: ${spacing.md};
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

export const LogoIcon = styled.i`
  font-size: ${fontSize.heading};
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};

  @media (max-width: 768px) {
    gap: ${spacing.sm};
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  gap: ${spacing.md};
`;

export const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: ${radius.sm};
  cursor: pointer;

  &:hover {
    color: ${colors.mutedText};
  }
`;
