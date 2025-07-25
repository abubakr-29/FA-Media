import AllSolutions from "./AllSolutions";
import SolutionText from "./SolutionText";

const SolutionMain = () => {
  return (
    <section
      className="pt-8 text-stone-300 max-w-fit lg:max-w-[1200px] mx-auto"
      id="solution"
    >
      <div className="bg-[#1e1e1e] rounded-3xl border border-stone-500 shadow-2xl py-6 px-4 sm:py-10 sm:px-6 lg:p-8 flex flex-col justify-center items-center broder-2 border-white">
        <SolutionText />
        <AllSolutions />
      </div>
    </section>
  );
};

export default SolutionMain;
