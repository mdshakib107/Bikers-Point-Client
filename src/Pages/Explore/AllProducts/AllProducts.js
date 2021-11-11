import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
const AllProducts = () => {
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
                                products.map(product =>
                                    <AllProduct
                                        key={product._id}
                                        product={product}
                                    ></AllProduct>
                                )
                            }
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default AllProducts;