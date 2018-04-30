import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { login } from "../../actions/LoginActions";

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: ""
      },
      submitted: false
    };
  }

  handleFormChange = changedFields => {
    console.log("d");
    this.setState(({ user }) => ({
      user: { ...user, ...changedFields }
    }));
  };

  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        console.log("c1"+this.state.username);
        console.log("c2"+this.state.password);
        if (user.username && user.password) {
          console.log("c");
          dispatch(login(user.username, user.password));
        }
      }
    });
  };
  

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <Link to="/signup">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
