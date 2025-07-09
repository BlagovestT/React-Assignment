import { Card } from "../../Card/Card";
import Section from "../../Section/Section";
import { EventsLogic } from "./eventsLogic";

export const Events: React.FC = () => {
  const { events } = EventsLogic();

  return (
    <Section
      subTitle="UPCOMING EVENTS"
      title="Join our agricultural events"
      gridVariant="column"
      btnLabel="Add Event"
      section="events"
      sectionVariant="half-width"
    >
      {events.map((event) => (
        <Card key={event.id} card={event} section="events" variant="wide" />
      ))}
    </Section>
  );
};
