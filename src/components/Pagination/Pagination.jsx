import React from 'react';
import "./pagination.scss";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <div>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number}> 
                    <a onClick={()=> paginate(number)} href="#">{number}</a>                
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination