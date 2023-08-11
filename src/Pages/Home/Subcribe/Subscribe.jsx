import React from "react";
import { MdUnsubscribe } from "react-icons/md";

const Subscribe = () => {
    return (
        <div className=" bg-[#070109] flex justify-center gap-8 py-10">
            <div className="flex gap-2">
                <MdUnsubscribe className=" text-5xl text-white" />
                <div>
                    <h3 className=" font-semibold text-white">
                        Sign up for our newsletter
                    </h3>
                    <p className=" text-[12px]">
                        Join 70,000+ builders and stay up to date with our
                        latest updates and news.
                    </p>
                </div>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span className="bg-info text-white hover:bg-sky-500">
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
