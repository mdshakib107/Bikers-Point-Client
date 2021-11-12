import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addBlog', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A New Blog Added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
            <div className="container text-start p-5 col-12 col-md-6 ">
                <h2>Please Add a New Package </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="m-2" {...register("title")} placeholder="Blog Title" required />
                    <input className="m-2" {...register("srtText")} placeholder="Short Description" required />
                    <textarea className="m-2 d-block w-75" {...register("description")} placeholder="Description" required />
                    <input className="m-2" {...register("img")} placeholder="image url" required />
                    <Button type="submit" variant="primary mx-1 text-end"> Add Blog </Button>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;