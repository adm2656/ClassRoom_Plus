import React, { Component } from "react";
import { Form, Icon, Input, Button, notification } from "antd";
import { signupAction } from "../../actions/UserActions";
import { connect } from "react-redux";

const FormItem = Form.Item;

const successNotification = () => {
  notification.success({
    message: "Hello",
    description:
      "Nice to meet you."
  });
};

class NormalSignupForm extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    const userName = this.props.form.getFieldValue("username");
    const passWord = this.props.form.getFieldValue("password");
    this.setState({
      user: {
        username: userName,
        password: passWord
      },
      submitted: true
    }, () => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          if (this.state.submitted) {
            const { dispatch } = this.props;
            dispatch(signupAction(this.state.user));
          }
          successNotification();
        }
      });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          {getFieldDecorator("username", {
            rules: [
              { required: true, message: "Please input username you want!" }
            ]
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
            className="signup-form-button"
          >
            Signup
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  const { isRegister } = state.Registration;
  return {
    isRegister
  }
}

const SignupForm = connect(mapStateToProps)(Form.create()(NormalSignupForm));

export default SignupForm;
