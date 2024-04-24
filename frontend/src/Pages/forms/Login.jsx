import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome!!!</h1>
      <form action="#">
        <label htmlFor="email">Username</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
      <p>{`Don't have an account yet? you can easily create one by clicking this button :) `}</p>
      <button onClick={() => navigate("/signIn")}>sign in</button>
    </>
  );
}
