import React from 'react';
import blogs from '../../data/blogs';

const Blog = () => {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id} className="blog-post">
          <h2>{blog.title}</h2>
          <img src={blog.img} alt={blog.title} />
          <p>{blog.blogText}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
