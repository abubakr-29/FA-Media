import WhyChooseUsBottom from "./WhyChooseUsBottom";
import WhyChooseUsBottomSM from "./WhyChooseUsBottomSM";
import WhyChooseUsTop from "./WhyChooseUsTop";

const WhyChooseUsMain = () => {
  return (
    <section className="pb-20 pt-8 sm:pt-16 text-stone-300" id="why-choose-us">
      <div className="mx-auto">
        <WhyChooseUsTop />
        <div className="hidden lg:block">
          <WhyChooseUsBottom />
        </div>
        <div className="block lg:hidden">
          <WhyChooseUsBottomSM />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsMain;
