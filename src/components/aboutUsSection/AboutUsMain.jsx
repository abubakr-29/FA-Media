import AboutUsLeft from "./AboutUsLeft";
import AboutUsRight from "./AboutUsRight";

const AboutUsMain = () => {
  return (
    <section className="py-20" id="about">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start px-4 md:px-0">
        <div className="flex-1 my-auto">
          <AboutUsLeft />
        </div>

        <div className="flex-1 ">
          <AboutUsRight />
        </div>
      </div>
    </section>
  );
};

export default AboutUsMain;
