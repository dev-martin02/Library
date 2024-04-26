export default function SignIn() {
  const url = "http://localhost:2000/signIn";

  const addUser = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    console.log(JSON.stringify(Object.fromEntries(formData)));

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json", // Set Content-Type header
        },
      });
      if (response.ok) {
        console.log("User added it successfully!");
      } else {
        console.error("Failed to add user.");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1>Hello im sign in page!</h1>
      <form onSubmit={addUser} className="flex flex-col w-80">
        <label htmlFor="email"> What is your email?</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="username">Create Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="How do should we call you?"
        />

        <label htmlFor="password">Create Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confPassword">Confirm Password</label>
        <input type="password" id="confPassword" />

        <button>Submit</button>
      </form>
    </div>
  );
}
