import { Card } from "../../Card/Card";
import { AddButton } from "../../Button/AddButton";
import { PodcastLogic } from "./podcastLogic";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContent,
  SectionSubtitle,
  SectionTitle,
  SectionGrid,
  ErrorMessage,
} from "../../../styles/sectionStyles";

export const Podcast: React.FC = () => {
  const { podcasts } = PodcastLogic();

  return (
    <SectionContainer variant="half-width">
      <SectionHeader>
        <SectionHeaderContent>
          <div>
            <SectionSubtitle>UPCOMING PODCAST'S</SectionSubtitle>
            <SectionTitle>Check our agricultural podcasts</SectionTitle>
          </div>
          <AddButton section="podcast" label="Add Podcast" />
        </SectionHeaderContent>
      </SectionHeader>

      {podcasts.length === 0 ? (
        <ErrorMessage>
          No podcasts available. Click "Add Podcast" to create your first
          podcast.
        </ErrorMessage>
      ) : (
        <SectionGrid variant="wrap">
          {podcasts.map((podcast) => (
            <Card
              key={podcast.id}
              card={podcast}
              section="podcast"
              variant="square"
            />
          ))}
        </SectionGrid>
      )}
    </SectionContainer>
  );
};
