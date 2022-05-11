import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router";
import { authLogin } from "../../redux/auth/action";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./Login.scss";
import HelmetTitle from "../../components/helmetTitle/HelmetTitle";

function Login() {
  let history = useHistory();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authReducer);

  const onFinish = (values) => {
    dispatch(authLogin(history, values));
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fade>
      <HelmetTitle title="Login" />
      <Row className="login-page">
        <Col
          className="left-box"
          xs={{ span: 0 }}
          md={{ span: 12 }}
          lg={{ span: 16 }}
        ></Col>

        <Col
          className="right-box"
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <Row className="right-box-inner-row" justify="center" align="middle">
            <Col span="18">
              <h1>Welcome to React Admin! 👋</h1>
              <p>Please sign-in to your account and start the adventure</p>

              <Form
                layout="vertical"
                name="basic"
                initialValues={{
                  login: "",
                  password: "",
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Login"
                  name="login"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Login!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password prefix={<LockOutlined />} />
                </Form.Item>
                <Form.Item
                  name="remember"
                  style={{ color: "red" }}
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    size="large"
                    className="submit-btn"
                    htmlType="submit"
                    loading={loading}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fade>
  );
}

export default Login;
