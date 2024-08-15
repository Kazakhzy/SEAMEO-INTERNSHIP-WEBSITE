
const Video = () => {
  return (
    <section
      id="video"
      className="bg-[#F5F5F5] py-4 w-full  md:py-20 mt-40 font-monserrat"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:w-full md:h-[30rem] gap-10 wrapper">
        <div className="md:w-1/2 flex flex-col gap-10">
          <h1 className="font-bold text-4xl">
            Let’s take a look at SEAMEO RECFON Internship video!
          </h1>
          <p>
            Get ready to be inspired by the SEAMEO RECFON Internship journey
            captured in real stories and experiences! From unforgettable
            memories to career-defining moments, get ready to be inspired by
            their stories of growth, learning, and success. Whether you're
            passionate about nutrition, research, or beyond, our internship
            program is your ticket to unlocking endless possibilities!
          </p>
        </div>
        <iframe
          className="md:w-1/2 w-[100%] h-80 md:h-96 rounded-2xl"
          src="https://www.youtube.com/embed/Lc9lCB5uQ9w?si=CF2eRZZt_y_Fv4w5"
          allowFullScreen
        ></iframe>


      </div>
    </section>
  );
};

export default Video;
