/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { useUserLoginMutation } from "./userSlice"; //🐝 imported the api slice

//test email: admin@test.com
//test password: fdsa
//theirtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjcwNCwiZW1haWwiOiJhZG1pbkB0ZXN0LmNvbSIsImlhdCI6MTczMzY1NTAxNiwiZXhwIjoxNzM0MjU5ODE2fQ.D2RYdv8_6H4Y5vkDxUfqnxzfwaY4UtlYTL0zs1RMs3Y"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");

  //🐝 included something to interact with the api
  const [triggerLogin, { data, error, isLoading }] = useUserLoginMutation(
    { email, password },
    { skip: true }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //triggers the api call
      const credientials = await triggerLogin({ email, password });
      console.log(JSON.stringify(credientials));
    } catch (err) {
      console.error(`handleSubmit Error: ${err}`);
    }
  };

  //Added some more code to render if successful or not
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email 🐝removed username here and in the label */}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email" //🐝 amended text to email
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" //🐝 I removed username usage (couldnt find api doc that saves an api)
            required
          />
        </div>
        {/* Password Input */}
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}

        <button type="submit">Login</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && (
        <p style={{ color: "red" }}>
          Error: {error.message || "Invalid login credentials"}
        </p>
      )}
      {data && (
        <div>
          <p>Welcome </p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
