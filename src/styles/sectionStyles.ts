import styled from "styled-components";
import { colors, spacing, fontSize } from "../theme/globalStyles";

type ContainerVariant = "accent" | "half-width";

type SectionContainerProps = {
  variant?: ContainerVariant;
};

export const SectionContainer = styled.section<SectionContainerProps>`
  padding: ${spacing.xl};

  ${(props) => {
    switch (props.variant) {
      case "accent":
        return `background-color: ${colors.accent};`;
      case "half-width":
        return `width: 50%;`;
    }
  }}
  @media (min-width: 2000px) {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    padding: ${spacing.lg};

    ${(props) =>
      props.variant === "half-width" &&
      `
      width: 100%;
    `}
  }

  @media (max-width: 768px) {
    padding: ${spacing.md};
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: ${spacing.md};

  @media (max-width: 768px) {
    margin-bottom: ${spacing.sm};
  }
`;

export const SectionHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${spacing.md};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.sm};
  }
`;

export const SectionSubtitle = styled.h3`
  font-size: ${fontSize.subHeading};
  color: ${colors.mutedText};
  font-weight: 300;
  margin-bottom: ${spacing.xs};

  @media (max-width: 768px) {
    font-size: ${fontSize.mobile.subHeading};
    margin-bottom: ${spacing.xs};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${fontSize.heading};
  color: ${colors.text};
  margin-bottom: ${spacing.md};

  @media (max-width: 768px) {
    font-size: ${fontSize.mobile.heading};
    margin-bottom: ${spacing.sm};
  }
`;

// Grid Variants
type GridVariant = "wrap" | "column" | "row";

type SectionGridProps = {
  variant?: GridVariant;
};

export const SectionGrid = styled.div<SectionGridProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.md};

  ${(props) => {
    switch (props.variant) {
      case "column":
        return `
          flex-direction: column;
          flex-wrap: wrap;
        `;
      case "row":
        return `
          flex-direction: row;
          flex-wrap: wrap;
        `;
      case "wrap":
    }
  }}

  @media (max-width: 1024px) {
    gap: ${spacing.sm};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing.sm};
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: ${spacing.xl};
  font-size: ${fontSize.text};
  color: ${colors.mutedText};

  @media (max-width: 768px) {
    padding: ${spacing.lg};
    font-size: ${fontSize.text};
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: ${spacing.xl};
  font-size: ${fontSize.text};
  color: ${colors.mutedText};

  @media (max-width: 768px) {
    padding: ${spacing.lg};
    font-size: ${fontSize.text};
  }
`;
