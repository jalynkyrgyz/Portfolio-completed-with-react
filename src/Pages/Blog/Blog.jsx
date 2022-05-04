import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Posts, Pagination } from '../../components';

import './blog.scss';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect (()=> {
    const getPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      setLoading(false);
    }

    getPosts()
  }, []);

  // Get current posts
  const indefOfLastPost = currentPage * postsPerPage;
  const indefOfFirstPost = indefOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indefOfFirstPost, indefOfLastPost);

  // change pages
  const paginate = (pageNumber) => (setCurrentPage(pageNumber));

  return (
    <section className="blog">
        <h1>Blog page</h1>
        <div className="container">
          <Posts posts={currentPosts} loading={loading}/>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    </section>
  )
}

export default Blog