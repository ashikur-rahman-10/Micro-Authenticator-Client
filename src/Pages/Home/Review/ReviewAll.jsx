import React, { useEffect, useState } from "react";
import ReviewCart from "./ReviewCart";

const ReviewAll = () => {
    const [reviews, setReview] = useState();

    useEffect(() => {
        fetch("https://micro-authenticator-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);

    // Scroll to top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div>
            <div className="pt-28 lg:mx-40 mb-10 ">
                <h2 className=" text-center text-4xl text-white font-bold mb-10">
                    All Review
                </h2>
                {reviews?.map((review) => (
                    <ReviewCart key={review?._id} review={review}></ReviewCart>
                ))}
            </div>
        </div>
    );
};

export default ReviewAll;
