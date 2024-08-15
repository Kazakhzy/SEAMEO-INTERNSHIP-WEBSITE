import Heroo from "../../../../../public/home/Hero.svg";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="wrapper pb-10 flex flex-col md:items-center  md:flex-row gap-10 justify-between pt-40 h-screen"
      >
        <div className="flex flex-col  gap-8 md:w-1/2">
          <h1 className="text-recfonred font-bold text-3xl md:text-6xl text-nowrap">
            SEAMEO RECFON
          </h1>
          <hr className="border-2 border-coral w-3/4 md:w-[85%]" />
          <h1 className="text-teal font-extrabold text-xl md:text-5xl text-nowrap">
            Internship Program
          </h1>
          <p className="text-left">
            "Embark on a journey of discovery and growth. Join our inspiring community dedicated to learning and empowerment."
          </p>
          <div className="mt-14">
            <a
              href="/dashboards"
              className="bg-coral border-2 border-coral text-white hover:bg-white hover:text-coral hover:border-coral font-bold px-12 py-2 rounded-md"
            >
              Join Us!
            </a>
          </div>
        </div>
        <div className="md:w-[70%]">
          <img src={Heroo} alt="Hero Image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
