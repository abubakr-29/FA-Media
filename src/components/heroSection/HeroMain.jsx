import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-35 pb-12" id="hero">
      <div className="flex flex-wrap lg:flex-row-reverse max-w-[1400px] mx-auto">
        <HeroPic />
        <HeroText />
      </div>
    </div>
  );
};

export default HeroMain;
