import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { GrCloudDownload } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";

const Index = ({ auth, documents }) => {
    const [languages, setLanguages] = useState([{ id: 1 }]);

    const addLanguage = () => {
        if (languages.length < 3) {
            setLanguages([...languages, { id: languages.length + 1 }]);
        }
    };
    const minusLanguage = () => {
        if (languages.length > 1) {
            setLanguages(languages.slice(0, languages.length - 1));
        }
    };
    // Form Insert
    const { data, setData, post, progress, errors, reset } = useForm({
        id_user: auth.user.id,
        cv: null,
        portfolio_certificate: null,
        incomplete_studies: null,
        letter_commitment: null,
        letter_non_participant: null,
        passport: null,
        health_insurance: null,
        letter_recommendation: null,
        language_1: "",
        speak_language_1: "",
        read_language_1: "",
        write_language_1: "",
        understand_language_1: "",

        language_2: "",
        speak_language_2: "",
        read_language_2: "",
        write_language_2: "",
        understand_language_2: "",

        language_3: "",
        speak_language_3: "",
        read_language_3: "",
        write_language_3: "",
        understand_language_3: "",

        computer_skills: "",
        name_academic: "",
        preferred_date: "",
        reason_interest: "",
        topic_interested: "",
        preferred_nature: "",
        specific_skills: "",
        expected_output: "",
        current_source: "",
    });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setData(name, files[0]);
        }
    };

    const [Confirmation, setConfirmation] = useState(false);

    const handleConfirmation = () => {
        setConfirmation(true);
    };

    const handleCancel = () => {
        setConfirmation(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("document.store"), {
            forceFormData: true,
            onSuccess: () => window.location.reload(),
        });
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
            <h1 className="text-4xl text-crimson font-semibold">
                Document Form
            </h1>
            <div className="mt-6">
                <div className="bg-white mb-10 w-full h-[35rem] overflow-y-auto border-2 py-4 px-6 shadow-md rounded-xl">
                    <div className="flex gap-2 items-center text-crimson font-semibold">
                        <hr className="border-2 border-crimson w-4" />
                        <h1>Document Data</h1>
                    </div>
                    <p>
                        * Document must be <b>PDF</b> & All Required{" "}
                        {/* <span className="text-crimson">
                            (Portfolio, Certificate, & Passport is Optional)
                        </span> */}
                    </p>
                    <form
                        className="mt-4"
                        onSubmit={handleSubmit}
                        enctype="multipart/form-data"
                        method="post"
                    >
                        <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 items-center gap-10">
                            {/* CV */}
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold" htmlFor="cv">
                                    Curriculum Vitae (CV)
                                </label>
                                <input
                                    type="file"
                                    required
                                    className="form-control"
                                    name="cv"
                                    id="cv"
                                    onChange={handleFileChange}
                                />
                                {errors.cv && (
                                    <div className="text-red-500">
                                        {errors.cv}
                                    </div>
                                )}{" "}
                            </div>
                            {/* Portfolio Certif */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="portfolio_certificate"
                                >
                                    Portfolio & Certificate{" "}
                                    <span className="text-crimson">
                                        (Optional)
                                    </span>
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="portfolio_certificate"
                                    id="portfolio_certificate"
                                    onChange={handleFileChange}
                                />
                                {errors.portfolio_certificate && (
                                    <div className="text-red-500">
                                        {errors.portfolio_certificate}
                                    </div>
                                )}
                            </div>
                            {/* Statement of Incomplete Studies */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label
                                        className="font-semibold"
                                        htmlFor="incomplete_studies"
                                    >
                                        Statement of Incomplete Studies
                                    </label>
                                    <a
                                        href="/dashboard/document-form/Statement of Incomplete Studies.docx"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <GrCloudDownload />
                                        Format
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    required
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
                            {/* Letter Commit */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-10">
                                    <label
                                        className="font-semibold"
                                        htmlFor="letter_commitment"
                                    >
                                        Letter of Commitment
                                    </label>
                                    <a
                                        href="/dashboard/document-form/Letter of Commitment.docx"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <GrCloudDownload />
                                        Format
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    required
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
                            {/* Statement of Non-Participation in Other Programs
                             */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <label
                                        htmlFor="letter_non_participan"
                                        className="text-[0.8rem] font-semibold"
                                    >
                                        Statement of Non-Participation in Other
                                        Programs
                                    </label>
                                    <a
                                        href="/dashboard/document-form/Not Participating in Other Internship Programs.docx"
                                        className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                    >
                                        <GrCloudDownload />
                                        Format
                                    </a>
                                </div>
                                <input
                                    type="file"
                                    required
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
                            {/* health Insurance */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="health_insurance"
                                >
                                    Health Insurance{" "}
                                    <span className="text-recfonred">
                                        (Optional)
                                    </span>
                                </label>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
                            {/* Passport */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <label
                                        htmlFor="letter_non_participan"
                                        className="text-[1rem] font-semibold"
                                    >
                                        Passport{" "}
                                        <span className="text-recfonred">
                                            (International Applicant)
                                        </span>
                                    </label>
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
                            </div>{" "}
                            {/* Letter recommendation */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="letter_recommendation"
                                >
                                    Letter of Recommendation
                                </label>
                                <input
                                    type="file"
                                    required
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
                        {/* Letter Intent */}
                        <h1 className="py-4 text-crimson font-bold">
                            Form Of Intent
                        </h1>
                        <h1 className="text-slate-400 text-sm font-bold">
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
                            <div className="flex gap-4"> </div>
                            <div
                                className={`p-2 rounded-full text-xl text-white cursor-pointer ${
                                    languages.length >= 3
                                        ? "bg-gray-500"
                                        : "bg-crimson"
                                }`}
                                onClick={addLanguage}
                            >
                                <GoPlus />
                            </div>
                            <div
                                className={`p-2 rounded-full text-xl text-white cursor-pointer ${
                                    languages.length == 1
                                        ? "bg-gray-500"
                                        : "bg-crimson"
                                }`}
                                onClick={minusLanguage}
                            >
                                <FaMinus />
                            </div>
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
                                {languages.map((language, index) => (
                                    <tr key={language.id}>
                                        <td className="ml-4">
                                            <input
                                                type="text"
                                                id={`language_${language.id}`}
                                                name={`language_${language.id}`}
                                                className="form-control"
                                                onChange={(e) => {
                                                    setData(
                                                        `language_${language.id}`,
                                                        e.target.value
                                                    );
                                                }}
                                                value={
                                                    data[
                                                        `language_${language.id}`
                                                    ] || ""
                                                }
                                            />
                                        </td>
                                        <td className="pl-10">
                                            B
                                            <div className="accordion-body">
                                                <input
                                                    type="radio"
                                                    name={`speak_language_${language.id}`}
                                                    value="B"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `speak_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`speak_language_${language.id}`}
                                                    value="W"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `speak_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`speak_language_${language.id}`}
                                                    value="F"
                                                    onChange={(e) => {
                                                        setData(
                                                            `speak_language_${language.id}`,
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </td>

                                        {/* For Read */}
                                        <td className="pl-10">
                                            B
                                            <div className="accordion-body">
                                                <input
                                                    type="radio"
                                                    name={`read_language_${language.id}`}
                                                    value="B"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `read_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`read_language_${language.id}`}
                                                    value="W"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `read_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`read_language_${language.id}`}
                                                    value="F"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `read_language_${language.id}`,
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </td>

                                        {/* For Write */}
                                        <td className="pl-10">
                                            B
                                            <div className="accordion-body">
                                                <input
                                                    type="radio"
                                                    name={`write_language_${language.id}`}
                                                    value="B"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `write_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`write_language_${language.id}`}
                                                    value="W"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `write_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`write_language_${language.id}`}
                                                    value="F"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `write_language_${language.id}`,
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </td>

                                        <td className="pl-10">
                                            B
                                            <div className="accordion-body">
                                                <input
                                                    type="radio"
                                                    name={`understand_language_${language.id}`}
                                                    value="B"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `understand_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`understand_language_${language.id}`}
                                                    value="W"
                                                    // required
                                                    onChange={(e) => {
                                                        setData(
                                                            `understand_language_${language.id}`,
                                                            e.target.value
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
                                                    name={`understand_language_${language.id}`}
                                                    value="F"
                                                    onChange={(e) => {
                                                        setData(
                                                            `understand_language_${language.id}`,
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-col gap-2 mt-4">
                            <label
                                htmlFor="computer_skills"
                                className="text-sm font-semibold"
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
                        <h1 className="text-slate-400 text-sm my-4 font-bold">
                            INTERNSHIP PLAN
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name_academic"
                                    className="text-sm font-semibold"
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
                                    className="text-sm font-semibold"
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
                                    className="text-sm font-semibold"
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
                                    className="text-sm font-semibold"
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
                                    className="text-sm font-semibold"
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
                                    htmlFor="specific_skills"
                                    className="text-sm font-semibold"
                                >
                                    Specific skills or knowledge you want to
                                    develop or enhance during the internship
                                </label>
                                <textarea
                                    name="specific_skills"
                                    id="specific_skills"
                                    className="rounded-md h-full"
                                    onChange={(e) =>
                                        setData(
                                            "specific_skills",
                                            e.target.value
                                        )
                                    }
                                    required
                                    value={data.specific_skills}
                                ></textarea>
                                {errors.specific_skills && (
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
                                    className="text-sm font-semibold"
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
                                    className="text-sm font-semibold"
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
                            onClick={(e) => {
                                if (!window.confirm("Are You Sure?")) {
                                    e.preventDefault();
                                }
                            }}
                            className="bg-crimson text-center w-full h-fit mt-4 py-4 rounded-full hover:scale-95 duration-150 text-white font-bold"
                        >
                            Submit
                        </button>
                    </form>{" "}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
