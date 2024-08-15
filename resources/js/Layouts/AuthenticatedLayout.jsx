import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import Logo from "../../../public/home/Logo.svg";
import { IoMdArrowBack, IoMdArrowDown, IoMdHome } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { GrFormNext } from "react-icons/gr";

export default function Authenticated({ user, header, children }) {
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

    const { props } = usePage();
    const { auth, cek_document, user_data, cek_profile } = props;

    const userName = user.name;
    const userInitial = userName.charAt(0).toUpperCase();
    return (
        <div className="h-full bg-gray-100">
            <div className="flex font-poppins">
                <Sidebar user={user} cek_document={cek_document} />
                <div className="flex md:absolute md:right-0 flex-col w-full md:w-[82%]">
                    <div className="bg-crimson w-full h-24 py-4 px-6 md:px-10">
                        <div className="flex justify-between items-center h-full">
                            <Link
                                href="/"
                                className="hidden md:flex gap-2 items-center h-full text-white text-xl font-bold"
                            >
                                <IoMdArrowBack />
                                <p>Back</p>
                            </Link>
                            <div className="text-white md:hidden">
                                <RxHamburgerMenu onClick={toggleMenu} />
                            </div>

                            <Link
                                href="/profile"
                                className="flex gap-2 items-center hover:scale-95 duration-150 text-white"
                            >
                                {cek_profile && cek_profile.profil ? (
                                    <img
                                        src={cek_profile.profil}
                                        className="w-10 h-10 rounded-full object-cover object-center"
                                        alt="Profile"
                                    />
                                ) : (
                                    <div className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-black">
                                        {userInitial}
                                    </div>
                                )}
                                <h1>Hi, {user.name}</h1>
                                <GrFormNext />
                            </Link>
                        </div>
                    </div>
                    <div className=" px-6 md:px-12 pt-6">
                        <main>{children}</main>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="bg-slate-800/20 md:hidden backdrop-blur-sm w-full h-screen fixed z-40">
                        <div className="fixed inset-0 px-4  bg-white shadow-md w-[80%] z-60 flex flex-col  md:hidden">
                            <div className="flex justify-between items-center pt-10">
                                <img src={Logo} alt="Logo" className="w-40" />
                                <IoClose
                                    className="text-2xl text-recfonred"
                                    onClick={toggleMenu}
                                />
                            </div>
                            <ul className="flex flex-col  gap-4 pt-20 text-recfonred font-semibold">
                                <li
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
                                </li>

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
                                {cek_document === null ? (
                                    <div
                                        className={`flex gap-4 items-center font-semibold ${
                                            isActive("/document-form")
                                                ? "text-crimson"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <hr
                                            className={`border-2 h-6 ${
                                                isActive("/document-form")
                                                    ? "border-crimson"
                                                    : ""
                                            }`}
                                        />
                                        <MdOutlineAppRegistration />
                                        <Link href="/document-form">
                                            Document Form
                                        </Link>
                                    </div>
                                ) : (
                                    <div
                                        className={`flex gap-4 items-center font-semibold ${
                                            isActive("/document-form-done")
                                                ? "text-crimson"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <hr
                                            className={`border-2 h-6 ${
                                                isActive("/document-form-done")
                                                    ? "border-crimson"
                                                    : ""
                                            }`}
                                        />
                                        <MdOutlineAppRegistration />
                                        <Link href="/document-form-done">
                                            Document Form
                                        </Link>
                                    </div>
                                )}
                            </ul>
                            <Link
                                href={route("logout")}
                                method="post"
                                className="bg-recfonred absolute bottom-12 w-28 h-10 rounded-md flex-center text-white mt-4"
                                onClick={toggleMenu}
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
