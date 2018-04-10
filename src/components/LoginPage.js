import React, { Component } from "react";
import LoginForm from "./LoginForm/LoginForm";
import "./LoginForm/LoginForm.css";

class LoginPage extends Component {
  render() {
    return (
      <div class="login">
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
