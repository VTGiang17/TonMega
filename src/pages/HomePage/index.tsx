import Banner from "../../components/HomePage/Banner/Banner";
import Introduction from "../../components/HomePage/IntroductionSection/Introduction";
import LevelReward from "../../components/HomePage/LevelSection/LevelReward";
import Roadmap from "../../components/HomePage/RoadmapSection/Roadmap";

function HomePage() {
  return (
    <>
      <Banner />
      <Introduction />
      <Roadmap />
      <LevelReward />
      {/*<OurTeam /> */}
    </>
  );
}

export default HomePage;
