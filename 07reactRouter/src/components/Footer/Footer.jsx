import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="bg-gray-200 border-y sticky">
            <div className="mx-10 w-full max-w-screen-xl lg:py-2">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="" className="flex items-center">
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/43759a21936611.56309eef8940a.png"
                                className="h-16 w-18 rounded-full"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="font-medium text-blue-800">
                                <li className="mb-4">
                                    <NavLink to="" className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700 rounded-full lg:p-1" : "text-gray-500"}  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="about" className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700 rounded-full lg:p-1" : "text-gray-500"}  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <NavLink
                                        to="https://github.com/impallab"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700 rounded-full lg:p-1" : "text-gray-500"}  lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://pallab-portfolio.netlify.app/" className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700 rounded-full lg:p-1" : "text-gray-500"}  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        PortFolio
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700 rounded-full lg:p-1" : "text-gray-500"}  lg:border-0 hover:text-orange-700 lg:p-0`
                            }>
                                <li className="mb-4">
                                    <NavLink to="#" className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b $  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b $  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        Terms &amp; Conditions
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        All Rights Deserved {() => new Date().getFullYear()} impAllab Inc.
                        <a href="https://pallab-portfolio.netlify.app/" className="hover:underline">
                            Pallab Dandapat
                        </a>
                        © 2024
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <NavLink to="https://www.facebook.com/" className="bg-black p-1 rounded-full text-cyan-300 border border-cyan-300 hover:text-black hover:bg-cyan-300 hover:border-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </NavLink>
                        <NavLink to="#" className="bg-black p-1 rounded-full text-cyan-300 border border-cyan-300 hover:text-black hover:bg-cyan-300 hover:border-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </NavLink>
                        <NavLink to="https://twitter.com/Pallab30176388" className="bg-black p-1 rounded-full text-cyan-300 border border-cyan-300 hover:text-black hover:bg-cyan-300 hover:border-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </NavLink>
                        <NavLink to="https://github.com/impallab" className="bg-black p-1 rounded-full text-cyan-300 border border-cyan-300 hover:text-black hover:bg-cyan-300 hover:border-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/impallab/" className="bg-black p-1 rounded-full text-cyan-300 border border-cyan-300 hover:text-black hover:bg-cyan-300 hover:border-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24" // viewBox updated to match LinkedIn icon's dimensions
                            >
                                <path d="M1.73 2.75h3.18v17.49h-3.18v-17.49zm20.02 4.01c-2.07 0-3.63 1.13-4.26 2.2h-.06v-1.9h-3.2v17.48h3.23v-9.16c0-.32.03-.64.11-.89.22-.64.72-1.31 1.56-1.31 1.1 0 1.55.84 1.55 2.07v9.29h3.24v-9.91c0-4.25-2.27-6.26-5.29-6.26-2.52 0-3.63 1.68-4.25 2.83h-.06v-2.45h-3.2c.05.99-.67 10.51 0 11.2h3.2v-1.58c.43-.03 1.1-.06 1.66-.06 2.42 0 3.67 1.4 3.67 4.21v6.08h3.24v-9.91c0-4.25-2.27-6.26-5.29-6.26zm-13.5 9.95v-9.95h-3.24v9.95h3.24z" />
                            </svg>
                            <span className="sr-only">LinkedIn account</span>
                        </NavLink>

                    </div>
                </div>
            </div>
        </footer>
    );
}
