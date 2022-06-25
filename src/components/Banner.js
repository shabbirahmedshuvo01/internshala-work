import React, { useEffect, useState } from 'react';
import Image from './Image';

const Banner = () => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     fetch('images.json')
    //         .then(res => res.json())
    //         .then(data => setImages(data))
    // }, []);

    return (
        <div className='mx-20 mt-10 flex'>

            <div>
                <div>
                    <p className='font-semibold text-xl'>In this 5 day class we will explore artists Monet, Matisse, Van <br /> Gogh, among others and then recreate paintings using crayon <br /> and watercolor. Students will have fun learning about the artists <br /> & creating their own art inspired by their work.</p>
                </div>

                <div className='flex mt-5 pl-2'>
                    <div>
                        <img className='w-10 rounded-full' src="https://api.lorem.space/image/face?w=128&h=128" alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold pl-2 mt-1 text-lg text-indigo-600'>Kimberly R Moseler</h2>
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex pl-2 mt-4 text-yellow-400'>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>

                    <div className='mt-4 pl-2'>
                        <p className='text-xs text-slate-400'>467 total reviews for this teacher</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex pl-2 mt-4 text-yellow-400'>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>

                    <div className='mt-4 pl-2'>
                        <p className='text-xs text-slate-400'> reviews for this class</p>
                    </div>
                </div>

                <h2 className='font-semibold text-xl mt-3 pl-2'>Completed by 21 learners</h2>

                <div className='mt-6 pl-5 flex'>
                    <button className="btn btn-primary rounded-full">See Class Schedule <span className='pl-2'><i className="fa fa-angle-right"></i></span> </button>
                    <button className='pl-8 text-indigo-600 text-xl'> <span><i class="fa fa-gratipay"></i></span> Save</button>
                    <button className='pl-8 text-indigo-600 text-xl'> <span><i class="fa fa-share"></i></span> Share</button>
                </div>
            </div>

            <div className='pl-10'>
                {/* {
                    images.map(image => <Image key={image.id} image={image}></Image>)
                } */}
                <Image></Image>
            </div>

        </div >
    );
};

export default Banner;