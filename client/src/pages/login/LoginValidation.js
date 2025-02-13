function validation(values) {
  alert("");
  let error = {};
  const passwordRegex = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.username === "") {
    error.username = "Cannot be empty, username is required";
  }
  if (values.password === "") {
    error.password = "Cannot be empty, password is required";
  }
}
