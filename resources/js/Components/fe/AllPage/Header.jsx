import { Link, usePage } from "@inertiajs/react";
import Logo from "../../../../../public/home/Logo.svg";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { url } = usePage();

    const getLinkClasses = (path) => {
        return url === path ? "flex flex-col items-center gap-2" : "";
    };
    const { auth } = usePage().props;

    return (
        <header className="fixed z-[99] overflow-hidden w-screen md:w-full">
            {isMenuOpen && (
                <div className="bg-white/20 md:hidden backdrop-blur-sm w-full h-screen fixed z-40">
                    <div className="fixed inset-0 px-4  bg-white shadow-md w-[80%] z-60 flex flex-col  md:hidden">
                        <div className="flex justify-between items-center pt-6">
                            <img src={Logo} alt="Logo" className="w-40" />
                            <IoClose
                                className="text-2xl text-recfonred"
                                onClick={toggleMenu}
                            />
                        </div>
                        <ul className="flex flex-col  gap-4 pt-20 text-recfonred font-semibold">
                            <li>
                                <Link href="/" onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" onClick={toggleMenu}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/applications" onClick={toggleMenu}>
                                    Application
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallerys" onClick={toggleMenu}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" onClick={toggleMenu}>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                        {auth.user ? (
                            <Link
                                href="/dashboards"
                                className="bg-recfonred absolute bottom-12 w-28 h-10 rounded-md flex-center text-white mt-4"
                                onClick={toggleMenu}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-recfonred absolute bottom-12 w-28 h-10 rounded-md flex-center text-white mt-4"
                                onClick={toggleMenu}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
            <nav className=" bg-white pb-6 pt-2 ">
                <div className="wrapper flex items-end justify-between">
                    <img src={Logo} alt="Logo" />
                    <div className="md:flex hidden  items-end gap-10">
                        <ul className="flex items-start gap-10 text-recfonred font-semibold">
                            <li className={getLinkClasses("/")}>
                                <Link href="/">Home</Link>
                                {url === "/" && (
                                    <hr className="border-[1.5px] border-recfonred w-20" />
                                )}
                            </li>
                            <li className={getLinkClasses("/about-us")}>
                                <Link href="/about-us">About Us</Link>
                                {url === "/about-us" && (
                                    <hr className="border-[1.5px] border-recfonred w-20" />
                                )}
                            </li>
                            <li className={getLinkClasses("/applications")}>
                                <Link href="/applications">Application</Link>
                                {url === "/applications" && (
                                    <hr className="border-[1.5px] border-recfonred w-20" />
                                )}
                            </li>
                            <li className={getLinkClasses("/gallerys")}>
                                <Link href="/gallerys">Gallery</Link>
                                {url === "/gallerys" && (
                                    <hr className="border-[1.5px] border-recfonred w-20" />
                                )}
                            </li>
                            <li className={getLinkClasses("/faqs")}>
                                <Link href="/faqs">FAQ</Link>
                                {url === "/faqs" && (
                                    <hr className="border-[1.5px] border-recfonred w-20" />
                                )}
                            </li>
                        </ul>
                        {auth.user ? (
                            <Link
                                href="/dashboards"
                                className="bg-recfonred  w-28 h-10 rounded-md flex-center text-white mt-4"
                                onClick={toggleMenu}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-recfonred  w-28 h-10 rounded-md flex-center text-white mt-4"
                                onClick={toggleMenu}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                    <div className="md:hidden">
                        <RxHamburgerMenu
                            className="text-2xl "
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
