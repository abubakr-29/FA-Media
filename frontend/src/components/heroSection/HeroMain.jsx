import HeroText from "./HeroText";
import SubHero from "./SubHero";

const HeroMain = () => {
  return (
    <div className="pt-35 pb-12" id="hero">
      <div className="mx-auto">
        <HeroText />
        <SubHero />
      </div>
    </div>
  );
};

export default HeroMain;
