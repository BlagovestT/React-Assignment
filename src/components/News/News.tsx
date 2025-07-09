import { Card } from "../Card/Card";
import Section from "../Section/Section";
import { NewsLogic } from "./newsLogic";

export const News: React.FC = () => {
  const { news } = NewsLogic();

  return (
    <Section
      subTitle="Latest Updates"
      title="News"
      gridVariant="wrap"
      btnLabel="Add News"
      section="news"
      sectionVariant="accent"
    >
      {news.map((article) => (
        <Card key={article.id} card={article} section="news" />
      ))}
    </Section>
  );
};
