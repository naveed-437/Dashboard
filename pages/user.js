import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmpassword: yup.string().oneOf([yup.ref('password'),null], 'password must match')
});

function User() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
    axios
      .post("https://62c40ea4abea8c085a6a8f68.mockapi.io/usersdata", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
     axios
       .put("https://62c40ea4abea8c085a6a8f68.mockapi.io/usersdata", data)
       .then((response) => {
         console.log(response);
       })
       .catch((error) => {
         console.log(error);
       });
    alert("Thank You Go to Sign In");
    reset();
  };
  return (
    <div className="container">
      <div className="Form uu">
        <div className="title it pt-2">SIGN UP</div>
        <div className="inputs ut">
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              className="bg-light text-center mt-2"
              name="firstName"
              {...register("firstName")}
              placeholder="First Name..."
            />
            <p> {errors?.firstName?.message} </p>
            <input
              type="text"
              className="bg-light text-center mt-2"
              name="lastName"
              placeholder="Last Name..."
              {...register("lastName")}
            />
            <p> {errors?.lastName?.message} </p>
            <input
              type="text"
              className="bg-light text-center mt-2"
              name="email"
              placeholder="Email..."
              {...register("email")}
            />
            <p> {errors?.email?.message} </p>
            <input
              type="text"
              className="bg-light text-center mt-2"
              name="age"
              placeholder="Age..."
              {...register("age")}
            />
            <p> {errors?.age?.message} </p>
            <input
              type="password"
              className="bg-light text-center mt-2"
              name="password"
              placeholder="Password..."
              {...register("password")}
            />
            <p> {errors?.password?.message} </p>
            <input
              type="password"
              className="bg-light text-center mt-2"
              name="confirmPassword"
              placeholder="Confirm Password..."
              {...register("confirmpassword")}
            />
            <p> {errors?.confirmpassword?.message} </p>
            <input className="up bg-info" type="submit" id="submit" />
            <button className="mx-2 bg-warning">
              <a className="mx-2" href="http://localhost:3000/">
                Home
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
