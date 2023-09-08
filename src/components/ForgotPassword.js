// 

import React from "react";
import { Form, Input, Button } from "antd";

function ForgotPassword() {
  const onFinish = (values) => {
    // Handle forgot password logic here
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Enter your Mobile Number" name="mobileNumber">
        <Input placeholder="Mobile Number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">
          Get OTP
        </Button>
      </Form.Item>
      <Form.Item label="Enter OTP" name="otp">
        <Input placeholder="OTP" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Reset Password
      </Button>
    </Form>
  );
}

export default ForgotPassword;
