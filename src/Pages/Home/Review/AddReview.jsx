import React from 'react';
import reviewImg from '../../../assets/Images/review-img.png';

const AddReview = () => {
    return (
        <div className='pt-28'>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row lg:gap-10">
                        <div className="text-center lg:text-left">
                            
                            <img src={reviewImg} alt="Review Img" className='w-[400px]'  />
                            
                        </div>
                        <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl shadow-violet-800">
                            <div className=" p-10 rounded-none">
                                <h2 className=' text-center text-5xl font-bold'>Feedback</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <textarea className="textarea textarea-primary" placeholder="Give us your feedback"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rate us</span>
                                    </label>
                                    <input type="number" placeholder="Rating out fo 5" className="input input-bordered input-primary" />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;