import { getUserName } from "../../utils/auth";
import { HeroContainer, HeroTitle, HeroDescription } from "./Hero.styles";

export const Hero: React.FC = () => {
  const userName = getUserName();

  return (
    <HeroContainer>
      <HeroTitle>Welcome {userName} </HeroTitle>
      <HeroDescription>
        Access all our solutions, products and knowledge in one place to enhance
        your crop nutrition decisions.
      </HeroDescription>
    </HeroContainer>
  );
};
