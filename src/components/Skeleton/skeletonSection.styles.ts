import styled from "styled-components";
import { spacing } from "../../theme/globalStyles";

export const SkeletonSectionContainer = styled.section`
  padding: ${spacing.xl};

  @media (max-width: 768px) {
    padding: ${spacing.md};
  }
`;

export const SkeletonContent = styled.div`
  max-width: 100%;

  /* Responsive skeleton blocks */
  > div:last-child {
    @media (max-width: 768px) {
      flex-direction: column;

      > * {
        width: 100% !important;
        height: 150px !important;
      }
    }
  }
`;
