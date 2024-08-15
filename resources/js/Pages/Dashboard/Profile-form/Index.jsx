import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Index = ({ auth, profile, education }) => {
    const { data, setData, post, progress, errors, reset } = useForm({
        id_user: auth.user.id,
        profil: null,
        place_birth: "",
        date_birth: "",
        gender: "",
        nik_passport: "",
        school_university: "",
        nim_student: "",
        education: "",
        religion: "",
        address_id: "",
        phone: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileChange = (e) => {
        setData("profil", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("profile-form.store"), {
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
            {profile === null ? (
                <h1 className="text-4xl text-crimson font-semibold">
                    Please Complete Your Personal Data.
                </h1>
            ) : (
                <div className="flex items-center gap-4 text-green-500 text-4xl ">
                    <h1 className="font-semibold">Profile Form</h1>
                    <FaCheckCircle />
                </div>
            )}
            <div className="mt-6">
                <div className="bg-white mb-10 w-full h-full border-2 py-4 px-6 shadow-md rounded-xl">
                    <div className="flex gap-2 items-center text-crimson font-semibold">
                        <hr className="border-2 border-crimson w-4" />
                        <h1>Personal Data</h1>
                    </div>
                    {profile === null ? (
                        <>
                            <p className="text-sm"> * Must be filled all.</p>
                            <form
                                onSubmit={handleSubmit}
                                method="post"
                                className="mt-4"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="profil"
                                        >
                                            Profile Picture
                                        </label>
                                        <input
                                            required
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
                                            readOnly
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
                                            readOnly
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
                                                setData(
                                                    "place_birth",
                                                    e.target.value
                                                )
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
                                                setData(
                                                    "date_birth",
                                                    e.target.value
                                                )
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
                                                setData(
                                                    "gender",
                                                    e.target.value
                                                )
                                            }
                                            value={data.gender}
                                        >
                                            <option value="">-Choose-</option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
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
                                                setData(
                                                    "nik_passport",
                                                    e.target.value
                                                )
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
                                                setData(
                                                    "nim_student",
                                                    e.target.value
                                                )
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
                                                setData(
                                                    "education",
                                                    e.target.value
                                                )
                                            }
                                            value={data.education}
                                        >
                                            <option value="">-Choose-</option>
                                            {educationOptions.map(
                                                (option, index) => (
                                                    <option
                                                        key={index}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </option>
                                                )
                                            )}
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
                                                setData(
                                                    "religion",
                                                    e.target.value
                                                )
                                            }
                                            value={data.religion}
                                        >
                                            <option value="">-Choose-</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christian">
                                                Christian
                                            </option>
                                            <option value="Protestant">
                                                Protestant
                                            </option>
                                            <option value="Catholic">
                                                Catholic
                                            </option>
                                            <option value="Confucius">
                                                Confucius
                                            </option>
                                            <option value="Buddha">
                                                Buddha
                                            </option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Others">
                                                Others
                                            </option>
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
                                                setData(
                                                    "address_id",
                                                    e.target.value
                                                )
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
                                    <label
                                        className="font-semibold"
                                        htmlFor="phone"
                                    >
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
                                    You cannot edit after submit, so please make
                                    sure the data is correct.
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
                                                    Yes
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="text-crimson text-center w-20 h-10  mt-4  rounded-full hover:scale-95 duration-150 border-2 border-crimson font-bold"
                                                >
                                                    No
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
                                Submit
                            </button>
                        </>
                    ) : (
                        <>
                            <h1 className="text-lg mt-4 text-green-400">
                                Your Data Is Already Submitted.
                            </h1>
                            <>
                                <div className="grid grid-cols-1 mt-4 md:grid-cols-3 items-center gap-10">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="profil"
                                        >
                                            Profile Picture
                                        </label>
                                        <img
                                            src={profile.profil}
                                            alt="Profile"
                                            className="rounded-md w-[118px] h-[177px] object-cover object-center"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <h1>{auth.user.email}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="fullname"
                                        >
                                            Fullname
                                        </label>
                                        <h1>{auth.user.name}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="place_birth"
                                        >
                                            Place Of Birth
                                        </label>
                                        <h1>{profile.place_birth}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="date_birth"
                                        >
                                            Date Of Birth
                                        </label>
                                        <h1>{profile.date_birth}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="gender"
                                        >
                                            Gender
                                        </label>
                                        <h1>{profile.gender}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="nik_passport"
                                        >
                                            NIK / Passport Number
                                        </label>
                                        <h1>{profile.nik_passport}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="school_university"
                                        >
                                            School / University Name{" "}
                                        </label>
                                        <h1>{profile.school_university}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="nim_student"
                                        >
                                            NIM / Student Identification Number
                                        </label>
                                        <h1>{profile.nim_student}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="education"
                                        >
                                            Education Level
                                        </label>
                                        <h1>{profile.education}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="religion"
                                        >
                                            Religion
                                        </label>
                                        <h1>{profile.religion}</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="font-semibold"
                                            htmlFor="address_id"
                                        >
                                            Address On ID
                                        </label>
                                        <h1>{profile.address_id}</h1>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-8">
                                    <label
                                        className="font-semibold"
                                        htmlFor="phone"
                                    >
                                        Phone Number
                                    </label>
                                    <h1>{profile.phone}</h1>
                                </div>
                                <h1 className="text-center text-gray-600 mt-10">
                                    <b>*NOTE: </b>
                                    Wait for next announcement.
                                </h1>
                            </>
                        </>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
