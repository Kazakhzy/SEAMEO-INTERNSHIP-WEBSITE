import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { GrCloudDownload } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const DoneForm = ({ auth, documents }) => {
    const [languages, setLanguages] = useState([{ id: 1 }]);

    // Form Update
    const { data, setData, post, progress, errors, reset } = useForm({
        id_user: auth.user.id,
        cv: null,
        portfolio_certificate: null,
        incomplete_studies: null,
        letter_commitment: null,
        letter_non_participant: null,
        health_insurance: null,
        passport: null,
        letter_recommendation: null,
        language_1: documents.language_1,
        speak_language_1: documents.speak_language_1,
        read_language_1: documents.read_language_1,
        write_language_1: documents.write_language_1,
        understand_language_1: documents.understand_language_1,

        language_2: documents.language_2,
        speak_language_2: documents.speak_language_2,
        read_language_2: documents.read_language_2,
        write_language_2: documents.write_language_2,
        understand_language_2: documents.understand_language_2,

        language_3: documents.language_3,
        speak_language_3: documents.speak_language_3,
        read_language_3: documents.read_language_3,
        write_language_3: documents.write_language_3,
        understand_language_3: documents.understand_language_3,

        computer_skills: documents.computer_skills,
        name_academic: documents.name_academic,
        preferred_date: documents.preferred_date,
        reason_interest: documents.reason_interest,
        topic_interested: documents.topic_interested,
        preferred_nature: documents.preferred_nature,
        specific_skills: documents.specific_skills,
        expected_output: documents.expected_output,
        current_source: documents.current_source,
    });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setData(name, files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("document.update", { id: documents.id }), {
            forceFormData: true,
            onSuccess: () => window.location.reload(),
        });
    };
    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iframeSrc, setIframeSrc] = useState("");

    const openModal = (src) => {
        setIframeSrc(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIframeSrc("");
    };

    const handleBack = () => {
        window.history.back();
    };
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
            <div className="flex items-center gap-4 text-green-500 text-4xl ">
                <h1 className="font-semibold">Document Form</h1>
                <FaCheckCircle />
            </div>

            <div className="mt-6">
                <div className="bg-white mb-10 w-full h-[35rem] overflow-y-auto border-2 py-4 px-6 shadow-md rounded-xl">
                    <div className="flex gap-2 items-center text-crimson font-semibold">
                        <hr className="border-2 border-crimson w-4" />
                        <h1>Document Data</h1>
                    </div>

                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg shadow-lg relative w-[95%] md:w-1/2 p-10 h-[40rem]">
                                <button
                                    onClick={closeModal}
                                    className="bg-crimson flex items-center gap-2 hover:scale-90 absolute right-2 top-2 duration-150 p-2 rounded-full text-white"
                                >
                                    <MdOutlineClose />
                                    Close
                                </button>
                                <iframe
                                    src={iframeSrc}
                                    className="w-full h-[90%] mt-4"
                                    title="Document Viewer"
                                ></iframe>
                            </div>
                        </div>
                    )}
                    <form
                        className="mt-4"
                        onSubmit={handleSubmit}
                        enctype="multipart/form-data"
                        method="post"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-10">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="incomplete_studies">
                                        Curriculum Vitae (CV){" "}
                                    </label>
                                    <a
                                        href={documents.cv}
                                        target="_blank"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <FiArrowUpRight />
                                        Lihat
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="cv"
                                    id="cv"
                                    onChange={handleFileChange}
                                />
                                {errors.cv && (
                                    <div className="text-red-500">
                                        {errors.cv}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="portfolio_certificate">
                                        Portfolio & Certificate{" "}
                                        <span className="text-crimson">
                                            (Optional)
                                        </span>
                                    </label>
                                    {documents.portfolio_certificate && (
                                        <a
                                            href={
                                                documents.portfolio_certificate
                                            }
                                            target="_blank"
                                            className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                        >
                                            <FiArrowUpRight />
                                            Lihat
                                        </a>
                                    )}
                                </div>{" "}
                                <input
                                    type="file"
                                    className="form-control"
                                    name="portfolio_certificate"
                                    id="portfolio_certificate"
                                    onChange={handleFileChange}
                                />
                                {errors.portfolio && (
                                    <div className="text-red-500">
                                        {errors.portfolio}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="incomplete_studies">
                                        Statement Of Incomplete Studies
                                    </label>
                                    <a
                                        href={documents.incomplete_studies}
                                        target="_blank"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <FiArrowUpRight />
                                        Lihat
                                    </a>
                                </div>{" "}
                                <input
                                    type="file"
                                    className="form-control"
                                    name="incomplete_studies"
                                    id="incomplete_studies"
                                    onChange={handleFileChange}
                                />
                                {errors.incomplete_studies && (
                                    <div className="text-red-500">
                                        {errors.incomplete_studies}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="letter_commitment">
                                        Letter Of Commitment
                                    </label>
                                    <a
                                        href={documents.letter_commitment}
                                        target="_blank"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <FiArrowUpRight />
                                        Lihat
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="letter_commitment"
                                    id="letter_commitment"
                                    onChange={handleFileChange}
                                />
                                {errors.letter_commitment && (
                                    <div className="text-red-500">
                                        {errors.letter_commitment}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="letter_non_participant">
                                        Statement of Non-Participation in Other
                                        Programs
                                    </label>
                                    <a
                                        href={documents.letter_non_participant}
                                        target="_blank"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <FiArrowUpRight />
                                        Lihat
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="letter_non_participant"
                                    id="letter_non_participant"
                                    onChange={handleFileChange}
                                />
                                {errors.letter_non_participant && (
                                    <div className="text-red-500">
                                        {errors.letter_non_participant}
                                    </div>
                                )}
                            </div>{" "}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="health_insurance">
                                        Health Insurance
                                    </label>
                                    <a
                                        href={documents.health_insurance}
                                        target="_blank"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <FiArrowUpRight />
                                        Lihat
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="health_insurance"
                                    id="health_insurance"
                                    onChange={handleFileChange}
                                />
                                {errors.health_insurance && (
                                    <div className="text-red-500">
                                        {errors.health_insurance}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-2 mt-8">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="passport">
                                        Passport{" "}
                                        <span className="text-recfonred">
                                            (Optional)
                                        </span>
                                    </label>
                                    <a
                                        href={documents.passport}
                                        target="_blank"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <FiArrowUpRight />
                                        Lihat
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="passport"
                                    id="passport"
                                    onChange={handleFileChange}
                                />
                                {errors.passport && (
                                    <div className="text-red-500">
                                        {errors.passport}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 mt-8">
                                <div className="flex justify-between items-center gap-10">
                                    <label htmlFor="letter_recommendation">
                                        Letter of Recommendation
                                    </label>
                                    <a
                                        href={documents.letter_recommendation}
                                        target="_blank"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <FiArrowUpRight />
                                        Lihat
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="letter_recommendation"
                                    id="letter_recommendation"
                                    onChange={handleFileChange}
                                />
                                {errors.letter_recommendation && (
                                    <div className="text-red-500">
                                        {errors.letter_recommendation}
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="py-4 text-crimson font-bold">
                            Letter Of Intent
                        </h1>
                        <h1 className="text-slate-400 text-sm">
                            OTHER ACADEMIC OR PROFESSIONAL QUALIFICATIONS
                        </h1>
                        <div className="flex gap-4 items-center">
                            <h1>
                                <i>
                                    {" "}
                                    Language skills (B = Basic; W = Working; F =
                                    Fluent)
                                </i>
                            </h1>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-start py-2">
                                        Language
                                    </th>
                                    <th
                                        colSpan="3"
                                        className="text-start pl-20 py-2"
                                    >
                                        Speak
                                    </th>
                                    <th
                                        colSpan="3"
                                        className="text-start pl-20 py-2"
                                    >
                                        Read
                                    </th>
                                    <th
                                        colSpan="3"
                                        className="text-start pl-20 py-2"
                                    >
                                        Write
                                    </th>
                                    <th
                                        colSpan="3"
                                        className="text-start pl-14 py-2"
                                    >
                                        Understand
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[0, 1, 2].map(
                                    (index) =>
                                        languages[`language_${index}`] !==
                                            null && (
                                            <tr key={`language_${index + 1}`}>
                                                <td className="ml-4">
                                                    <input
                                                        type="text"
                                                        id={`language_${
                                                            index + 1
                                                        }`}
                                                        name={`language_${
                                                            index + 1
                                                        }`}
                                                        className="form-control"
                                                        onChange={(e) => {
                                                            setData(
                                                                `language_${
                                                                    index + 1
                                                                }`,
                                                                e.target.value
                                                            );
                                                        }}
                                                        value={
                                                            data[
                                                                `language_${
                                                                    index + 1
                                                                }`
                                                            ] || ""
                                                        }
                                                    />
                                                </td>
                                                <td className="pl-10">
                                                    B
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`speak_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                data[
                                                                    `speak_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "B"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `speak_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    W
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`speak_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                data[
                                                                    `speak_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "W"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `speak_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    F
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`speak_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                data[
                                                                    `speak_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "F"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `speak_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                {/* Read */}
                                                <td className="pl-10">
                                                    B
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`read_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                data[
                                                                    `read_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "B"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `read_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    W
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`read_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                data[
                                                                    `read_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "W"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `read_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    F
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`read_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                data[
                                                                    `read_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "F"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `read_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                {/* write */}
                                                <td className="pl-10">
                                                    B
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`write_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                data[
                                                                    `write_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "B"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `write_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    W
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`write_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                data[
                                                                    `write_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "W"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `write_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    F
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`write_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                data[
                                                                    `write_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "F"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `write_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                {/* understand */}
                                                <td className="pl-10">
                                                    B
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`understand_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                data[
                                                                    `understand_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "B"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `understand_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    W
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`understand_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                data[
                                                                    `understand_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "W"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `understand_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="pl-10">
                                                    F
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            name={`understand_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                data[
                                                                    `understand_language_${
                                                                        index +
                                                                        1
                                                                    }`
                                                                ] === "F"
                                                            }
                                                            onChange={(e) => {
                                                                setData(
                                                                    `understand_language_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                )}
                            </tbody>
                        </table>
                        <div className="flex flex-col gap-2 mt-4">
                            <label
                                htmlFor="computer_skills"
                                className="text-sm"
                            >
                                Computer skills (list the computer software
                                which you have mastered):{" "}
                            </label>
                            <textarea
                                name="computer_skills"
                                id="computer_skills"
                                className="rounded-md h-20"
                                onChange={(e) =>
                                    setData("computer_skills", e.target.value)
                                }
                                required
                                value={data.computer_skills}
                            ></textarea>
                            {errors.computer_skills && (
                                <div className="text-red-500">
                                    {errors.computer_skills}
                                </div>
                            )}{" "}
                        </div>
                        <h1 className="text-slate-400 text-sm my-4">
                            INTERNSHIP PLAN
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name_academic"
                                    className="text-sm"
                                >
                                    Name of Academic Adviser or Supervisor
                                </label>
                                <textarea
                                    name="name_academic"
                                    id="name_academic"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData("name_academic", e.target.value)
                                    }
                                    required
                                    value={data.name_academic}
                                ></textarea>
                                {errors.name_academic && (
                                    <div className="text-red-500">
                                        {errors.name_academic}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="preferred_date"
                                    className="text-sm"
                                >
                                    Preferred date and period to carry out
                                    internship at SEAMEO RECFON{" "}
                                </label>
                                <textarea
                                    name="preferred_date"
                                    id="preferred_date"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "preferred_date",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.preferred_date}
                                ></textarea>
                                {errors.preferred_date && (
                                    <div className="text-red-500">
                                        {errors.preferred_date}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="reason_interest"
                                    className="text-sm"
                                >
                                    Reason for your interest in interning at
                                    SEAMEO RECFON
                                </label>
                                <textarea
                                    name="reason_interest"
                                    id="reason_interest"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "reason_interest",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.reason_interest}
                                ></textarea>
                                {errors.reason_interest && (
                                    <div className="text-red-500">
                                        {errors.reason_interest}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="topic_interested"
                                    className="text-sm"
                                >
                                    Topic interested to work with SEAMEO RECFON
                                </label>
                                <textarea
                                    name="topic_interested"
                                    id="topic_interested"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "topic_interested",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.topic_interested}
                                ></textarea>
                                {errors.topic_interested && (
                                    <div className="text-red-500">
                                        {errors.topic_interested}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="preferred_nature"
                                    className="text-sm"
                                >
                                    Preferred nature of activities to carry out
                                    (office work, field work, public engagement,
                                    multiple activities, others)
                                </label>
                                <textarea
                                    name="preferred_nature"
                                    id="preferred_nature"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "preferred_nature",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.preferred_nature}
                                ></textarea>
                                {errors.preferred_nature && (
                                    <div className="text-red-500">
                                        {errors.preferred_nature}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="spesific_skills"
                                    className="text-sm"
                                >
                                    Specific skills or knowledge you want to
                                    develop or enhance during the internship
                                </label>
                                <textarea
                                    name="spesific_skills"
                                    id="spesific_skills"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "spesific_skills",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.specific_skills}
                                ></textarea>
                                {errors.spesific_skills && (
                                    <div className="text-red-500">
                                        {errors.specific_skills}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-4">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="expected_output"
                                    className="text-sm"
                                >
                                    Expected Outputs and Outcomes
                                </label>
                                <textarea
                                    name="expected_output"
                                    id="expected_output"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "expected_output",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.expected_output}
                                ></textarea>
                                {errors.expected_output && (
                                    <div className="text-red-500">
                                        {errors.expected_output}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="current_source"
                                    className="text-sm"
                                >
                                    Current source of financial support or donor
                                </label>
                                <textarea
                                    name="current_source"
                                    id="current_source"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "current_source",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.current_source}
                                ></textarea>
                                {errors.current_source && (
                                    <div className="text-red-500">
                                        {errors.current_source}
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-center text-gray-600 mt-4">
                            {" "}
                            <b>*NOTE: </b>
                            You Still Can Edit Your Document Later.
                        </h1>
                        <button
                            type="submit"
                            className="bg-crimson text-center w-full h-fit mt-4 py-4 rounded-full hover:scale-95 duration-150 text-white font-bold"
                        >
                            Edit Data
                        </button>
                        {progress && (
                            <progress
                                className="w-full bg-green-400 text-green-400"
                                value={progress.percentage}
                                max="100"
                            />
                        )}
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default DoneForm;
