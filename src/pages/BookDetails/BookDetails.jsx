import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    
    const {id}=useParams();
    const bookId = parseInt(id);
    const data =useLoaderData();
    const singleBook=data.find(book=>book.bookId===bookId);
    const {bookName,image,author,publisher,review,tags,yearOfPublishing,totalPages}=singleBook;
    return (
        // <div>
        //     {/* <div><img src={image} alt="" /></div> */}
            

        // </div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img 
      src={image}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold text-5xl">{bookName}</h2>
    <p >By:{author}</p>
    <div className='border-t-1 border-dashed'></div>
    <p>{publisher}</p>
    <p>{review}</p>
    <div class="flex  gap-10">
        {
            tags.map(tags=> <button>{tags}</button>)
        }
    </div>
     <div className='border-t-1 border-dashed'></div>
     <p>Number of Pages   : {totalPages}</p>
     <p>year of Publisher : {yearOfPublishing}</p>
     <p>Rating </p>
    <div className="card-actions">
      <button className="btn btn-primary">Read</button>
      <button className="btn btn-primary">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;