import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";

const GiveReview = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = (data) => {
        axios.post("http://localhost:5000/addReview", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A New Reviwe Added Successfully');
                    reset();
                }
            })
    };
    console.log(errors)
    return (
        <div>
            <h1>Give Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="w-75 m-2" name="email" value={user?.displayName} type="name"  {...register("name  ", { required: true })}
                />
                <input className="w-75 m-3" name="email" value={user?.email} type="email"  {...register("email", { required: true })}
                />
                <textarea
                    className="w-75 m-3"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <select className="w-75 m-3" {...register("rating")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <input
                    className="submit-btn btn btn-danger"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default GiveReview;