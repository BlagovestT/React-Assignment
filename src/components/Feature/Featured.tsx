import { Card } from "../Card/Card";
import Section from "../Section/Section";
import { FeaturedLogic } from "./Featured.logic";

export const Featured: React.FC = () => {
  const { featured } = FeaturedLogic();

  return (
    <Section
      subTitle="Featured Label"
      title="Featured"
      gridVariant="row"
      btnLabel="Add Feature"
      section="featured"
      sectionVariant="accent"
    >
      {featured.map((item, index) => (
        <Card
          key={item.id}
          card={item}
          section="featured"
          variant={index % 2 === 0 ? "wide" : "wide-reversed"}
        />
      ))}
    </Section>
  );
};
