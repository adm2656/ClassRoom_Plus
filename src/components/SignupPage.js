import React, { Component } from "react";
import SignupForm from "./SignupForm/SignupForm";
import "./SignupForm/SignupForm.css";

class SignupPage extends Component {
  render() {
    return (
      <div class="signup">
        <SignupForm />
      </div>
    );
  }
}

export default SignupPage;
