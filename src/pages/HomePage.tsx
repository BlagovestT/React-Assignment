import { Featured } from "../components/Feature/Featured";
import { Hero } from "../components/Hero/Hero";
import { News } from "../components/News/News";
import { Solutions } from "../components/Solutions/Solutions";
import { Media } from "../components/Media/Media";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Featured />
      <Media />
      <News />
    </>
  );
};

export default HomePage;
