import { useState } from "react";

import { Link, usePage } from "@inertiajs/react";
import Logo from "../../../public/home/Logo.svg";
import { IoMdHome } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { MdOutlineAppRegistration } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
const Sidebar = ({ user }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const isActive = (url) => {
        const { url: currentUrl } = usePage();
        return currentUrl.startsWith(url);
    };

    // Nav
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const { url } = usePage();

    const getLinkClasses = (path) => {
        return url === path ? "flex flex-col items-center gap-2" : "";
    };
    const isPenggunaActive = isActive("/data-admin") || isActive("/data-user");

    const level = user.level;

    const { props } = usePage();
    const { auth, cek_document, user_data, cek_profile } = props;
    return (
        <>
            <div className="w-[18%] h-screen md:fixed hidden md:block bg-white ">
                <div className="flex justify-center p-4">
                    <img src={Logo} alt="Logo" className="w-40" />
                </div>
                <div className="flex flex-col gap-2 mt-8">
                    <div className="flex flex-col ">
                        <h1 className="text-gray-300 p-4 text-sm font-semibold">
                            DASHBOARD PAGE
                        </h1>
                        <div className="flex flex-col gap-8">
                            <div
                                className={`flex gap-4 items-center font-semibold ${
                                    isActive("/dashboards")
                                        ? "text-crimson"
                                        : "text-gray-400"
                                }`}
                            >
                                <hr
                                    className={`border-2 h-6 ${
                                        isActive("/dashboards")
                                            ? "border-crimson"
                                            : ""
                                    }`}
                                />
                                <IoMdHome />
                                <Link href="/dashboards">Dashboard</Link>
                            </div>
                            {level === "user" && (
                                <>
                                    <div
                                        className={`flex gap-4 items-center font-semibold ${
                                            isActive("/profile-form")
                                                ? "text-crimson"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <hr
                                            className={`border-2 h-6 ${
                                                isActive("/profile-form")
                                                    ? "border-crimson"
                                                    : ""
                                            }`}
                                        />
                                        <MdOutlineAppRegistration />
                                        <Link href="/profile-form">
                                            Profile Form
                                        </Link>
                                    </div>

                                    <div
                                        className={`flex gap-4 items-center font-semibold ${
                                            isActive("/document-form-done") ||
                                            isActive("/document-form")
                                                ? "text-crimson"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <hr
                                            className={`border-2 h-6 ${
                                                isActive(
                                                    "/document-form-done"
                                                ) || isActive("/document-form")
                                                    ? "border-crimson"
                                                    : ""
                                            }`}
                                        />
                                        <MdOutlineAppRegistration />
                                        <Link href="/document-form-done">
                                            Document Form
                                        </Link>
                                    </div>
                                </>
                            )}
                            {level === "admin" && (
                                <>
                                    {/* <div
                                        className={`flex gap-4 items-center font-semibold ${
                                            isActive("/education-dropdown")
                                                ? "text-crimson"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <hr
                                            className={`border-2 h-6 ${
                                                isActive("/education-dropdown")
                                                    ? "border-crimson"
                                                    : ""
                                            }`}
                                        />
                                        <MdOutlineAppRegistration />
                                        <Link href="/education-dropdown">
                                            Education Level Dropdown
                                        </Link>
                                    </div> */}
                                    <div
                                        onClick={toggleDropdown}
                                        className={`flex gap-4 pr-4 items-center justify-between font-semibold cursor-pointer ${
                                            isPenggunaActive
                                                ? "text-crimson"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <div className="flex gap-2 items-center">
                                            <hr
                                                className={`border-2 h-6 ${
                                                    isPenggunaActive
                                                        ? "border-crimson"
                                                        : ""
                                                }`}
                                            />
                                            <div className="flex gap-4 items-center pl-2">
                                                <MdOutlineAppRegistration />
                                                <span>All Users</span>
                                            </div>
                                        </div>
                                        <FaChevronDown
                                            className={` ${
                                                isDropdownOpen
                                                    ? "rotate-180 text-crimson"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    {isDropdownOpen && (
                                        <div className="-mt-6 flex flex-col  w-full pl-10">
                                            <Link
                                                href="/data-admin"
                                                className={`px-4 py-2 ${
                                                    isActive("/data-admin")
                                                        ? "text-crimson font-bold"
                                                        : "text-gray-700"
                                                }  hover:bg-gray-100`}
                                            >
                                                Admin Data
                                            </Link>
                                            <Link
                                                href="/data-user"
                                                className={`px-4 py-2 ${
                                                    isActive("/data-user")
                                                        ? "text-crimson font-bold"
                                                        : "text-gray-700"
                                                }  hover:bg-gray-100`}
                                            >
                                                User Data
                                            </Link>
                                        </div>
                                    )}

                                    <div
                                        className={`flex gap-4 items-center font-semibold ${
                                            isActive("/registration-data")
                                                ? "text-crimson"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <hr
                                            className={`border-2 h-6 ${
                                                isActive("/registration-data")
                                                    ? "border-crimson"
                                                    : ""
                                            }`}
                                        />
                                        <MdOutlineAppRegistration />
                                        <Link href="/registration-data">
                                            Registration Data
                                        </Link>
                                    </div>
                                </>
                            )}

                            <div className="px-4 text-white ">
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="bg-crimson shadow-md gap-4 rounded-md w-full h-16 flex justify-center items-center"
                                >
                                    <CiLogout />
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
