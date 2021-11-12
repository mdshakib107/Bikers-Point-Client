import React from 'react';
import Banar from '../Bannar/Banar';
import Blogs from '../BlogsSection/Blogs/Blogs';
import Products from '../ProductsSection/Products/Products';
import Reviews from '../ReviewsSection/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Products></Products>
            <Blogs></Blogs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;