import styled from "styled-components";
import {
  colors,
  spacing,
  radius,
  shadows,
  transitions,
  fontSize,
} from "../../theme/globalStyles";
import type { CardVariant } from "../../types/cardType";

type StyledProps = {
  variant?: CardVariant;
};

export const CardContainer = styled.div<StyledProps>`
  display: flex;
  background-color: ${colors.cardBackground};
  border: 1px solid ${colors.border};
  border-radius: ${radius.md};
  box-shadow: ${shadows.card};
  transition: ${transitions.base};

  /* Variant-based styling */
  ${(props) => {
    switch (props.variant) {
      case "long":
        return `
          flex-direction: column;
          width: 230px;
          height: 330px;
          
          @media (max-width: 768px) {
            width: 100%;
            height: auto;
            min-height: 280px;
          }
        `;
      case "wide":
        return `
          flex-direction: row;
          height: 280px;
          max-width: 700px;
          
          @media (max-width: 1024px) {
            height: 250px;
            max-width: 600px;
          }
          
          @media (max-width: 768px) {
            flex-direction: column;
            height: auto;
            max-width: 100%;
            width: 100%;
          }
        `;
      case "wide-reversed":
        return `
          flex-direction: row-reverse;
          height: 280px;
          max-width: 700px;
          
          @media (max-width: 1024px) {
            height: 250px;
            max-width: 600px;
          }
          
          @media (max-width: 768px) {
            flex-direction: column;
            height: auto;
            max-width: 100%;
            width: 100%;
          }
        `;
      case "square":
        return `
          flex-direction: column;
          width: 280px;
          height: 280px;
          
          @media (max-width: 768px) {
            width: 100%;
            height: auto;
            min-height: 250px;
          }
        `;
      default:
        return `
          flex-direction: column;
          width: 230px;
          height: 330px;
          
          @media (max-width: 768px) {
            width: 100%;
            height: auto;
            min-height: 280px;
          }
        `;
    }
  }}

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: ${transitions.base};
  }
`;

export const CardImage = styled.img<StyledProps>`
  object-fit: cover;

  ${(props) => {
    switch (props.variant) {
      case "long":
        return `
          width: 100%;
          height: 120px;
          border-radius: ${radius.md} ${radius.md} 0 0;
          
          @media (max-width: 768px) {
            height: 100px;
          }
        `;
      case "wide":
        return `
          width: 200px;
          height: 130px;
          border-radius: ${radius.md};
          margin: ${spacing.sm};
          
          @media (max-width: 1024px) {
            width: 180px;
            height: 120px;
          }
          
          @media (max-width: 768px) {
            width: 100%;
            height: 120px;
            margin: 0;
            border-radius: ${radius.md} ${radius.md} 0 0;
          }
        `;
      case "wide-reversed":
        return `
          width: 200px;
          height: 130px;
          border-radius: ${radius.md};
          margin: ${spacing.sm};
          
          @media (max-width: 1024px) {
            width: 180px;
            height: 120px;
          }
          
          @media (max-width: 768px) {
            width: 100%;
            height: 120px;
            margin: 0;
            border-radius: ${radius.md} ${radius.md} 0 0;
          }
        `;
      case "square":
        return `
          width: 100%;
          height: 140px;
          border-radius: ${radius.md} ${radius.md} 0 0;
          
          @media (max-width: 768px) {
            height: 120px;
          }
        `;
      default:
        return `
          width: 100%;
          height: 120px;
          border-radius: ${radius.md} ${radius.md} 0 0;
          
          @media (max-width: 768px) {
            height: 100px;
          }
        `;
    }
  }}
`;

export const CardContent = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${(props) => {
    switch (props.variant) {
      case "long":
        return `
          padding: ${spacing.sm};
          
          @media (max-width: 768px) {
            padding: ${spacing.sm};
          }
        `;
      case "wide":
      case "wide-reversed":
        return `
          padding: ${spacing.md};
          justify-content: center;
          
          @media (max-width: 768px) {
            padding: ${spacing.sm};
            justify-content: flex-start;
          }
        `;
      case "square":
        return `
          padding: ${spacing.md};
          justify-content: center;
          text-align: center;
          
          @media (max-width: 768px) {
            padding: ${spacing.sm};
            text-align: left;
          }
        `;
      default:
        return `
          padding: ${spacing.sm};
          
          @media (max-width: 768px) {
            padding: ${spacing.sm};
          }
        `;
    }
  }}
`;

export const CardTitle = styled.h4`
  font-size: ${fontSize.subHeading};
  margin-bottom: ${spacing.xs};
  color: ${colors.text};

  @media (max-width: 768px) {
    font-size: ${fontSize.mobile.subHeading};
  }
`;

export const CardSubtitle = styled.h5`
  font-size: ${fontSize.text};
  color: ${colors.mutedText};
  font-weight: 500;
  margin-bottom: ${spacing.xs};

  @media (max-width: 768px) {
    font-size: ${fontSize.mobile.text};
  }
`;

export const CardDescription = styled.p`
  font-size: ${fontSize.small};
  color: ${colors.mutedText};
  line-height: 1.4;
  flex: 1;
  margin-bottom: ${spacing.sm};

  @media (max-width: 768px) {
    font-size: ${fontSize.mobile.small};
    line-height: 1.3;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.xs};
  }
`;

export const CardLink = styled.span`
  color: ${colors.link};
  font-weight: 500;
  font-size: ${fontSize.small};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: ${fontSize.mobile.small};
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: 1px solid ${colors.border};
  color: ${colors.mutedText};
  border-radius: ${radius.sm};
  font-size: ${fontSize.tiny};
  cursor: pointer;
  margin-left: ${spacing.xs};
  transition: ${transitions.base};
  padding: ${spacing.xs};

  &:hover {
    background-color: ${colors.accent};
    color: ${colors.primary};
    border-color: ${colors.primary};
  }

  @media (max-width: 768px) {
    padding: ${spacing.xs};
    margin-left: ${spacing.xs};
  }

  @media (max-width: 480px) {
    margin-left: 0;
  }
`;
