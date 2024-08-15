import CustomPagination from "@/Components/CustomPagination";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoEyeOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";

export default function Dashboard({ auth, datas, filter }) {
    const { data, setData, post, get } = useForm({
        filter: "",
    });

    const submit = (e) => {
        e.preventDefault();
        get(route("registration.index"), {
            onSuccess: () => window.location.reload(),
        });
    };
    let bgColor = "";
    if (datas.status === "Pending") {
        bgColor = "bg-yellow-500";
    } else if (datas.status === "Not Accepted") {
        bgColor = "bg-red-500";
    } else {
        bgColor = "bg-green-500";
    }

    const { datas: datasData } = usePage().props;

    // Search
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const filteredData = datas.data.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <h1 className="text-4xl text-crimson font-semibold">
                    Filter Acceptance Status
                </h1>
            </div>
            <a
                href="/pdf-registration"
                className="flex items-center bg-green-400 text-white p-2 rounded-full w-fit gap-4 my-4 hover:bg-green-600 hover:scale-105 duration-150"
            >
                <h1>Download Accepted Registrant</h1>
                <MdFileDownload />
            </a>
            <div className="mt-4 mb-10">
                <div className="bg-white w-full overflow-auto full px-10 py-4 shadow-md rounded-xl">
                    <div className=" text-slate-900 mt-4">
                        <div className="flex justify-between">
                            <div className="relative">
                                <IoSearchOutline className="text-primary bg-white p-1 font-bold text-4xl rounded-xl absolute left-2 top-1/2 transform -translate-y-1/2" />
                                <input
                                    type="email"
                                    className="p-2 pl-14 h-12 rounded-[10px] "
                                    placeholder="Search...."
                                    onChange={handleSearchChange}
                                    value={searchQuery}
                                />
                            </div>
                            <form
                                onSubmit={submit}
                                className="flex gap-2 items-center"
                            >
                                <select
                                    name="filter"
                                    id="filter"
                                    className="rounded-full"
                                    onChange={(e) =>
                                        setData("filter", e.target.value)
                                    }
                                    value={data.filter}
                                >
                                    <option value="">-Choose-</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Not Accepted">
                                        Not Accepted
                                    </option>
                                    <option value="Accepted">Accepted</option>
                                </select>
                                <button
                                    type="submit"
                                    className="bg-crimson px-4 py-2 rounded-full text-white w-fit"
                                >
                                    Set
                                </button>
                            </form>
                        </div>
                        <table className="w-full text-start">
                            <thead>
                                <tr>
                                    <th className="text-start py-2">No</th>
                                    <th className="text-start py-2">Name</th>
                                    <th className="text-start py-2">
                                        Acceptance Status
                                    </th>
                                    <th className="text-start py-2">Detail</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {filteredData.map((data, index) => (
                                    <tr className="border-b" key={data.id}>
                                        <td className="p-4 my-4">
                                            {(datasData.current_page - 1) *
                                                datasData.per_page +
                                                index +
                                                1}
                                        </td>
                                        <td className="p-4 my-4">
                                            {data.name}
                                        </td>
                                        <td className="p-4 my-4">
                                            {data.status_accept ===
                                            "Pending" ? (
                                                <div className="bg-yellow-500 w-fit  text-white p-4 my-2 md:my-4 rounded-md">
                                                    {data.status_accept}
                                                </div>
                                            ) : data.status_accept ===
                                              "Not Accepted" ? (
                                                <div className="bg-red-500 w-fit  text-white p-4 my-2 md:my-4 rounded-md">
                                                    {data.status_accept}
                                                </div>
                                            ) : (
                                                <div className="bg-green-500 w-fit  text-white p-4 my-2 md:my-4 rounded-md">
                                                    {data.status_accept}
                                                </div>
                                            )}
                                        </td>
                                        <td>
                                            <Link
                                                href={route(
                                                    "registration.detail",
                                                    data.id
                                                )}
                                                method="get"
                                            >
                                                <div className="bg-red-500 w-fit text-xl text-white p-4 my-2 md:my-4 rounded-md">
                                                    <IoEyeOutline />
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center gap-4 items-center mt-4 ">
                        <CustomPagination
                            total={datasData.last_page} // Assuming last_page is the total number of pages
                            current={datasData.current_page} // Assuming current_page is the current page number
                            filter={filter} // Assuming data.filter holds the current filter value
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
