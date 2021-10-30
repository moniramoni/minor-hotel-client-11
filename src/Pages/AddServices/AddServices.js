import React from 'react';
import './AddServices.css';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const AddServices = () => {
    const {user} = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("http://localhost:5000/addServices", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div>
            <h1 className="mt-5 text-center text-dark">Add More Service on Homepage</h1>
            <div className="login-box w-50 m-auto my-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                <div className="login-form py-5 w-75">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("title")}
                        placeholder="Title"
                        className="p-2 m-2 w-100"
                    />
                    <br />
                    <input
                        {...register("description")}
                        placeholder="Description"
                        className="p-2 m-2 w-100"
                    />
                    <br />
                    <input 
                        type="number" {...register("price")}
                        placeholder="Price"
                        className="p-2 m-2 w-100"
                    />
                    <br />

                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        className="p-2 m-2 w-100"
                    />
                    <br />
                    <select {...register("category")} className="p-2 m-2 w-100">
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Family">Family</option>
                    </select>
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" value="Add" className="btn btn-dark w-50 my-3" />
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;