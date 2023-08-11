import React from "react";
import logo from "../../../assets/logo/icon.png";
const BottomBanner = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#070109]">
            <div className="w-fit">
                <img
                    className="w-20 outline outline-stone-300 shadow-2xl shadow-slate-50"
                    src={logo}
                    alt=""
                />
            </div>
        </div>
    );
};

export default BottomBanner;
