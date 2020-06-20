import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-overlay">
      <div className="col-sm-6 offset-sm-3">
        <div className="inner text-center">
          <h4 className="signup-heading">Sign Up</h4>
          <p>There’s no charge upon registration</p>

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
            <p className="already-a-member">
              Already a member? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
