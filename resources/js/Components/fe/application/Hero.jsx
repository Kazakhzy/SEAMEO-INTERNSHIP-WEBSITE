const Hero = () => {
    return (
        <section
            id="hero"
            className="pt-80 bg-cover bg-application w-full h-screen "
        >
            <div className="wrapper">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3 font-bold text-4xl">
                        Internship Application
                    </h1>
                    <hr className="border-2 border-crimson w-1/2 md:w-[27rem]" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
