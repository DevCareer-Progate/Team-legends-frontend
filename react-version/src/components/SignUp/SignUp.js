import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SignUp = (props) => {
  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header
          show={true}
          backdrop="static"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className=" "
          style={{ padding: "1.5rem" }}
        >
          <Modal.Title
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "9.5rem",
            }}
          >
            <p
              className="text-left "
              onClick={props.click}
              style={{
                width: "7%",
                padding: "0px 0px 0px 8px",
                color: "red",
                cursor: "pointer",
              }}
            >
              &times;
            </p>
            <h4 className="signup-heading">Sign Up</h4>
            <p>There’s no charge upon registration</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0px 7.5rem" }}>
          <div id="form">
            <input type="text" placeholder="Full Name" name="fullname" />
            <br />
            <input type="email" placeholder="Email" name="email" />
            <br />
            <input type="password" placeholder="Password" name="password" />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <br />
            <button
              className="btn signup-butn mybtn"
              style={{ marginLeft: "9.5rem" }}
            >
              Register
            </button>
            <p className="already-a-member text-right">
              Already a member? <Link to="/">Login</Link>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUp;
