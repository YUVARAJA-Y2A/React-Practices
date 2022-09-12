import React, { useState } from "react";
import Timer from "./Timer";
import "./loginpage.scss";
import toast, { Toaster } from "react-hot-toast";
function LoginPage() {
  const notify = () => toast.success("OTP Sent Successfully");
  return (
    <div>
      <div className="login-page-setup">
        <div className="container1">
          <div className="inner-container">
            <input type="text" maxlength={10} placeholder="Mobile" />
            <button
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={notify}
            >
              GET OTP
            </button>
            <Toaster />
          </div>
        </div>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Enter OTP to Sign In
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="otp-title-container pb-2">
                  <label className="otp-message">
                    We sent you a code to verify your mobile number
                  </label>
                  <label className="otp-number">6546565165</label>
                </div>
                <input type="text" maxlength={4} />
              </div>
              <div class="footer">
                <div>
                  <Timer initialSeconds={59} />
                </div>
                <div>
                  <button type="button" class="btn btn-primary me-2">
                    Sign In
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
