import { Card } from "../../Card/Card";
import { AddButton } from "../../Button/AddButton";
import { EventsLogic } from "./eventsLogic";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContent,
  SectionSubtitle,
  SectionTitle,
  SectionGrid,
  ErrorMessage,
} from "../../../styles/sectionStyles";

export const Events: React.FC = () => {
  const { events } = EventsLogic();

  return (
    <SectionContainer variant="half-width">
      <SectionHeader>
        <SectionHeaderContent>
          <div>
            <SectionSubtitle>UPCOMING EVENTS</SectionSubtitle>
            <SectionTitle>Join our agricultural events</SectionTitle>
          </div>
          <AddButton section="events" label="Add Event" />
        </SectionHeaderContent>
      </SectionHeader>

      {events.length === 0 ? (
        <ErrorMessage>
          No events available. Click "Add Event" to create your first event.
        </ErrorMessage>
      ) : (
        <SectionGrid variant="column">
          {events.map((event) => (
            <Card key={event.id} card={event} section="events" variant="wide" />
          ))}
        </SectionGrid>
      )}
    </SectionContainer>
  );
};
