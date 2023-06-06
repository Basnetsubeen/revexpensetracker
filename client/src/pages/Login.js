import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainLayout from "../components/Layout/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAction } from "../userState/userAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user, navigate]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(loginUserAction({ email, password }));
    // const { status, message, user } = await loginUser({ email, password });
    // toast[status](message);
    // if (status === "success") {
    //   sessionStorage.setItem("user", JSON.stringify(user));
    //   setIsLogedIn(true);
    // }
  };
  return (
    <MainLayout>
      <div className="form">
        <Form onSubmit={handleOnSubmit}>
          <h3 className="text-center mb-3">Login Form</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="text-end">
          Do not have account? <Link to="/register">Register</Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
