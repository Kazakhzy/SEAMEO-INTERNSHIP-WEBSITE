import document from "../../../../../public/application/document.png";
const Documents = () => {
    return (
        <section id="document" className="pt-20">
            <div className="wrapper">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3 text-3xl font-bold">
                        Required Documents{" "}
                    </h1>
                    <hr className=" border-1 border-recfonred w-1/3" />
                </div>
                <div className="mt-20 flex flex-col md:flex-row gap-20 justify-between">
                    <div className="md:w-1/2">
                        <img src={document} alt="" />
                    </div>
                    <div className="flex flex-col text-lg gap-10">
                        <h1 className="font-bold">
                            Prepare the required documents below before you
                            apply!
                        </h1>
                        <ul className="flex flex-col ml-10 gap-2 font-semibold">
                            <li>
                                <h2>1. Letter of Statement **</h2>
                                <p>- Statement of Commitment</p>
                                <p>- Statement of Incomplete Studies</p>
                                <p>- Statement of Non-Participation in Other Programs</p>
                            </li>
                            <li>
                                <h2>2. Letter of Recommendation</h2>
                            </li>
                            <li>
                                <h2>3. Curriculum Vitae </h2>
                            </li>
                            <li>
                            <h2>4. Portfolio & Certificate <span className="text-recfonred">(Optional)</span></h2>
                                
                            </li>
                            <li>
                                <h2>5. Health Insurance </h2>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documents;
