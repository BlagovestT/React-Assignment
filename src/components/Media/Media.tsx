import { Events } from "./Events/Events";
import { Podcast } from "./Podcast/Podcast";
import { MediaContainer } from "./Media.styles";

export const Media = () => {
  return (
    <MediaContainer>
      <Events />
      <Podcast />
    </MediaContainer>
  );
};
