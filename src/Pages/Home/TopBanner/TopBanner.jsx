import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const TopBanner = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="w-full flex">
                <div className="space-y-10">
                    <h1 className="text-white text-6xl font-bold">
                        The fastest way to build web3 apps.
                    </h1>
                    <h3 className="text-white text-2xl ">
                        SDKs in every language, smart contracts, tools, and
                        infrastructure for web3 development.
                    </h3>
                    <button className="btn btn-square w-fit px-10 font-semibold text-lg hover:bg-slate-300 hover:scale-105 duration-500">
                        <span>
                            <AiTwotoneThunderbolt></AiTwotoneThunderbolt>
                        </span>
                        Get Started
                    </button>
                </div>
                <div>
                    <img
                        src="https://webauthn.guide/dist/images/illi-hero-copy.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
