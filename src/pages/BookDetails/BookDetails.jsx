import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
    const id=useParams();
    return (
        <div>
            <h1>BookDetails</h1>
        </div>
    );
};

export default BookDetails;