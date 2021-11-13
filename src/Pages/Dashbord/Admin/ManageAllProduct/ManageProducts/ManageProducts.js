import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("https://radiant-island-49212.herokuapp.com/allproduct")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    }, []);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure for Canceling Booking?');
        if (proceed) {
            axios.delete(`https://radiant-island-49212.herokuapp.com/productdelete/${id}`)
                .then((result) => {
                    if (result.deletedCount) {
                        window.location.reload();
                    }
                    else {
                        window.location.reload();
                    }
                });
        }
    };
    return (
        <div className="py-3">
            <h1>Manage All Products </h1>
            <div className=" container">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {allProducts?.map((product, index) => (
                            <tbody key={product._id}>
                                <tr  >
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.price}</td>
                                    <td className="p-2  "> <button className="btn bg-danger p-2 text-light" onClick={() => handleDelete(product._id)} >Delete</button> </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;