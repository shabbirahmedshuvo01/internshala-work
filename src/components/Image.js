import React, { useEffect, useState } from 'react';

const Image = (image) => {
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     fetch('images.json')
    //         .then(res => res.json())
    //         .then(data => setImages(data))
    // }, [images]);
    return (
        <div className='flex gap-2'>
            <div>
                <img style={{ height: '320px', width: '320px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDinOz1mMKIYwmrypkpvSt3RGYpBUv0iVHAQ&usqp=CAU" alt="" />
            </div>
            <div>
                <img style={{ height: '152px', width: '200px' }} src="https://m.media-amazon.com/images/I/61uHoUJtPiL._AC_SX466_.jpg" alt="" />
                <img className='mt-2' style={{ height: '160px', width: '200px' }} src="https://www.claude-monet.com/images/paintings/water-lily-pond-with-japanese-bridge.jpg" alt="" />
            </div>
        </div>
    );
};

export default Image;