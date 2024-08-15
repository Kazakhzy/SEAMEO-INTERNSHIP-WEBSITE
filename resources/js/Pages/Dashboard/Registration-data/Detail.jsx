import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

export default function Dashboard({ auth, details }) {
    const [languages, setLanguages] = useState([{ id: 1 }]);

    const { data, setData, post, get } = useForm({
        status_accept: "Pending",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("registration.update", { id: details.id_user }), {
            method: "patch",
            forceFormData: true,
            onSuccess: () => window.location.reload(),
        });
    };

    const [modal, setmModal] = useState(false);
    const openModalConfirmation = (src) => {
        setIframeSrc(src);
        setIsModalOpen(true);
    };

    const closeModalConfirmation = () => {
        setIsModalOpen(false);
        setIframeSrc("");
    };

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
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex gap-4 md:text-2xl text-crimson  items-center">
                    <Link href="/registration-data">
                        <IoMdArrowRoundBack />
                    </Link>

                    <h1 className=" font-semibold flex  gap-2 items-center">
                        Detail Dokumen & Profil{" "}
                        <span className="text-white bg-crimson px-2 rounded-full">
                            {" "}
                            {details.name}
                        </span>
                        {details.status_accept === "Pending" ? (
                            <div className="bg-yellow-500 w-fit text-xl text-white p-4 my-2  rounded-md">
                                {details.status_accept}
                            </div>
                        ) : details.status_accept === "Not Accepted" ? (
                            <div className="bg-red-500 w-fit text-xl text-white p-4 my-2  rounded-md">
                                {details.status_accept}
                            </div>
                        ) : (
                            <div className="bg-green-500 w-fit text-xl text-white p-4 my-2  rounded-md">
                                {details.status_accept}
                            </div>
                        )}
                    </h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="flex gap-2"
                >
                    <select
                        name="status_accept"
                        id=""
                        className="rounded-xl"
                        value={data.status_accept}
                        onChange={(e) =>
                            setData("status_accept", e.target.value)
                        }
                    >
                        <option value="Pending">-Set Status-</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Not Accepted">Not Accepted</option>
                        <option value="Pending">Pending</option>
                    </select>
                    <button
                        className="bg-crimson text-white px-4 py-2 rounded-xl"
                        type="submit"
                        onClick={(e) => {
                            if (!window.confirm("Are You Sure?")) {
                                e.preventDefault();
                            }
                        }}
                    >
                        Set
                    </button>
                </form>
            </div>
            <div className="mt-4 mb-10">
                <div className="bg-white w-full overflow-auto h-[40rem] px-10 py-4 shadow-md rounded-xl">
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <h1 className="font-bold text-gray-500">
                                DATA PROFIL
                            </h1>
                            {details.reset_form == "yes" && (
                                <p>* User can edit profile now.</p>
                            )}
                        </div>
                        {details.reset_form == "no" ? (
                            <Link
                                href={`/profile-form-reset/update/${details.id_user}`}
                                onClick={(e) => {
                                    if (!window.confirm("Are You Sure?")) {
                                        e.preventDefault();
                                    }
                                }}
                                method="post"
                                as="button"
                                className="border-2 border-crimson px-6 py-2 text-crimson hover:scale-90 hover:bg-crimson hover:text-white duration-150 font-semibold rounded-full"
                            >
                                Reset Profile
                            </Link>
                        ) : (
                            <Link
                                href={`/profile-form-reset/update/${details.id_user}`}
                                onClick={(e) => {
                                    if (!window.confirm("Are You Sure?")) {
                                        e.preventDefault();
                                    }
                                }}
                                method="post"
                                as="button"
                                className="border-2 border-crimson px-6 py-2 text-crimson hover:scale-90 hover:bg-crimson hover:text-white duration-150 font-semibold rounded-full"
                            >
                                Cancel Reset Profile
                            </Link>
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="profil" className="font-semibold">
                                Foto Profil
                            </label>
                            <img
                                src={`../../${details.profil}`}
                                alt="Profile"
                                className="rounded-md w-[118px] h-[177px] object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="email">
                                Email
                            </label>
                            <h1>{details.email}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="fullname">
                                Fullname
                            </label>
                            <h1>{details.name}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="font-semibold"
                                htmlFor="place_birth"
                            >
                                Place Of Birth
                            </label>
                            <h1>{details.place_birth}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="font-semibold"
                                htmlFor="date_birth"
                            >
                                Date Of Birth
                            </label>
                            <h1>{details.date_birth}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="gender">
                                Gender
                            </label>
                            <h1>{details.gender}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="font-semibold"
                                htmlFor="nik_passport"
                            >
                                NIK / Passport Number
                            </label>
                            <h1>{details.nik_passport}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="font-semibold"
                                htmlFor="school_university"
                            >
                                School / University Name
                            </label>
                            <h1>{details.school_university}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="font-semibold"
                                htmlFor="nim_student"
                            >
                                NIM / Student Identification Number
                            </label>
                            <h1>{details.nim_student}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="font-semibold"
                                htmlFor="education"
                            >
                                Education Level
                            </label>
                            <h1>{details.education}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="religion">
                                Religion
                            </label>
                            <h1>{details.religion}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="font-semibold"
                                htmlFor="address_id"
                            >
                                Address On ID
                            </label>
                            <h1>{details.address_id}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="phone">
                                Phone Number
                            </label>
                            <h1>{details.phone}</h1>
                        </div>
                    </div>{" "}
                    <h1 className="font-bold text-gray-500 mt-10">
                        DATA DOKUMEN
                    </h1>
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
                                ></iframe>
                            </div>
                        </div>
                    )}
                    <div className="grid  grid-cols-1 md:grid-cols-3 items-center gap-10 mt-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label
                                    className="font-semibold"
                                    htmlFor="incomplete_studies"
                                >
                                    Curriculum Vitae (CV){" "}
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(`../../${details.cv}`)
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label className="font-semibold">
                                    Portfolio & Certificate
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(
                                            `../../${details.portfolio_certificate}`
                                        )
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label className="font-semibold">
                                    Statement Of Incomplete Studies
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(
                                            `../../${details.incomplete_studies}`
                                        )
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label className="font-semibold">
                                    Letter Of Commitment{" "}
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(
                                            `../../${details.letter_commitment}`
                                        )
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label className="font-semibold">
                                    Statement of Non-Participation in Other
                                    Programs
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(
                                            `../../${details.letter_non_participant}`
                                        )
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label className="font-semibold">
                                    Health Insurance
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(
                                            `../../${details.health_insurance}`
                                        )
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label className="font-semibold">
                                    Passport
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(`../../${details.passport}`)
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-10">
                                <label className="font-semibold">
                                    Letter of Recommendation
                                </label>
                                <button
                                    onClick={() =>
                                        openModal(
                                            `../../${details.letter_recommendation}`
                                        )
                                    }
                                    className="bg-crimson hover:scale-90 duration-150 p-2 rounded-full text-white flex gap-2 items-center"
                                >
                                    <FiArrowUpRight />
                                    Lihat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
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
                                                            details[
                                                                `language_${
                                                                    index + 1
                                                                }`
                                                            ] || ""
                                                        }
                                                        disabled
                                                    />
                                                </td>
                                                <td className="pl-10">
                                                    B
                                                    <div className="accordion-body">
                                                        <input
                                                            type="radio"
                                                            disabled
                                                            name={`speak_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`speak_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`speak_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`read_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`read_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`read_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`write_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`write_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`write_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`understand_language_${
                                                                index + 1
                                                            }`}
                                                            value="B"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`understand_language_${
                                                                index + 1
                                                            }`}
                                                            value="W"
                                                            checked={
                                                                details[
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
                                                            disabled
                                                            name={`understand_language_${
                                                                index + 1
                                                            }`}
                                                            value="F"
                                                            checked={
                                                                details[
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
                    </div>
                    <div className="mt-4">
                        <h1 className="text-slate-400 text-sm my-4">
                            INTERNSHIP PLAN
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">
                                    Computer skills (list the computer software
                                    which you have mastered):{" "}
                                </label>
                                <h1>{details.computer_skills}</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">
                                    Name of Academic Adviser or Supervisor
                                </label>
                                <h1>{details.name_academic}</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">
                                    Preferred date and period to carry out
                                    internship at SEAMEO RECFON{" "}
                                </label>
                                <h1>{details.preferred_date}</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="reason_interest"
                                    className="text-sm font-semibold"
                                >
                                    Reason for your interest in interning at
                                    SEAMEO RECFON
                                </label>
                                <h1>{details.reason_interest}</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="topic_interested"
                                    className="text-sm font-semibold"
                                >
                                    Topic interested to work with SEAMEO RECFON
                                </label>
                                <h1>{details.topic_interested}</h1>
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
                                <h1>{details.preferred_nature}</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="spesific_skills"
                                    className="text-sm font-semibold"
                                >
                                    Specific skills or knowledge you want to
                                    develop or enhance during the internship
                                </label>
                                <h1>{details.spesific_skills}</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="expected_output"
                                    className="text-sm font-semibold"
                                >
                                    Expected Outputs and Outcomes
                                </label>
                                <h1>{details.expected_output}</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="current_source"
                                    className="text-sm font-semibold"
                                >
                                    Current source of financial support or donor
                                </label>
                                <h1>{details.current_source}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
