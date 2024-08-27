import { useState, useEffect } from "react";

function RegisterForm() {
  // States for registration
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [email, setEmail] = useState(() => {
    const saved = localStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [phone, setPhone] = useState(() => {
    const saved = localStorage.getItem("phone");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phone", JSON.stringify(phone));
  }, [name, email, phone]);
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <div className="container">
          <h1 className="text_bottom">User {name} successfully registered!!</h1>
        </div>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <div className="container">
          <h1 className="text_bottom">Please enter all the fields</h1>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="form">
        <div className="container">
          <h1 className="text_title">User Registration</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form className="col s6">
          <div className="row">
            <div className="input-field col s6">
              {/* Labels and inputs for form data */}
              <i className="material-icons prefix">account_circle</i>
              <label className="label">Name</label>
              <input
                onChange={handleName}
                className="input"
                value={name}
                type="text"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">email</i>
              <label className="label">Email</label>
              <input
                autoComplete="current-email"
                onChange={handleEmail}
                className="input"
                value={email}
                type="email"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              <label htmlFor="icon_telephone">Telephone</label>
              <input
                autoComplete="current-telephone"
                onChange={handlePhone}
                id="icon_telephone"
                type="tel"
                className="validate"
              />
            </div>
          </div>
          <div className="container bottom">
            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { RegisterForm };
