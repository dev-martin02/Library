import { useNavigate } from "react-router-dom";
import { HandleSubmitForms } from "../../utils/handleSubmitForms";
import { useState } from "react";

export default function Login() {
  /*
  Todo: use a store to manage the state of the app, after the use login is done the page should return him to the home page saying "Hello username" 
*/

  const [username, setUsername] = useState("");
  const url = "http://localhost:2000/logIn";

  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Welcome!!!</h1>

      <form
        onSubmit={async (event) => {
          const oh = await HandleSubmitForms(event, url);
          setUsername(oh.response[0].username);
        }}
        className="flex flex-col m-5"
      >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>{`Don't have an account yet? you can easily create one by clicking this button :)`}</p>
      <button onClick={() => navigate("/signIn")}>sign in</button>
    </div>
  );
}
