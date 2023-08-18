import React from 'react';

const ReviewCart = ({ review }) => {
    console.log(review);
    const { reviewer_name, review_text, rating } = review;
    return (
        <div className=''>
            <div className='p-8 border border-violet-950 rounded-xl my-2 text-white'>
                <p className='text-[]'>{review_text}</p>
                <p className='pt-8 text-[12px] bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Rating: {rating}</p>

                <h3 className=' text-[13px]'>{reviewer_name}</h3>
            </div>
        </div>
    );
};

export default ReviewCart;