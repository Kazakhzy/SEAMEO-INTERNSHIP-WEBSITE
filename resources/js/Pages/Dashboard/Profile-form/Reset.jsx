import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Index = ({ auth, profile, education }) => {
    const { data, setData, post, progress, errors, reset } = useForm({
        id_user: auth.user.id,
        profil: null,
        place_birth: profile.place_birth,
        date_birth: profile.date_birth,
        gender: profile.gender,
        nik_passport: profile.nik_passport,
        school_university: profile.school_university,
        nim_student: profile.nim_student,
        education: profile.education,
        religion: profile.religion,
        address_id: profile.address_id,
        phone: profile.phone,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileChange = (e) => {
        setData("profil", e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("profile-form.reset_update", { id: profile.id }), {
            forceFormData: true,
            onSuccess: () => window.location.reload(),
        });
    };

    const [Confirmation, setConfirmation] = useState(false);

    const handleConfirmation = () => {
        setConfirmation(true);
    };

    const handleCancel = () => {
        setConfirmation(false);
    };

    const educationOptions = education ? education.education.split(", ") : [];

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
                Edit Your Profile Form
            </h1>

            <div className="mt-6">
                <div className="bg-white mb-10 w-full h-full border-2 py-4 px-6 shadow-md rounded-xl">
                    <div className="flex gap-2 items-center text-crimson font-semibold">
                        <hr className="border-2 border-crimson w-4" />
                        <h1>Personal Data</h1>
                    </div>
                    <p className="text-sm"> * Must be filled all.</p>
                    <form
                        onSubmit={handleSubmit}
                        method="post"
                        className="mt-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <label
                                        className="font-semibold"
                                        htmlFor="profil"
                                    >
                                        Profile Picture
                                    </label>
                                    <a
                                        href={profile.profil}
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
                                    name="profil"
                                    id="profil"
                                    onChange={handleFileChange}
                                />
                                {errors.profil && (
                                    <div className="text-red-500">
                                        {errors.profil}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={auth.user.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <div className="text-red-500">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="fullname"
                                >
                                    Fullname
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    value={auth.user.name}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="place_birth"
                                >
                                    Place Of Birth
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="text"
                                    name="place_birth"
                                    id="place_birth"
                                    onChange={(e) =>
                                        setData("place_birth", e.target.value)
                                    }
                                    value={data.place_birth}
                                />
                                {errors.place_birth && (
                                    <div className="text-red-500">
                                        {errors.place_birth}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="date_birth"
                                >
                                    Date Of Birth
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="date"
                                    name="date_birth"
                                    id="date_birth"
                                    onChange={(e) =>
                                        setData("date_birth", e.target.value)
                                    }
                                    value={data.date_birth}
                                />
                                {errors.date_birth && (
                                    <div className="text-red-500">
                                        {errors.date_birth}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="gender"
                                >
                                    Gender
                                </label>
                                <select
                                    className="form-control"
                                    name="gender"
                                    id="gender"
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                    value={data.gender}
                                >
                                    <option value="">-Choose-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && (
                                    <div className="text-red-500">
                                        {errors.gender}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="nik_passport"
                                >
                                    NIK / Passport Number
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="number"
                                    name="nik_passport"
                                    id="nik_passport"
                                    onChange={(e) =>
                                        setData("nik_passport", e.target.value)
                                    }
                                    value={data.nik_passport}
                                />
                                {errors.nik_passport && (
                                    <div className="text-red-500">
                                        {errors.nik_passport}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="school_university"
                                >
                                    School / University Name
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="text"
                                    name="school_university"
                                    id="school_university"
                                    onChange={(e) =>
                                        setData(
                                            "school_university",
                                            e.target.value
                                        )
                                    }
                                    value={data.school_university}
                                />
                                {errors.school_university && (
                                    <div className="text-red-500">
                                        {errors.school_university}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="nim_student"
                                >
                                    NIM / Student Identification Number
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="number"
                                    name="nim_student"
                                    id="nim_student"
                                    onChange={(e) =>
                                        setData("nim_student", e.target.value)
                                    }
                                    value={data.nim_student}
                                />
                                {errors.nim_student && (
                                    <div className="text-red-500">
                                        {errors.nim_student}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="education"
                                >
                                    Education Level
                                </label>
                                <select
                                    className="form-control"
                                    name="education"
                                    id="education"
                                    onChange={(e) =>
                                        setData("education", e.target.value)
                                    }
                                    value={data.education}
                                >
                                    <option value="">-Choose-</option>
                                    {educationOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.education && (
                                    <div className="text-red-500">
                                        {errors.education}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="religion"
                                >
                                    Religion
                                </label>
                                <select
                                    className="form-control"
                                    name="religion"
                                    id="religion"
                                    onChange={(e) =>
                                        setData("religion", e.target.value)
                                    }
                                    value={data.religion}
                                >
                                    <option value="">-Choose-</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Protestant">
                                        Protestant
                                    </option>
                                    <option value="Catholic">Catholic</option>
                                    <option value="Confucius">Confucius</option>
                                    <option value="Buddha">Buddha</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Others">Others</option>
                                </select>
                                {errors.religion && (
                                    <div className="text-red-500">
                                        {errors.religion}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="font-semibold"
                                    htmlFor="address_id"
                                >
                                    Address On ID
                                </label>
                                <input
                                    required
                                    className="form-control"
                                    type="text"
                                    name="address_id"
                                    id="address_id"
                                    onChange={(e) =>
                                        setData("address_id", e.target.value)
                                    }
                                    value={data.address_id}
                                />
                                {errors.address_id && (
                                    <div className="text-red-500">
                                        {errors.address_id}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-8">
                            <label className="font-semibold" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                required
                                className="form-control"
                                type="number"
                                name="phone"
                                id="phone"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                value={data.phone}
                            />
                            {errors.phone && (
                                <div className="text-red-500">
                                    {errors.phone}
                                </div>
                            )}
                        </div>
                        <h1 className="text-center text-gray-600 mt-4">
                            {" "}
                            <b>*NOTE: </b>
                            You cannot edit after submit, so please make sure
                            the data is correct.
                        </h1>

                        {Confirmation && (
                            <div className="fixed inset-0 bg-gray-600  bg-opacity-50 flex justify-center items-center">
                                <div className="bg-white flex justify-center gap-10 flex-col items-center w-[90%] md:w-[40rem] h-[40rem] md:h-96 p-6 rounded-md relative">
                                    <h1 className="text-4xl font-bold">
                                        Are You Sure?
                                    </h1>
                                    <div className="flex gap-10">
                                        <button
                                            type="submit"
                                            className="bg-crimson text-center w-20 h-10  mt-4  rounded-full hover:scale-95 duration-150 text-white font-bold"
                                        >
                                            Ya
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="text-crimson text-center w-20 h-10  mt-4  rounded-full hover:scale-95 duration-150 border-2 border-crimson font-bold"
                                        >
                                            Tidak
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                    <button
                        onClick={setConfirmation}
                        className="bg-crimson text-center w-full h-fit mt-4 py-4 rounded-full hover:scale-95 duration-150 text-white font-bold"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
