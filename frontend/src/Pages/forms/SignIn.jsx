export default function SignIn() {
  return (
    <>
      <h1>Hello im sign in page!</h1>
      <form>
        <label htmlFor="name"> What is your name?</label>
        <input type="text" id="name" />

        <label htmlFor="username">Create Username</label>
        <input type="email" id="username" />

        <label htmlFor="password">Create Password</label>
        <input type="password" id="password" />

        <label htmlFor="confPassword">Confirm Password</label>
        <input type="password" id="confPassword" />

        <button>Submit</button>
      </form>
    </>
  );
}
