import { Card } from "../../Card/Card";
import Section from "../../Section/Section";
import { PodcastLogic } from "./Podcast.logic";

export const Podcast: React.FC = () => {
  const { podcasts } = PodcastLogic();

  return (
    <Section
      subTitle="UPCOMING PODCAST'S"
      title="Check our agricultural podcasts"
      gridVariant="wrap"
      btnLabel="Add Podcast"
      section="podcast"
      sectionVariant="half-width"
    >
      {podcasts.map((podcast) => (
        <Card
          key={podcast.id}
          card={podcast}
          section="podcast"
          variant="square"
        />
      ))}
    </Section>
  );
};
