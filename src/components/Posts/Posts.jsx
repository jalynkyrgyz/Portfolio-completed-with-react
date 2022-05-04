import React from 'react';
import './posts.scss';

const Posts = ({posts, loading}) => {
    if (loading) {
        return <h2> Loading ...</h2>;
    }
  return (
    <ul className="post">
        {
            posts.map(item => (
                <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </li>
            ))
        }
    </ul>
  )
}

export default Posts