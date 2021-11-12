import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allBlog')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <div className="">
                <h3 className="fs-3 fw-bold text-uppercase  text-dark p-5" >Read Blogs  </h3>
                {
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                            {
                                blogs.map(blog =>
                                    <Blog
                                        key={blog._id}
                                        blog={blog}
                                    ></Blog>
                                )
                            }
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Blogs;