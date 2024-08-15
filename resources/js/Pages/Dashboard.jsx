import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FaCheck, FaUserCheck } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaUserClock, FaUserXmark } from "react-icons/fa6";

export default function Dashboard({
    auth,
    user_data,
    cek_document,
    cek_profile,
    accepted_user,
    not_accepted_user,
    pending_user,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <h1 className="text-4xl text-crimson font-semibold">
                Welcome, {auth.user.name}
            </h1>

            {auth.user.level === "user" ? (
                <div className="mt-4">
                    <h1 className="md:text-xl">
                        To register for an internship, please complete the
                        documents below:
                    </h1>

                    <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-10">
                        <div className="bg-white border-2 mt-10 w-80 h-fit rounded-md pt-10 shadow-xl ">
                            <div className="flex flex-col gap-4 text-lg">
                                {cek_document ? (
                                    <div className="flex text-green-500 items-center px-4 justify-between">
                                        <h1>Document Form</h1>
                                        <FaCheck />
                                    </div>
                                ) : (
                                    <div className="flex text-crimson items-center px-4 justify-between">
                                        <h1>Document Form</h1>
                                        <MdOutlineClose />
                                    </div>
                                )}
                                {cek_profile ? (
                                    <div className="flex text-green-500 items-center px-4 justify-between">
                                        <h1>Profile Form</h1>
                                        <FaCheck />
                                    </div>
                                ) : (
                                    <div className="flex text-crimson  items-center px-4 justify-between">
                                        <h1>Profile Form</h1>
                                        <MdOutlineClose />
                                    </div>
                                )}
                                {cek_document === null ||
                                    cek_profile === null ? (
                                    <h1 className="mt-20 bg-orange-400 p-2 rounded-b-xl text-center text-white font-bold">
                                        Please Wait For Next Information
                                    </h1>
                                ) : (
                                    <h1 className="mt-20 bg-green-400 p-2 rounded-b-xl text-center text-white font-bold">
                                        Your Data Is Accepted
                                    </h1>
                                )}
                            </div>
                        </div>
                        {user_data &&
                            (user_data.status_accept === "Pending" ? (
                                <div className="bg-yellow-500 w-full text-xl text-white p-4 my-2 md:my-4 rounded-md">
                                    Your Data Still Under Our Review.
                                </div>
                            ) : user_data.status_accept === "Not Accepted" ? (
                                <div className="bg-red-500 w-full text-xl text-white p-4 my-2 md:my-4 rounded-md">
                                    <p className="mb-14">
                                        Thank you for your application to the SEAMEO RECFON Internship
                                    </p>
                                    <p className="-mt-6 text-base ">

                                        Thank you for applying to the SEAMEO RECFON Internship Program.
                                        We greatly appreciate your enthusiasm and the impressive profile you presented.
                                        However, after careful review of your application,
                                        we regret to inform you that you do not meet the criteria we are looking for at this time.
                                    </p>
                                    <p className="mt-4 text-base">
                                        We are confident that many more opportunities await you,
                                        and we wish you all the best in your future endeavors.
                                    </p>
                                    <p className="mt-4 text-base">
                                        Best regards,
                                        
                                    </p>
                                    <p className="mt-4 text-base">
                                        
                                        SEAMEO RECFON
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-green-500 w-full text-xl text-white p-4 my-2 md:my-4 rounded-md">
                                    <p className="mb-14">
                                        Congratulation, You Are Accepted!
                                    </p>
                                    <p className="-mt-6 text-base">
                                        Thank you for your interest in the
                                        SEAMEO RECFON Internship Program. We are
                                        pleased to inform you that after
                                        thoroughly reviewing your application
                                        and documents, you have successfully
                                        passed the selection phase!
                                    </p>
                                    <p className="mt-4 text-base">
                                        Please kindly check your email regularly
                                        for further instructions and information
                                        from our team regarding the next steps.
                                    </p>
                                    <p className="mt-4 text-base">
                                        Your journey with us is just beginning,
                                        and we are excited to meet an
                                        outstanding intern like you
                                    </p>
                                </div>
                            ))}
                    </div>
                    {/* )} */}
                </div>
            ) : (
                <>
                    <div className="mt-4">
                        <h1>Here's the data of your intern.</h1>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 h-32 gap-10">
                        <div className="bg-white shadow-md relative  rounded-2xl items-center flex gap-4">
                            <div className="flex w-20 h-full items-center justify-center bg-green-400 text-white text-2xl rounded-l-md">
                                <FaUserCheck />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-gray-400">
                                    Accepted User
                                </h1>
                                <h1 className="font-semibold text-2xl text-slate-900">
                                    {accepted_user}
                                </h1>
                            </div>
                        </div>
                        <div className="bg-white shadow-md relative  rounded-2xl items-center flex gap-4">
                            <div className="flex w-20 h-full items-center justify-center bg-orange-400 text-white text-2xl rounded-l-md">
                                <FaUserClock />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-gray-400">
                                    Pending User
                                </h1>
                                <h1 className="font-semibold text-2xl text-slate-900">
                                    {pending_user}
                                </h1>
                            </div>
                        </div>
                        <div className="bg-white shadow-md relative  rounded-2xl items-center flex gap-4">
                            <div className="flex w-20 h-full items-center justify-center bg-red-500 text-white text-2xl rounded-l-md">
                                <FaUserXmark />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-gray-400">
                                    Not Accepted User
                                </h1>
                                <h1 className="font-semibold text-2xl text-slate-900">
                                    {not_accepted_user}
                                </h1>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </AuthenticatedLayout>
    );
}
