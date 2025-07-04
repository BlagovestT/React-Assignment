import { Card } from "../Card/Card";
import { AddButton } from "../Button/AddButton";
import { NewsLogic } from "./newsLogic";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContent,
  SectionSubtitle,
  SectionTitle,
  SectionGrid,
  ErrorMessage,
} from "../../styles/sectionStyles";

export const News: React.FC = () => {
  const { news } = NewsLogic();

  return (
    <SectionContainer variant="accent">
      <SectionHeader>
        <SectionHeaderContent>
          <div>
            <SectionSubtitle>LATEST NEWS</SectionSubtitle>
            <SectionTitle>Stay updated with industry news</SectionTitle>
          </div>
          <AddButton section="news" label="Add News" />
        </SectionHeaderContent>
      </SectionHeader>

      {news.length === 0 ? (
        <ErrorMessage>
          No news available. Click "Add News" to create your first article.
        </ErrorMessage>
      ) : (
        <SectionGrid variant="wrap">
          {news.map((article) => (
            <Card key={article.id} card={article} section="news" />
          ))}
        </SectionGrid>
      )}
    </SectionContainer>
  );
};
