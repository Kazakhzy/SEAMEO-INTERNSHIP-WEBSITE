import bg_objective from "../../../../../public/about/bg-objective.svg";
import bg_1 from "../../../../../public/about/1.svg";
import bg_2 from "../../../../../public/about/2.svg";
const Objectives = () => {
  return (
    <>
      <div className="relative w-full h-[60rem]">
        <div className="absolute right-0 flex">
          <img src={bg_1} alt="Background" className="w-32 md:w-80" />
        </div>
        <div className="pt-20 wrapper pl-20 gap-4 md:gap-10 flex flex-col">
          <h1 className="textt-xl md:text-6xl font-bold text-black">Program Objectives</h1>
          <hr className="border-2 border-coral w-1/2" />
        </div>
        <div className="pt-10 md:pt-20 wrapper">
          <div className="flex flex-col gap-10 text-xl text-center">
            <h1 className="text-white bg-recfonred p-6 md:w-[28rem] font-semibold rounded-full">
              Providing professional work exposure to internship participants
              and relevant practical work experience in their field of study.
            </h1>
            <div className="flex md:justify-center">
              <h1 className="text-white  bg-recfonred p-6 w-[28rem] font-semibold rounded-full">
                Encouraging institutions to recognize and recruit talented, high-quality individuals who align with
                the institution's needs and culture for the future.
              </h1>
            </div>
            <div className="flex md:justify-end">
              <h1 className="text-white bg-recfonred p-6 w-[28rem] font-semibold rounded-full">
                Strengthening collaboration between educational institutions and SEAMEO RECFON
                to mutually share knowledge, practical experiences, and relevant fields.

              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <img
            src={bg_objective}
            alt="Background"
            className="absolute -z-10 -mt-[34rem] w-[50rem]"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <img src={bg_2} alt="Background" className="w-40 md:w-80" />
        </div>
      </div>
    </>
  );
};

export default Objectives;
