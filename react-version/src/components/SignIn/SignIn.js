import React from "react";
import "./SignIn.css";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div id="signUp" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content text-center">
            <div className="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body w-75 m-auto">
              <h4 style={{ color: "red", textAlign: "center" }}>
                <span className="glyphicon glyphicon-lock"></span>
                Login
              </h4>
              {/* form starts,replaced form with div */}
              <div role="form" className="m-3">
                <div className="form-group">
                  <label for="usrname">
                    <span className="glyphicon glyphicon-user"></span>
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usrname"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="psw">
                    <span className="glyphicon glyphicon-eye-open"></span>
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="psw"
                    placeholder="Enter password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-default btn-success btn-block "
                  style={{ marginTop: "2.9rem" }}
                >
                  <span className="glyphicon glyphicon-off"></span>
                  Login
                </button>
              </div>
              {/* form ends,replaced form with div */}
              <div class="modal-footer">
                <p>
                  Not a member? <Link to="/signup">Sign Up</Link>
                </p>
                {/* <p>
                  Forgot <a href="#">Password?</a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="modal fade" id="sellBitcoin" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 style="color: red;">
                <span class="glyphicon glyphicon-lock"></span>
                Login
              </h4>
            </div>
            <div class="modal-body">
              <form role="form">
                <div class="form-group">
                  <label for="usrname">
                    <span class="glyphicon glyphicon-user"></span>
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="usrname"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="psw">
                    <span class="glyphicon glyphicon-eye-open"></span>
                    Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="psw"
                    placeholder="Enter password"
                  />
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" checked />
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-default btn-success btn-block"
                >
                  <span class="glyphicon glyphicon-off"></span>
                  Login
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-default btn-default pull-left"
                data-dismiss="modal"
              >
                <span class="glyphicon glyphicon-remove"></span>
                Cancel
              </button>
              <p>
                Not a member? <a href="#">Sign Up</a>
              </p>
              <p>
                Forgot <a href="#">Password?</a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SignIn;
