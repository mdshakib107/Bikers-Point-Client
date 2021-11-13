import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://radiant-island-49212.herokuapp.com/allBlog')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <div className="">
                <h3 className="fs-3 fw-bold text-uppercase  text-dark p-5" >Read Recent Blog  </h3>
                {
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-4 g-5">
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