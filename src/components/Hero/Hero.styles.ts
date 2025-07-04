import styled from "styled-components";
import { spacing, fontSize } from "../../theme/globalStyles";
import HeroBgImage from "../../assets/hero-bg.jpg";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.md};
  background-image: url(${HeroBgImage});
  background-size: cover;
  background-position: center;
  color: white;
  height: 300px;
  justify-content: center;

  @media (max-width: 768px) {
    height: 180px;
    padding: ${spacing.sm};
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${fontSize.heading};
  margin-bottom: ${spacing.sm};

  @media (max-width: 480px) {
    font-size: ${fontSize.subHeading};
  }
`;

export const HeroDescription = styled.p`
  font-weight: 100;
  letter-spacing: 0.5px;
`;
