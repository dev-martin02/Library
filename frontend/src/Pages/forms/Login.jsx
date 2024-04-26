import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Welcome!!!</h1>
      <form action="#" className="flex flex-col m-5">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
      <p>{`Don't have an account yet? you can easily create one by clicking this button :)`}</p>
      <button onClick={() => navigate("/signIn")}>sign in</button>
    </div>
  );
}
