import React from "react";
import reviewImg from "../../../assets/Images/review-img.png";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

const AddReview = () => {
    const { user } = useAuth();
    console.log(user?.displayName);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewer_name = user?.displayName;
        const review_text = form.review_text.value;
        const rating = parseInt(form.rating.value);
        const review = {
            reviewer_name,
            review_text,
            rating,
        };

        fetch("https://micro-authenticator-server.vercel.app/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Review Added Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    // Scroll to top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row lg:gap-10">
                        <div className="text-center lg:text-left">
                            <img
                                src={reviewImg}
                                alt="Review Img"
                                className="w-[400px]"
                            />
                        </div>
                        <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl shadow-violet-800">
                            <form
                                onSubmit={handleSubmit}
                                className=" p-10 rounded-none"
                            >
                                <h2 className=" text-center text-white text-5xl font-bold">
                                    Feedback
                                </h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">
                                            Review
                                        </span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-primary"
                                        name="review_text"
                                        placeholder="Give us your feedback"
                                    ></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">
                                            Rate us
                                        </span>
                                    </label>
                                    <input
                                        className="input input-bordered input-primary"
                                        type="number"
                                        name="rating"
                                        placeholder="Rating out fo 5"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
