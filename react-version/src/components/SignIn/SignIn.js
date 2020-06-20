import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import css
import "./SignIn.css";

const SignIn = (props) => {
  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header
          show={true}
          backdrop="static"
          size="lg"
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
            <h4 className="text-center signin-heading">Welcome back!</h4>
            <p>Kindly fill in your login detail to proceed</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <form method="POST" action="#" id="form">
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
            <button href="/login" type="submit" className="btn signup-butn">
              Register
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.click}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;
