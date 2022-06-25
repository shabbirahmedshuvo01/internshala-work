import React, { useEffect, useState } from 'react';

const Image = (props) => {
    const { img, img2, img3 } = props.image;
    return (
        <div className='flex gap-2'>
            <div>
                <img style={{ height: '320px', width: '320px' }} src={img} alt="" />
            </div>
            <div>
                <img style={{ height: '152px', width: '200px' }} src={img2} alt="" />
                <img className='mt-2' style={{ height: '160px', width: '200px' }} src={img3} alt="" />
            </div>
        </div>
    );
};

export default Image;