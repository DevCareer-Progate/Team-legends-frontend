import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//import css
import "./SignIn.css";

const SignIn = (props) => {
  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header
          off
          show={true}
          backdrop="static"
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
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
            <h4 className="text-center signin-heading">Welcome back!</h4>
            <p>Kindly fill in your login detail to proceed</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3 w-75 offset-md-1">
          <div id="form">
            <br />
            <input type="email" placeholder="Email" name="email" />
            <br />
            <input type="password" placeholder="Password" name="password" />
            <br />
            <p class="text-right">I forgot my password?</p>
            <button className="btn signin-btn">Log In</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p class="already-a-member">
            Already a member? <Link to="/">Sign Up</Link>
          </p>
          <br />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;
