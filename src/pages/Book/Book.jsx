import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

// const Book = ({bookPromise}) => {
//     const data=use (bookPromise);
//     console.log(data)
//     return (
//         <div>
//             <h1>single book</h1>
//         </div>
//     );
// };


const Book = ({singleBook}) => {

    const {bookName,author,image,review,category,yearOfPublishing,rating}=singleBook
    
    return (
        <div className="card  w-96 shadow-sm border bg-gray-600">
  <figure className='p-3'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary ">{yearOfPublishing}</div>
    </h2>
    <p className='mx-auto'>{review}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{author}</div>
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
        </div>
    );
};

export default Book;