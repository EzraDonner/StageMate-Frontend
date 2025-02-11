/* TODO - add your code to create a functional React component that renders a registration form */
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUwNiwiZW1haWwiOiJ1bmRlZmluZWQiLCJpYXQiOjE3MzM0MTkwNDYsImV4cCI6MTczNDAyMzg0Nn0.jR3ZMqnpBbcbn0Dx1ISS6IqkzQOizkp-__Ny82vEzUI
import { useRegisterUserMutation } from "./userSlice";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [registerUser, { isLoading, isSuccess, error }] =
    useRegisterUserMutation();

  const handleSubmit = async (event, formData) => {
    event.preventDefault();
    console.log(`formdata: ${JSON.stringify(formData)}`);
    try {
      const result = await registerUser(formData).unwrap();
      console.log(`User Registered: ${JSON.stringify(result)}`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstname}
        onChange={(e) =>
          setFormData({ ...formData, firstname: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </button>
      {isSuccess && <p>Registration successful!</p>}
      {error && <p>Error: {error.data?.message || "Something went wrong"}</p>}
    </form>
  );
};

export default Register;
