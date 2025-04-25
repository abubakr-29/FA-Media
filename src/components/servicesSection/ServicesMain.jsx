import ServicesText from "./ServicesText";
import AllServices from "./AllServices";

const ServicesMain = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-24" id="services">
      <div className="text-center mb-12">
        <ServicesText />
      </div>
      <div>
        <AllServices />
      </div>
    </div>
  );
};

export default ServicesMain;
