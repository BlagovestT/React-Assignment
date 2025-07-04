import styled from "styled-components";
import { spacing } from "../../theme/globalStyles";

export const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > section {
    flex: 1;
    min-width: 500px;
  }

  @media (min-width: 2000px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    > section {
      flex: 100%;
      min-width: 100%;
    }
  }

  @media (max-width: 768px) {
    > section {
      padding: ${spacing.md};
    }
  }
`;
