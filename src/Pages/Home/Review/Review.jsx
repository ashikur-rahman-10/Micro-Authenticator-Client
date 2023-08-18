import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
        </div>
    );
};

export default Review;