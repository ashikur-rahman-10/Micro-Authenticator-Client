import React from "react";
import logo from "../../../assets/logo/icon.png";
import { AiTwotoneThunderbolt } from "react-icons/ai";
const BottomBanner = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#070109]">
            <div className=" h-fit flex flex-col justify-center items-center gap-10 text-white ">
                <img
                    className="w-20  shadow-2xl shadow-slate-50"
                    src={logo}
                    alt=""
                />
                <h1 className="text-7xl font-bold">Get started with Micro</h1>
                <h3 className="text-3xl font-semibold">Get instant access.</h3>
                <button className="btn hover:btn-outline w-fit px-32 py-3 h-fit font-semibold text-lg hover:bg-slate-300 hover:scale-105 duration-500">
                    <span>
                        <AiTwotoneThunderbolt></AiTwotoneThunderbolt>
                    </span>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default BottomBanner;
