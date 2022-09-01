import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addForm } from "./features/Forms";

import "./validation.css";

export default function Validation() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addForm(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field-container">
        <div className="input-fields">
          <label>First Name</label>
          <input
            {...register("firstname", {
              required: true,
              maxLength: 10,
              pattern: /^[A-Za-z]+$/i,
              minLength: 3,
            })}
          />
          {errors.firstname && (
            <div className="error-message">* This field is required</div>
          )}
        </div>
        <div className="input-fields">
          <label>Last Name</label>
          <input
            {...register("lastname", {
              required: true,
              maxLength: 5,
              pattern: /^[A-Za-z]+$/i,
              minLength: 1,
            })}
          />
          {errors.lastname && (
            <div className="error-message">* This field is required</div>
          )}
        </div>
        <div className="input-fields">
          <label>Gender</label>
          <div>
            <input
              name="gender"
              value="Male"
              type="radio"
              {...register("gender", { required: true })}
            />
            <label>Male</label>
            <input
              name="gender"
              value="Female"
              type="radio"
              {...register("gender", { required: true })}
            />
            <label>Female</label>
            {errors.gender && (
              <div className="error-message">* This field is required</div>
            )}
          </div>
        </div>
        <div className="input-fields">
          <label>Mobile Number</label>
          <input
            {...register("mobilenumber", {
              required: true,
              minLength: 10,
              pattern: /^[0-9]+$/i,
            })}
          />
          {errors.mobilenumber && (
            <div className="error-message">* This field is required</div>
          )}
        </div>
        <div className="input-fields">
          <label>E-mail ID</label>
          <input {...register("emailid", { required: true, maxLength: 20 })} />
          {errors.emailid && (
            <div className="error-message">* This field is required</div>
          )}
        </div>
        <input type="submit" />
      </div>
    </form>
  );
}
