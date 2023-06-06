import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginoutUserAction } from "../../userState/userAction";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLogout = () => {
    dispatch(loginoutUserAction());
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
          Welcome {user.fName}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user._id ? (
              <Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
            ) : (
              <>
                {" "}
                <Link to="/register" className="nav-link">
                  Register
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>{" "}
              </>
            )}
            <Nav className="ms-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
