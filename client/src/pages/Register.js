import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInPutField from "../CustomInputField/CustomInPutField";
import { Link } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import { postUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";
import { Alert } from "react-bootstrap";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [form, setForm] = useState(initialState);
  const [response, setResponse] = useState({});
  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Messi",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Messi",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Messi@10",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*****",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      alert("Password do not match");
    }

    const { status, message } = await postUser(rest);
    setResponse({ status, message });
    toast[status](message);
    status === "success" && setForm(initialState);
  };

  return (
    <MainLayout>
      <div className="form">
        <Form onSubmit={handleOnSubmit}>
          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}

          <h3 className="text-center mb-3">Registration Form</h3>
          {fields.map((item, i) => (
            <CustomInPutField {...item} key={i} onChange={handleOnChange} />
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="text-end">
            Already have account? <Link to="/login">Login</Link>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};

export default Register;
