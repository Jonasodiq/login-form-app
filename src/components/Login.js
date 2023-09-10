import { useState } from 'react';

function Login() {
  // Create a state variable 'data' to hold username and password.
  const [data, setData] = useState({ username: '', password: '' });

  // Function to handle form submission.
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior.
    console.log(data); // Log the 'data' object to the console.
    alert(JSON.stringify(data)); // Display an alert with the 'data' object as a JSON string.
  }

  // Function to handle input changes and update 'data'.
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value }); // Update 'data' with the new value of the specified 'name' field.
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default Login;
