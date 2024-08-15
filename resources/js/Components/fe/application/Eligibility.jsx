import icon from "../../../../../public/application/icon.svg";
import image_1 from "../../../../../public/application/1.png";

const Eligibility = () => {
  return (
    <section id="legibility" className="bg-crimson w-full h-fit pb-32">
      <div className="wrapper">
        <div className="flex justify-center">
          <div className="text-center bg-white border-2 border-crimson -mt-10 py-6 px-10 rounded-full text-3 w-fit  text-4xl font-bold">
            Eligibility
          </div>
        </div>
        <div className="grid md:grid-cols-3 justify-between gap-10 pt-10">
          <div className="bg-white h-fit pb-32 rounded-xl ">
            <div className="flex">
              <h1 className="text-2xl font-semibold p-4">
                Vocational High Schools
              </h1>
              <img src={icon} className="w-32 -mt-24" alt="Icon" />
            </div>
            <p className="px-4 font-medium">All majors are welcome</p>
            <div className="mt-10 flex flex-col px-4 gap-2 font-medium">
              <h1 className="text-2xl font-semibold">
                Vocational & Undergraduate Student
              </h1>
            </div>
            <h1 className="px-4 mt-14 font-medium">
              Statistics, Mathematics, Computer Science, Nutrition, Public
              Health, Graphic Design/Multimedia/Illustration/related fields,
              Communication and Information Science, English Literature,
              International Relations, Computer Engineering, Information
              Systems, Human Resource Management, Accounting, Information
              Archive and Recording Management, Taxation, Biotechnology,
              Psychology, Law.
            </h1>
          </div>
          <div className="grid grid-rows-3 ">
            <h1 className="bg-white rounded-[2rem] p-4 shadow-xl flex justify-center items-center w-96 text-center font-medium">
              Undergraduate students who have not completed their studies and
              are willing to postpone graduation during the internship program.
            </h1>
            <div className="mt-10">
              <div className="bg-white rounded-[2rem] flex justify-center items-center p-4 shadow-xl w-96 text-center font-medium">
                <h1>
                  Commitment to carry out and complete the internship program
                  until the end.
                </h1>
              </div>
              <div className="flex justify-end">
                <img src={icon} className="w-28 -mt-10" alt="Icons" />
              </div>
            </div>
            <h1 className="bg-white rounded-[2rem] p-4 shadow-xl flex justify-center items-center w-96 text-center font-medium">
              Willingness not to participate in other programs equivalent to 
              internships/trainings during the internship program.
            </h1>
          </div>
          <div>
            <img
              src={image_1}
              alt="Image"
              className="-mt-4 h-[107%] rounded-[2rem] object-cover object-center"
            />
            <div className="flex justify-end">
              <img src={icon} alt="Icons" className="w-32 -mt-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
