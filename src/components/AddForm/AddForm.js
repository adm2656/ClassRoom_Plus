import React, { Component } from "react";
import { Form, Icon, Input, Button, notification, Upload } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const FormItem = Form.Item;

class NormalAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: {
        type: "",
        name: "",
        banner: false,
        info: ""
      },
      submitted: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const classType = this.props.form.getFieldValue("type");
    const className = this.props.form.getFieldValue("name");
    const classBanner = this.props.form.getValueFromEvent(this.normFile);
    const classinfo = this.props.form.getFieldValue("info");

    this.setState(
      {
        class: {
          type: classType,
          name: className,
          info: classinfo
        },
        submitted: true
      },
      () => {
        this.props.form.validateFields((err, values) => {
          if (!err) {
            if (this.state.submitted) {
              const { dispatch } = this.props;
              dispatch();
            }
          }
        });
      }
    );
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    return (
      <Form onSubmit={this.handleSubmit} className="add-form">
        <FormItem>
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "Please input the type!" }]
          })(<Input placeholder="Type of class" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input the class name!" }]
          })(<Input placeholder="Name of class" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Upload">
          {getFieldDecorator("upload", {
            valuePropName: "banner",
            getValueFromEvent: this.normFile
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("info", {
            rules: [{ required: true, message: "Please input the info!" }]
          })(<Input placeholder="Info" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="add-form-button">
            Add
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const successNotification = () => {
  notification.success({
    message: "Success",
    description: "Successful add."
  });
};

const errorNotification = message => {
  notification.error({
    message: "Error",
    description: message
  });
};

const mapStateToProps = state => {
  const { Authentication } = state;

  return {
    Authentication
  };
};

const AddForm = connect(mapStateToProps)(Form.create()(NormalAddForm));

export default AddForm;
