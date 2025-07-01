import React from 'react';
import bookImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex items-center justify-around'>
            <div>
                <h1 className='font-bold text-3xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-primary mt-4'>View the list</button>
            </div>

            <div>
                  <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;