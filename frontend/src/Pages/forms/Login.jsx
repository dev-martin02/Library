import { useNavigate } from "react-router-dom";
import { HandleSubmitForms } from "../../utils/handleSubmitForms";
import { useState } from "react";

export default function Login() {
  /*
  Task to use in this component 
    - Improve the design od the page  
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
          const data = await HandleSubmitForms(event, url);
          setUsername(data.response[0].username);
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
