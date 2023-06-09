import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import authService from "../../api/AuthAPI";
import authLayout from "../../hoc/authLayout";

function LoginPage({ setToken }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = credentials;
    if (!username || !password) {
      setErrorMessage("Please enter username and password");
      return;
    }
    try {
      // validate username and password here

      const token = await authService.authenticateUser(username, password);
      console.log(token);
      if (token) {
        setToken(token);
        navigate("/");
      } else {
        console.error("Authentication failed");
        setErrorMessage("Authentication failed");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Authentication failed");
    }
  };

  return (
    <>
      <form className="login-form">
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <div className="d-flex align-items-center my-4">
          <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
        </div>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
            Email address
          </label>
          <input
            type="email"
            id="form3Example3"
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">
            Password
          </label>
          <input
            type="password"
            id="form3Example4"
            className="form-control form-control-lg"
            placeholder="Enter password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check mb-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3"
            />
            <label className="form-check-label" htmlFor="form2Example3">
              Remember me
            </label>
          </div>
          <Link to="/reset-password" className="text-body">
            Forgot password?
          </Link>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <Button className="btn btn-primary btn-lg" onClick={handleSubmit}>
            Login
          </Button>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?{" "}
            <a href="#!" className="link-danger">
              Register
            </a>
          </p>
        </div>
      </form>
    </>
  );
}

export default authLayout(LoginPage);
