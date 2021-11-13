import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const { img, price, name, description, brand, category, cc } = product;
    console.log(product)
    const orderProduct = { img, price, name, description };

    useEffect(() => {
        fetch(`https://radiant-island-49212.herokuapp.com/singleProduct/${id}`)
            .then((res) => res.json())
            .then((idData) => setproduct(idData));
    }, [id]);
    // console.log(product)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = 'Pending'
        const order = { ...data, ...orderProduct };
        axios.post('https://radiant-island-49212.herokuapp.com/placeorder', order)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Conformd');
                    reset();
                }
            })
    };
    return (
        <div className="m-5">
            <div className="container p-4">
                <div className="card mb-3 p-5" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={img} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body text-start">
                                <h4 className="card-title fw-bold">{name}</h4>
                                <p className="card-text"><small className="text-muted">{ }</small></p>
                                <p className="card-text"><small className="text-muted fst-italic">{ }</small></p>
                                <h5 className="card-title fw-bold text-danger ">Best Price: {price}</h5>
                                <table className="table">
                                    <thead>
                                        <tr>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"></th>
                                            <td className="fw-bold">Brand</td>
                                            <td>{brand}</td>

                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td className="fw-bold">CC Category</td>
                                            <td>{cc}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td className="fw-bold">Category</td>
                                            <td>{category}</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Card className="container">
                        <Card.Body>
                            <Card.Text className="text-start">
                                <p className="card-text"><span className="  fw-bold">Description:</span> {description}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
                        <div className="container text-start p-5 col-12 col-md-12">
                            <h2>Please Place Your Order</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="m-2 w-50 form-control" {...register("userName")} value={user?.displayName} />
                                <input className="m-2 w-50 form-control" {...register("userEmail")} value={user?.email} />
                                <input type="number" className="m-2 w-50 form-control" {...register("phone")} placeholder="Phone Number" required />

                                <input type="date" className="m-2 w-50 form-control" {...register("Date")} placeholder="Company" required />
                                <textarea className="m-2 d-block w-50 form-control" {...register("Address")} placeholder="Address" required />
                                <Button type="submit" variant="primary mx-1 text-end"> Place Order </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;