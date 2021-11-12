// {courses.filter(course => course.kye < 11).map(filteredCourse => (
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allproduct')
            .then(res => res.json())
            .then(data => setproducts(data));
    }, [])

    return (
        <div>
            <div className="">
                <h3 className="fs-3 fw-bold text-uppercase  text-dark p-5" >Our products </h3>
                {
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                            {

                                products.filter((product, index) => index < 6).map(filteredproduct => (


                                    <Product
                                        key={filteredproduct._id}
                                        product={filteredproduct}
                                    ></Product>
                                ))
                            }
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Products;