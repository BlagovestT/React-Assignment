import { Card } from "../Card/Card";
import { AddButton } from "../Button/AddButton";
import { SolutionsLogic } from "./solutionsLogic";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContent,
  SectionSubtitle,
  SectionTitle,
  SectionGrid,
  ErrorMessage,
} from "../../styles/sectionStyles";

export const Solutions: React.FC = () => {
  const { solutions } = SolutionsLogic();

  return (
    <SectionContainer variant="accent">
      <SectionHeader>
        <SectionHeaderContent>
          <div>
            <SectionSubtitle>ARAY SOLUTIONS</SectionSubtitle>
            <SectionTitle>Access our full range of solutions</SectionTitle>
          </div>
          <AddButton section="solutions" label="Add Solution" />
        </SectionHeaderContent>
      </SectionHeader>

      {solutions.length === 0 ? (
        <ErrorMessage>
          No solutions available. Click "Add Solution" to create your first
          card.
        </ErrorMessage>
      ) : (
        <SectionGrid variant="wrap">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              card={solution}
              section="solutions"
              variant="long"
            />
          ))}
        </SectionGrid>
      )}
    </SectionContainer>
  );
};
