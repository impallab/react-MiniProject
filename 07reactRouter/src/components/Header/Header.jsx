import React from 'react';
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black border-white px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}

                    <Link to="/" className="flex items-center">
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/43759a21936611.56309eef8940a.png"
                            className="h-14 rounded-full w-16 border border-red-600"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">

                        {/* login */}

                        <Link
                            to="#"
                            className="text-cyan-300 border border-cyan-300 bg-black hover:text-red-600 hover:border-red-600 focus:ring-4  font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>

                        {/* get-started */}

                        <Link
                            to="#"
                            className="text-cyan-300 border border-cyan-300 bg-black hover:text-red-600 hover:border-red-600 focus:ring-4  font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "thover:text-red-600" : "text-cyan-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "thover:text-red-600" : "text-cyan-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "thover:text-red-600" : "text-cyan-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "thover:text-red-600" : "text-cyan-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
