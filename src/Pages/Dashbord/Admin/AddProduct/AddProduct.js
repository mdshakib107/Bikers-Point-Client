import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://radiant-island-49212.herokuapp.com/addproduct', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A New Product Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
            <div className="container text-start p-5 col-12 col-md-6 ">
                <h2>Please Add a New Package </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="m-2 form-control" {...register("name")} placeholder="Bike Name" required />
                    <input className="m-2 form-control" {...register("brand")} placeholder="Brand Name" required />
                    <input className="m-2 form-control" {...register("cc")} placeholder="CC Category" required />
                    <input className="m-2 form-control" {...register("category")} placeholder="Category" required />
                    <textarea className="m-2 d-block w-75 form-control" {...register("description")} placeholder="Description" required />
                    <input className="mx-2 form-control"  {...register("price")} placeholder="price" required />
                    <input className="m-2 form-control" {...register("img")} placeholder="image url" required />
                    <Button type="submit" variant="primary mx-1 text-end"> Add Product </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;