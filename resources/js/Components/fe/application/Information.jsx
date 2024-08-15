import flower from "../../../../../public/application/flower.png";
import pdf_indo from "../../../../../public/application/pdf.png";
import pdf_english from "../../../../../public/application/pdf_english.png";
const Information = () => {
    return (
        <section id="information" className="bg-white h-[50rem] pt-20">
            <img src={flower} alt="Flower" className="absolute z-10 left-0" />

            <div className="flex flex-col relative z-20 gap-4 justify-center items-center">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="flex justify-center items-center flex-col gap-4">
                        <h1 className="text-teal font-extrabold text-4xl">
                            More Information
                        </h1>
                        <h1 className="text-black text-xl font-semibold">
                            For more information, click down below!
                        </h1>
                    </div>
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-6 items-center">
                            <img src={pdf_indo} alt="PDF" className="w-[20rem]" />
                            <a
                                href="/application/Buku Panduan Program Internship.pdf"
                                target="_blank"
                                className="text-white font-semibold text-xl rounded-xl bg-green-500 px-12 py-3"
                            >
                                Download PDF
                            </a>
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <img src={pdf_english} className="w-[20rem]" alt="PDF" />
                            <a
                                href="/application/Guide Book Internship Program.pdf"
                                target="_blank"
                                className="text-white font-semibold text-xl rounded-xl bg-green-500 px-12 py-3"
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;
