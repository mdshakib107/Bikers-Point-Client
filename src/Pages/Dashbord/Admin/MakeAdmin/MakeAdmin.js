import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, watch, reset } = useForm();

    const onSubmit = (data) => {
        axios.put("https://radiant-island-49212.herokuapp.com/makeAdmin", data)
            .then(result => {
                alert('Admin Make Successfully');
                reset();
            });
    };
    return (
        <div>
            <div className="m-5" >
                <h1>Make A New Admin</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-50 form-control d-inline"
                        name="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <input
                        className="btn btn-primary mx-1"
                        type="submit"
                        value="Make Admin"
                    />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;