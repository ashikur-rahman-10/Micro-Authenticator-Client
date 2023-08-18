import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavigationBar = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()
            .then((result) => {})
            .catch((err) => {});
    };
    const navbarOptions = (
        <div className="flex lg:flex-row md:items-center uppercase flex-col gap-2 ">
            <NavLink
                to={"/"}
                className="hover:text-blue-400  border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl"
            >
                Products
            </NavLink>
            <NavLink className="hover:text-blue-400  border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl">
                Solutions
            </NavLink>
            <NavLink className="hover:text-blue-400  border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl">
                Resources
            </NavLink>
            <NavLink className="hover:text-blue-400  border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl">
                Docs
            </NavLink>
            <NavLink className="hover:text-blue-400  border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl">
                Contact
            </NavLink>
            {!user ? (
                <NavLink
                    to={"/login"}
                    className="hover:text-blue-400  border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl"
                >
                    Join
                </NavLink>
            ) : (
                <button
                    onClick={handleLogout}
                    className="hover:text-blue-400  border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl"
                >
                    Logout
                </button>
            )}
        </div>
    );
    return (
        <div className="bg-black bg-opacity-40">
            <div className="navbar  max-w-6xl text-white mx-auto w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navbarOptions}
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <img
                            className="h-12"
                            src="https://raw.githubusercontent.com/ashikur-rahman-10/Micro-Authenticator-Client/f93b9d1bee8b6641f12db734c83eec92821e3d0a/src/assets/logo/logo.svg"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="w-fit  hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                        {navbarOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
