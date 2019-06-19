import * as React from "react";
import { IAuthentication } from "../store";
import { Card, Form, Icon, Input, Button, Checkbox } from "antd";
import { Redirect } from "react-router-dom";

export interface ILoginComponentProps {
  authentication: IAuthentication | null;
  requestLogin(username: string, password: string): void;
}

interface IProps {
  form: any;
}

class LoginComponent extends React.PureComponent<
  IProps & ILoginComponentProps
> {
  onSubmit = event => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) return;

      this.props.requestLogin(values.username, values.password);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.props.authentication) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }

    return (
      <Card
        style={{
          width: 400,
          padding: 30
        }}
      >
        <Form
          onSubmit={this.onSubmit}
          style={{
            maxWidth: 300
          }}
        >
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "아이디좀..." }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "black", opacity: 0.2 }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "비번좀..." }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "black", opacity: 0.2 }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>나 좀 기억해줘</Checkbox>)}
            <br />
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%"
              }}
            >
              로그인
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export const Login = Form.create({ name: "loginForm" })(LoginComponent);
