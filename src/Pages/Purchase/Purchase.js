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
    const { img, price, name, description } = product;
    console.log(product)
    const orderProduct = { img, price, name, description };

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then((res) => res.json())
            .then((idData) => setproduct(idData));
    }, [id]);
    // console.log(product)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = 'Pending'
        const order = { ...data, ...orderProduct };
        axios.post('http://localhost:5000/placeorder', order)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Conformd');
                    reset();
                }
            })
    };
    return (
        <div className="m-5">

            <div className="mt-5">
                <Card className="container">
                    <Card.Img className="" variant="top" src={img} />
                    <Card.Body>
                        <Card.Text className="text-start">
                            <h4 className="card-title fw-bold">{name}</h4>
                            <h5 className="card-title fw-bold text-danger ">Best Price: {price}</h5>
                            {/* <p className="card-text fw-bold">Stay: {stay}</p> */}

                            <p className="card-text"><span className="  fw-bold">Description:</span> {description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* producte Discribsion and update from */}
                <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
                    <div className="container text-start p-5 col-12 col-md-12">
                        <h2>Please Place Your Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="m-2 w-25" {...register("userName")} value={user?.displayName} />
                            <input className="m-2 w-25" {...register("userEmail")} value={user?.email} />
                            <input type="number" className="m-2" {...register("phone")} placeholder="Phone Number" required />

                            <input type="date" className="m-2" {...register("Date")} placeholder="Company" required />
                            <textarea className="m-2 d-block w-75" {...register("Address")} placeholder="Address" required />
                            <Button type="submit" variant="primary mx-1 text-end"> Place Order </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;