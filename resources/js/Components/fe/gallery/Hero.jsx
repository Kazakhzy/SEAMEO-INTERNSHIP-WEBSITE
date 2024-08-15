import flower from "../../../../../public/gallery/flower.svg";
const Hero = () => {
  return (
    <section id="hero" className=" h-screen relative pt-60">
      <div className="flex flex-col md:flex-row wrapper justify-between gap-20 items-center">
        <iframe
          className=" md:w-1/2 w-[100%] h-80  md:h-96 rounded-2xl"
          src="https://www.youtube.com/embed/6dn-Q64qVBQ?si=TqeSUZWyEyc8bXgl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>{" "}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="font-bold text-black text-2xl">
            SEAMEO RECFON Profiles
          </h1>
          <p className="text-justify pt-10 leading-loose">
            Discover our mission and initiatives through our video profile.
            Learn how SEAMEO RECFON serves as the Regional Center for Food and Nutrition in Southeast Asia,
            driving impactful research, education, and community programs to enhance nutritional health across the region.

          </p>
        </div>
      </div>
      <div className="flex justify-end -mt-20 relative -z-10">
        <img src={flower} alt="Flower" className="w-60" />
      </div>
    </section>
  );
};

export default Hero;
