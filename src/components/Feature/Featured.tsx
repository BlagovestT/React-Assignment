import { FeaturedLogic } from "./featuredLogic";
import { Card } from "../Card/Card";
import { AddButton } from "../Button/AddButton";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContent,
  SectionSubtitle,
  SectionTitle,
  SectionGrid,
  ErrorMessage,
} from "../../styles/sectionStyles";

export const Featured: React.FC = () => {
  const { featured } = FeaturedLogic();

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionHeaderContent>
          <div>
            <SectionSubtitle>Featured Label</SectionSubtitle>
            <SectionTitle>Featured</SectionTitle>
          </div>
          <AddButton section="featured" label="Add Feature" />
        </SectionHeaderContent>
      </SectionHeader>

      {featured.length === 0 ? (
        <ErrorMessage>
          No featured items available. Click "Add Feature" to create your first
          feature.
        </ErrorMessage>
      ) : (
        <SectionGrid variant="row">
          {featured.map((item, index) => (
            <Card
              key={item.id}
              card={item}
              section="featured"
              variant={index % 2 === 0 ? "wide" : "wide-reversed"}
            />
          ))}
        </SectionGrid>
      )}
    </SectionContainer>
  );
};
