import React, { Component } from "react";
import { Form, Icon, Input, Button, Row, Col } from "antd";
const FormItem = Form.Item;
const { TextArea } = Input;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalReplyForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const replyError = isFieldTouched("reply") && getFieldError("reply");
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Row>
        <Col span={20}>
          <FormItem
            validateStatus={replyError ? "error" : ""}
            help={replyError || ""}
          >
            {getFieldDecorator("reply", {
              rules: [{ required: true, message: "Anything to say?" }]
            })(
              <TextArea
                style={{ width: 600 }}
                autosize
                prefix={
                  <Icon type="message" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Leave some message"
              />
            )}
          </FormItem>
          </Col>
          <Col span={4} style={{ textAlign: "right" }}>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Send
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

const ReplyForm = Form.create()(HorizontalReplyForm);

export default ReplyForm;
