import about from "../../../../../public/home/About.png";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-b from-recfonred to-crimson w-full h-screen py-20 mt-40 flex items-center"
      >
        <div className="wrapper flex flex-col-reverse md:flex-row gap-10 md:gap-0 justify-between">
          <div className="flex flex-col gap-10 md:w-1/2">
            <div className="flex flex-col text-3xl font-bold">
              <h1 className="text-white font-black pb-2">Get to know</h1>
              <h1 className="text-white">Internship Program </h1>
            </div>
            <p className="font-monserrat">
              The Internship Program, initiated and organized by the Southeast
              Asian Ministers of Education Organization Regional Centre for Food
              and Nutrition (SEAMEO RECFON), stands as a flagship among seven
              Capacity Building Programs aimed at enhancing institutional
              functions in human resource quality.
            </p>
            <p className="font-bold font-monserrat text-white text-xl">
              “Unlocking Potential, Shaping Futures”
            </p>
            <a
              href="/applications"
              className="bg-white text-lg px-6 py-1 w-fit text-recfonred border-2 border-white rounded-md hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
          <div className="w-1/2">
            <img src={about} alt="About Page" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
