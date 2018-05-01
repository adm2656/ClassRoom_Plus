import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { loginAction, loginRequest } from "../../actions/UserActions";
import { connect } from "react-redux";

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

	handleSubmit = (e) => {
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
						//console.log(this.state.user.username, this.state.user.password);
						const { dispatch } = this.props;
						dispatch(loginAction(this.state.user.username, this.state.user.password));
					}
				}
			});
		});
	};


	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator("username", {
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
/*
const mapStateToProps = (state) => {
	return {
		username:state.user
	}
}
*/

const LoginForm = connect()(Form.create()(NormalLoginForm));

export default LoginForm;
