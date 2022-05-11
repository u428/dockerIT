import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import HelmetTitle from "../../../components/helmetTitle/HelmetTitle";
import {
  PageHeader,
  Card,
  Row,
  Col,
  Form,
  Input,
  Upload,
  message,
  Button,
} from "antd";

import { InboxOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { authSetting } from "../../../redux/auth/action";
import axios from "axios";

const Setting = () => {
  const { Dragger } = Upload;
  const [form] = Form.useForm();
  const [filePath, setFilePath] = useState("");
  const dispatch = useDispatch();

  const { userData, loading } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (userData) {
      const { firstName, lastName, email, userImage } = userData;
      form.setFieldsValue({
        firstName,
        lastName,
        userImage,
        email,
      });
    }
  }, [userData, form]);

  const onFinish = (values) => {
    dispatch(authSetting({ ...values, userImage: filePath }));
  };

  const fileProps = {
    name: "image",
    listType: "picture",
    multiple: false,
    maxCount: 1,
    action: "/api/image/upload",
    onChange(info) {
      const { status } = info.file;

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);

        setFilePath(info.file.response.path);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(file) {
      console.log(file);
      const token = localStorage.getItem("token");
      axios
        .delete("/api/image/delete", {
          headers: {
            Authorization: token,
          },
          data: {
            filename: file.response.filename,
          },
        })
        .then((response) => ({ response }))
        .catch((error) => ({ error }));
    },
  };

  return (
    <Fade>
      <HelmetTitle title="Setting" />
      <PageHeader
        className="site-page-header"
        // onBack={ () => null }
        title="Setting"
        subTitle="Change user detail"
      />
      <Row>
        <Col xl={6} lg={8} md={12} sm={24}>
          <Card
            bordered={false}
            cover={
              <img
                alt="example"
                src={`http://localhost:5000/${
                  userData?.userImage ? userData?.userImage : "default.jpg"
                }`}
              />
            }
          >
            <Form form={form} layout="vertical" name="user" onFinish={onFinish}>
              <Dragger {...fileProps}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>

              <Form.Item name="firstName" label="Firstname">
                <Input />
              </Form.Item>
              <Form.Item name="lastName" label="Lastname">
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input.Password />
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
          </Card>
        </Col>
      </Row>
    </Fade>
  );
};

export default Setting;
