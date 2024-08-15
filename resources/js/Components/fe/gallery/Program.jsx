import { Link } from "@inertiajs/react";
import { Programs } from "../../../constants/Programs";

const Program = () => {
    return (
        <section id="program" className="-mt-60">
            <div className="flex flex-col relative z-20 gap-4 wrapper">
                <h1 className="text-crimson text-3xl font-bold">
                    SEAMEO RECFON’s Program
                </h1>
                <hr className="border-1 border-crimson w-1/3" />
            </div>
            <div className="grid wrapper grid-cols-1 md:grid-cols-3 gap-14 md:gap-32 mt-10">
                {Programs.map((program, index) => (
                    <div key={index} className="flex flex-col font-bold gap-4">
                        <iframe
                            className="rounded-xl h-52"
                            src={program.videoUrl}
                            title={`YouTube video player ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <h1>{program.title}</h1>
                    </div>
                ))}
            </div>
            <a 
                href="https://youtube.com/@seameorecfonchannel"
                target="_blank"
                className="flex justify-center"
            >
                <div className="bg-recfonred px-10 rounded-full mt-10 py-3 text-white font-semibold text-xl hover:scale-105 animation transition-all">
                    More {">>"}
                </div></a>  
        </section>
    );
};

export default Program;
