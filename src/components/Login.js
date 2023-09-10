function Login() {
  // Function to handle the form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect the username and password from the form
    const userData = {
      username: event.target.username.value, // Get the username value
      password: event.target.password.value, // Get the password value
    };
    // Log the user data to the console
    console.log(userData);
    // Display user data in an alert
    alert(JSON.stringify(userData)); // Converts user data to a JSON string
  }
  // Rendering the login form
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
          />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default Login;
