import React from "react";
import OkayButton from "./OkayButton";
import CancelButton from "./CancelButton";

export default function LoginForm() {
  return (
    <div className="card w-75 mx-auto">
      <div className="card-header bgColor1">
        <h3>Log In</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" id="userName" />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Password</label>
            <input type="text" className="form-control" id="passWord" />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <OkayButton /><span className="mx-1"></span>
        <CancelButton />
      </div>
    </div>
  );
}
