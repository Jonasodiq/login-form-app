# login-form-app

# [Link to](https://heroic-horse-47e8b1.netlify.app/)

✅ [Check out my YouTube Channel with all of my tutorials](https://www.youtube.com).

**Description:**
useState is imported from React to create a state variable named data to hold the username and password. handleFormSubmit is a function that handles the form submission. It prevents the default form submission behavior, logs the data object to the console, and displays an alert with the data object as a JSON string. handleInputChange is a function that updates the data state when input fields change. It uses the spread operator (...data) to copy the existing data object and updates the specified field (username or password) with the new value from the input element. The component renders a login form with two input fields (username and password) and a submit button. The onChange event handler for each input field calls handleInputChange with the event and the field name ('username' or 'password'). When the form is submitted, the onSubmit event handler calls handleFormSubmit. The alert function displays an alert with the JSON representation of the data object, which contains the username and password entered by the user.
