import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="form-wrapper">
      <div className="form-group">
        <h3 className="text">Please sign up here to register</h3>

        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="first-line">
              <div className="firstname">
                <label>First Name</label>
                <input
                
                  type="text"
                  placeholder="First name"
                  {...register("First name", { required: true, maxLength: 80 })}
                />
              </div>
              <div className="firstname">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("Last name", { required: true, maxLength: 100 })}
                />
              </div>
            </div>
            <div className="first">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            <div className="first">
              <label>Phone No</label>
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
            </div>
            <div className="first">
              <label>Location</label>
              <input type="text" placeholder="Location" {...register} />
            </div>

            <div className="first">
              <label>Gender</label>
              <select {...register("Title", { required: true })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="first">
              <label>Type of purchase</label>
              <select {...register("Title", { required: true })}>
                <option value="Wholesale">Wholesale</option>
                <option value="Retail">Retail</option>
              </select>
            </div>

            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
