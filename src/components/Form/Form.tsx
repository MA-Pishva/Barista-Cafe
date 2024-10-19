import Button from "../Button";
import "./_form.scss";

import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="user-info">
        <div className="form-name">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
          />
          {errors.name && typeof errors.name.message === "string" && (
            <p style={{ color: "red" }}>{errors.name.message}</p>
          )}
        </div>
        <div className="form-email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
          />
          {errors.email && typeof errors.email.message === "string" && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="form-message">
        <label htmlFor="message">How we can help</label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          placeholder="Message"
        />
        {errors.message && typeof errors.message.message === "string" && (
          <p style={{ color: "red" }}>{errors.message.message}</p>
        )}
      </div>

      <Button type="btn-outline">Send Message</Button>
    </form>
  );
};

export default Form;
