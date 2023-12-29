import "../css/LoginForm.css";

function LoginForm() {
  return (
    <div className="LoginForm_container">
      <h1 className="LoginText">Login 👪</h1>
      <form className="LoginForm">
        <input
          className="Login_Input"
          name="email"
          value="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="off"
        ></input>
        <input
          className="Login_Input"
          onChange="onChange"
          name="password"
          value="password"
          placeholder="password of at least 6 characters"
          type="password"
          required
        ></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

export default LoginForm;
