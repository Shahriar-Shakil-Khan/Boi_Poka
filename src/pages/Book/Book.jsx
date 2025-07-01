import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

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

    const {bookName,author,image,review,category,yearOfPublishing,rating,tags,bookId}=singleBook
    
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card  w-96 shadow-sm border bg-gray-600">
  <figure className='p-3'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div class="flex justify-center gap-10">
        {
            tags.map(tags=> <button>{tags}</button>)
        }
    </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary ">{yearOfPublishing}</div>
    </h2>
    <p className='mx-auto'>{review}</p>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{author}</div>
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
        </div>
        </Link>
    );
};

export default Book;