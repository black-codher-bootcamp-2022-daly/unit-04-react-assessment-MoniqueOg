import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

 export default function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                       
                    </div>
                ))}
        </>
    );
}
