import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";

const GiveReview = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = (data) => {
        axios.post("https://radiant-island-49212.herokuapp.com/addReview", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A New Reviwe Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="p-5">
            <h1>Give Review</h1>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-100 m-2 form-control" name="name" value={user?.displayName} type="name"  {...register("name", { required: true })}
                    />
                    <input className="w-100 m-2 form-control" name="email" value={user?.email} type="email"  {...register("email", { required: true })}
                    />
                    <textarea
                        className="w-100 m-2 form-control"
                        name="comments"
                        placeholder="Comments"
                        {...register("comments", { required: true })}
                    />
                    <select className="w-50 m-2 form-control" {...register("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input
                        className=" btn btn-primary mb-4"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default GiveReview;