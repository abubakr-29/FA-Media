import AboutUsLeft from "./AboutUsLeft";
import AboutUsRight from "./AboutUsRight";
import AboutUsTop from "./AboutUsTop";

const AboutUsMain = () => {
  return (
    <section className="py-20 text-stone-300" id="about">
      <AboutUsTop />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start md:px-0 mt-10">
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
