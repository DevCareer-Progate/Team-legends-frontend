import React from "react";
import "../SignIn/SignIn.css";

const SignUp = () => {
  return (
    <div>
      <a type="button" class="btn" data-toggle="modal" data-target="#myModal">
        Sign Up
      </a>
      <div id="signIn" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content text-center">
            <div className="modal-body w-75 m-auto">
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
                <a href="/login" type="submit" className="btn signup-butn">
                  LOGIN
                </a>
                <p className="already-a-member">
                  Already a member? <a href="/login">Sign Up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
