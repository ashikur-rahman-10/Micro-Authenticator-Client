import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const PrinctingSection = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-black via-[#180223] text-white to-[#0F0212]">
            <div className="max-w-6xl mx-auto flex items-center gap-10">
                <div className="w-1/2 space-y-10">
                    <h1 className="text-5xl font-bold">
                        Transparent pricing. <br /> No hidden fees.
                    </h1>
                    <p className="text-2xl font-medium italic">
                        We may introduce optional advanced features which you
                        can decide to pay for in the future. We will always be
                        transparent and clear about any paid features up front.
                    </p>
                </div>
                <div className="w-1/2 border border-purple-950 p-10 rounded-2xl space-y-10">
                    <h1 className="text-6xl font-bold text-purple-300">
                        Free.
                    </h1>
                    <ul className="list-disc text-purple-200 space-y-2 pl-5">
                        <li>Zero fees on contract deployments</li>
                        <li>Zero fees on transactions</li>
                        <li>New features added every week</li>
                        <li>Save on gas fees with advanced optimizations</li>
                    </ul>
                    <button className="btn btn-square w-fit px-10 font-semibold text-lg hover:bg-slate-300 hover:scale-105 duration-500 ">
                        <span>
                            <AiTwotoneThunderbolt></AiTwotoneThunderbolt>
                        </span>
                        <p className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Start Building Today
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrinctingSection;
