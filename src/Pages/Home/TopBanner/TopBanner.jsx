import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const TopBanner = () => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto min-h-screen flex justify-center items-center ">
                <div className="w-full flex gap-10">
                    <div className="space-y-10 w-1/2">
                        <h1 className="text-white text-5xl font-semibold ml-4 md:ml-0">
                            The fastest way to implement authentication system.
                        </h1>
                        <h3 className="text-white text-2xl ml-4 md:ml-0">
                            SDKs in every language, smart contracts, tools, and
                            infrastructure for web3 development.
                        </h3>
                        <button className="btn btn-square w-fit px-10 font-semibold text-lg hover:bg-slate-300 hover:scale-105 duration-500 ml-4 md:ml-0">
                            <span>
                                <AiTwotoneThunderbolt></AiTwotoneThunderbolt>
                            </span>
                            Get Started
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img src="https://webauthn.guide/dist/images/illi-hero-copy.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
