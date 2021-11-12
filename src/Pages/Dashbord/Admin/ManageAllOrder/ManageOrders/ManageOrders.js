import React from 'react';
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allorder")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    return (
        <div>
            <div className="container">
                <h1>Manage All orders </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Title</th>
                            <th>Event description</th>
                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody key={order._id}>
                            <tr  >
                                <td>{index}</td>
                                <td>{order.name}</td>
                                <td>{order.description}</td>
                                <td>{order.image}</td>
                                <td>{order.status}</td>
                                <button className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageOrders;