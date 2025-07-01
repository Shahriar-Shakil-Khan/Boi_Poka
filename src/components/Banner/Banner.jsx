import React from 'react';
import bookImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn btn-primary mt-4">View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;


