import React from "react";
import { MdUnsubscribe } from "react-icons/md";

const Subscribe = () => {
    return (
        <div className=" bg-[#070109] flex justify-center gap-8 py-10">
            <div className="flex gap-2 ml-4">
                <MdUnsubscribe className=" text-6xl text-white" />
                <div>
                    <h3 className=" font-semibold text-white">
                        Sign up for our newsletter
                    </h3>
                    <p className="text-slate-300 text-[12px]">
                        Join 70,000+ builders and stay up to date with our
                        latest updates and news.
                    </p>
                </div>
            </div>
            <div className="form-control mr-4">
                <label className="input-group">
                    <span className="bg-info text-white hover:bg-sky-700">
                        Sign Up
                    </span>
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="input input-bordered"
                    />
                </label>
            </div>
        </div>
    );
};

export default Subscribe;
