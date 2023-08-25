import React, { useEffect, useState } from 'react';

const Products = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
        fetch('../../../peoducts.json')
            .then(res => res.json())
            .then(data => {
                setproduct(data);
            })

    }, [])

    return (
        <div className='mb-10 '>
           
            {/* <Helmet>
                <title>Crazy Camp | product</title>
            </Helmet> */}

            <div>
                <div className='text-center mx-auto  border-b-4 md:w-3/12 sm:w-5/12 lg:w-3/12 text-4xl text-red-800 font-bold  text-black bg-white'>
                {/* <div> */}
                {/* <div className=''>
                <div className='mt-20'>All Products</div>

                </div> */}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mt-24 '>
 
                    {product && product.length > 0 ? (
                        product.map(prod => (
                            <>
                                <div className="flex justify-center items-center">
                                    <div className="card w-96 bg-base-100 shadow-xl text-black bg-white rounded-lg">
                                        <figure className="px-10 pt-10 text-black bg-white">
                                            <img src={prod.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body font-semibold text-black bg-white">
                                            <h2 className="card-title font-bold text-2xl text-red-700">Technology: {prod.name}</h2>
                                            <p className=''>Development Price: {prod.price}</p>
                                            <p className=''>Project Complete in {prod.duration}</p>
                                            <div className="card-actions">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        <p>No product products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;