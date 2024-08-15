import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import Modal from "../../../Components/Modal";
import { useState } from "react";
import Pagination from "../../../Components/Pagination";

const Index = ({ auth, user }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const { user: userData } = usePage().props; // Renaming 'admin' to 'adminData' to avoid conflict

    // Insert
    const { data, setData, post } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.store"), {
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
            <h1 className="text-4xl text-crimson font-semibold rounded-full">
                User Page
            </h1>
            <div className="mt-4 mb-10">
                <div className="bg-white w-full overflow-auto full px-10 py-4 shadow-md rounded-xl">
                    <div className="flex w-full justify-between">
                        <div className="flex gap-2 items-center text-crimson font-semibold">
                            <hr className="border-2 border-crimson w-4" />
                            <h1>All User Data</h1>
                        </div>
                    </div>
                    <Modal show={showModal} onClose={handleCloseModal}>
                        <h1 className="text-lg font-bold">Tambah User</h1>
                        <form
                            onSubmit={submit}
                            method="post"
                            className="mt-4 grid grid-cols-1 gap-4"
                        >
                            <div>
                                <label htmlFor="name">Nama</label>
                                <input
                                    type="text"
                                    className="rounded-md w-full"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="rounded-md w-full"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="rounded-md w-full"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="password"
                                />
                            </div>
                            <button
                                className="bg-crimson items-center rounded-md flex gap-2 px-6 py-2 text-white text-center"
                                type="submit"
                                onClick={() => handleSubmit()}
                            >
                                Simpan
                            </button>
                        </form>
                    </Modal>
                    <div className=" text-slate-900 mt-4">
                        <table class="w-full text-start">
                            <thead>
                                <tr>
                                    <th class="text-start px-4 py-2">No</th>
                                    <th class="text-start px-4 py-2">
                                        Username
                                    </th>
                                    <th class="text-start px-4 py-2">Email</th>
                                    <th class="text-start px-4 py-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {user.data.map((userItem, index) => (
                                    <tr className="bg-gray-100">
                                        <td class="p-4 my-4">
                                            {" "}
                                            {(userData.current_page - 1) *
                                                userData.per_page +
                                                index +
                                                1}
                                        </td>
                                        <td class="p-4 my-4">
                                            {userItem.name}
                                        </td>
                                        <td class="p-4 my-4">
                                            {userItem.email}
                                        </td>
                                        <td>
                                            <Link
                                                href={route("user.delete", {
                                                    id: userItem.id,
                                                })}
                                                method="delete"
                                                as="button"
                                                onClick={(e) => {
                                                    if (
                                                        !window.confirm(
                                                            "Are You Sure?"
                                                        )
                                                    ) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                <div className="bg-red-500 w-fit text-white p-4 my-2 md:my-4 rounded-md">
                                                    <FaRegTrashAlt />
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center gap-4 items-center mt-4 ">
                        <Pagination
                            currentPage={userData.current_page}
                            lastPage={userData.last_page}
                            links={userData.links}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
