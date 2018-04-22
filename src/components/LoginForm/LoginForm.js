import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";

import { usernameChange, passwordChange } from "../../actions/LoginActions";
import { connect } from 'react-redux';
import propTypes from "prop-types";

const FormItem = Form.Item;

class NormalLoginForm extends Component {
<<<<<<< HEAD

  constructor(props){
    super(props);

    this.state={
      user:{
        username:"",
        password:""
      }
    };
  }

  handleFormChange=(changedFields)=>{
    this.setState(({user})=>{
        return {
          user:{...user, ...changedFields}
        }
    })
  }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
    
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      );
    }
=======
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
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
>>>>>>> adam/master
  }
}

<<<<<<< HEAD
  //const LoginForm = Form.create()(NormalLoginForm);
  
  
  const createForm = Form.create({
      onValuesChange(props, values){
        if(values.userName !== undefined )
        {
          props.dispatch(usernameChange(values.userName));
=======
const LoginForm = Form.create()(NormalLoginForm);
/*
  const LoginForm = Form.create({
      onFieldsChange(dispatch){
        return {
          dispatch();
>>>>>>> adam/master
        }
        if(values.password !== undefined)
        {
          props.dispatch(passwordChange(values.password));
        }
      }
  })(NormalLoginForm);
  
  const mapStateToProps=(state)=>{
    return state;
  }

  const LoginForm=connect(mapStateToProps)(createForm);

export default LoginForm;
