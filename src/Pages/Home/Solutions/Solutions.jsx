import React from 'react';
import commerce from '../../../assets/Solution-img/commerce.png'
import gaming from '../../../assets/Solution-img/gaming.png'
import minting from '../../../assets/Solution-img/minting.png'

const Solutions = () => {
    return (
        <div className='mb-20'>
            {/* ----------Heading Part------------ */}
            <div className='my-10'>
                <h2 className=' text-center text-4xl text-white font-bold'>Explore Solutions</h2>
                <p className=' text-center text-gray-300 font-light mt-2'>Micro powers the best web3 projects across verticals</p>
            </div>

            {/* ---------cart section------------- */}
            <div className=' lg:grid lg:grid-cols-3 gap-5 '>
                {/* ------Gaming cart */}
                <div className="card rounded-sm border border-violet-950 bg-base-100 hover:shadow-md hover:shadow-violet-900">
                    <figure><img src={gaming} alt="gaming image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">GamingKit</h2>
                        <p className='text-white font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eius ab facilis natus sequi voluptate, iste, ipsa quasi debitis deleniti provident explicabo quisquam eos possimus eligendi repellendus laudantium optio! Aliquid.</p>
                        
                    </div>
                </div>
                {/* ------Commerce cart */}
                <div className="card rounded-sm border border-violet-950 bg-base-100 hover:shadow-md hover:shadow-violet-900">
                    <figure><img src={commerce} alt="gaming image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">CommerceKit</h2>
                        <p className='text-white font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eius ab facilis natus sequi voluptate, iste, ipsa quasi debitis deleniti provident explicabo quisquam eos possimus eligendi repellendus laudantium optio! Aliquid.</p>
                        
                    </div>
                </div>
                {/* ------Minting cart */}
                <div className="card rounded-sm border border-violet-950 bg-base-100 hover:shadow-md hover:shadow-violet-900">
                    <figure><img src={minting} alt="gaming image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">MintingKit</h2>
                        <p className='text-white font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eius ab facilis natus sequi voluptate, iste, ipsa quasi debitis deleniti provident explicabo quisquam eos possimus eligendi repellendus laudantium optio! Aliquid.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;