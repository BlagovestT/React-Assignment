import { Card } from "../Card/Card";
import Section from "../Section/Section";
import { SolutionsLogic } from "./solutionsLogic";

export const Solutions: React.FC = () => {
  const { solutions } = SolutionsLogic();

  return (
    <Section
      subTitle="YARA SOLUTIONS"
      title="Access our full range of solutions"
      gridVariant="wrap"
      btnLabel="Add Solution"
      section="solutions"
      sectionVariant="accent"
    >
      {solutions.map((solution) => (
        <Card
          key={solution.id}
          card={solution}
          section="solutions"
          variant="long"
        />
      ))}
    </Section>
  );
};
