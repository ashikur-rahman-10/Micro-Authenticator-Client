import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


// import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        <div className='bg-gradient-to-r from-black via-[#180223] text-white to-[#0F0212]'>
            {/* ------------heading------------------ */}
            <div className="py-10">
                <h2 className=" text-center text-4xl text-white font-bold">
                    Testimonials
                </h2>
                <p className=" text-center text-gray-300 font-light mt-2">
                    Perceptions created about us among users
                </p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div className='lg:mx-40 mb-10 p-8 border border-violet-950 rounded-xl'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia magni omnis ipsum labore nulla suscipit fugit ab harum. Fuga, praesentium sit ipsam sint magnam dolore cumque inventore, quis voluptatum illo tenetur rerum, quidem eveniet ea minima quaerat mollitia? Ut.</p>

                        <h3 className='pt-10'>Micro User</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:mx-40 mb-10 p-8 border border-violet-950 rounded-xl'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia magni omnis ipsum labore nulla suscipit fugit ab harum. Fuga, praesentium sit ipsam sint magnam dolore cumque inventore, quis voluptatum illo tenetur rerum, quidem eveniet ea minima quaerat mollitia? Ut.</p>

                        <h3 className='pt-10'>Micro User</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:mx-40 mb-10 p-8 border border-violet-950 rounded-xl'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia magni omnis ipsum labore nulla suscipit fugit ab harum. Fuga, praesentium sit ipsam sint magnam dolore cumque inventore, quis voluptatum illo tenetur rerum, quidem eveniet ea minima quaerat mollitia? Ut.</p>

                        <h3 className='pt-10'>Micro User</h3>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className=' flex gap-5 justify-center'>

                <Link to="/addReview" className=' flex justify-center py-5 '>
                    <FiArrowLeft className='mt-1 ms-1 text-blue-600' />
                    <p className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Add a review</p>
                </Link>
                <Link to="/reviewAll" className=' flex justify-center py-5 '>
                    <p className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>View all review</p>
                    <FiArrowRight className='mt-1 ms-1 text-blue-600' />
                </Link>

            </div>
        </div>
    );
};

export default Review;