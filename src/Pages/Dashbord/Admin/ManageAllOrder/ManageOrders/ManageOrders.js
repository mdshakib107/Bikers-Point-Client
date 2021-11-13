import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://radiant-island-49212.herokuapp.com/allorder")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure for Canceling Booking?');
        if (proceed) {
            axios.delete(`https://radiant-island-49212.herokuapp.com/orderdelete/${id}`)
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


    const handleUpdate = (id) => {
        const data = { status: 'Approverd' }
        axios.put(`https://radiant-island-49212.herokuapp.com/updatestatus/${id}`, data)
            .then((result) => {
                if (result.modifiedCount) {
                    window.location.reload();
                } else {
                    window.location.reload();
                }
            });
    }
    return (
        <div className="py-5">
            <h1>Manage All orders </h1>
            <div className=" container ">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product</th>
                                <th>Customer Nmae</th>
                                <th>Phone Number</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {orders?.map((order, index) => (
                            <tbody key={order._id}>
                                <tr  >
                                    <td className="px-2">{index + 1}</td>
                                    <td className="px-2">{order.name}</td>
                                    <td className="px-2">{order.userName}</td>
                                    <td className="px-2">{order.phone}</td>
                                    <td className="p-2 " ><span className=" bg-primary p-1 text-white rounded">{order.status}</span></td>
                                    <td className="px-2"><button className="btn bg-danger p-2 text-light" onClick={() => handleDelete(order._id)} >Delete</button> <button className="btn btn-primary p-2" onClick={() => handleUpdate(order._id)}>Update</button></td>

                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;