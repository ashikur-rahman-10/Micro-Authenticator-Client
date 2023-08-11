import React from 'react';
import { MdUnsubscribe } from "react-icons/md";

const Subscribe = () => {
    return (
        <div className=' bg-[#070109] flex justify-center gap-8 py-10'>
            <div className='flex gap-2'>
                <MdUnsubscribe className=' text-5xl text-white' />
                <div>
                    <h3 className=' font-semibold text-white'>Sign up for our newsletter</h3>
                    <p className=' text-[12px]'>Join 70,000+ builders and stay up to date with our latest updates and news.</p>
                </div>

            </div>
            <div className='flex'>
                <button className='btn btn-sm bg-violet-900 rounded-none'>Sign Up</button>
                <input type="text" placeholder="Type here" className="input input-sm input-bordered input-primary w-full max-w-xs rounded-none" />
            </div>
        </div>
    );
};

export default Subscribe;