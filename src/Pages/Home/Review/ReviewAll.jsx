import React, { useEffect, useState } from 'react';
import ReviewCart from './ReviewCart';

const ReviewAll = () => {
    const [reviews, setReview] = useState();

    useEffect(() => {
        fetch("../../../../public/review.json")
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    // console.log(reviews);
    return (
        <div>
            <div className='pt-28 lg:mx-40 mb-10 '>
            <h2 className=" text-center text-4xl text-white font-bold mb-10">
                    All Review
                </h2>
                {
                    reviews?.map(review => <ReviewCart
                    key={review?.reviewer_name}
                    review={review}
                    ></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default ReviewAll;