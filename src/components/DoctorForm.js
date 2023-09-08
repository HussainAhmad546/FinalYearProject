import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
import React from "react";

function DoctorForm({ onFinish, initivalValues }) {

  const getRandomRegistrationNumber = () => {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  };
  
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initivalValues,
        ...(initivalValues && {
          timings: [
            moment(initivalValues?.timings[0], "hh:mm a"),
            moment(initivalValues?.timings[1], "hh:mm a"),
          ],
        }),
      }}
    >
      <h1 className="card-title mt-3">Personal Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="First Name"
            name="firstName"
            // rules={[{ required: true }]}
            rules={[
              {
                required: true,
                pattern: /^[A-Za-z]+$/,
                message: 'First name must contain only alphabets.',
              },
              {
                max: 10,
                message: 'First name must not exceed 10 characters.',
              },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Last Name"
            name="lastName"
            // rules={[{ required: true }]}
            rules={[
              {
                required: true,
                pattern: /^[A-Za-z]+$/,
                message: 'Last name must contain only alphabets.',
              },
              {
                max: 10,
                message: 'Last name must not exceed 10 characters.',
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Phone Number"
            name="phoneNumber"
            // rules={[{ required: true , min:11,max:11}]}
            rules={[
              {
                required: true,
                pattern: /^03\d{9}$/,
                message: 'Contact number must start with 03 and have 11 digits.',
                // max: 11,
                // message: 'Contact number must not exceed 11 digits.',
              },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        {/* <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Dr. Registration number"
            name="registration_number"
            // rules={[{ required: true }]}
            rules={[
              { 
                required: true,
                pattern: /^[0-9]+$/,
                message: 'Registration number must contain only numbers.'},
                {
                max: 5,
                message: 'Registration number must not exceed 5 digits.'
              }
            ]}
          >
            <Input placeholder="Registration number"  />
          </Form.Item>
        </Col> */}
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Address" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className="card-title mt-3">Professional Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Specialization"
            name="specialization"
            // rules={[{ required: true }]}
            rules={[
              {
                required: true,
                pattern: /^[A-Za-z]+$/,
                message: 'specialization must contain only alphabets.',
              },
              {
                max: 15,
                message: 'Last name must not exceed 15 characters.',
              },
            ]}
            
          >
            <Input placeholder="Specialization" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Experience"
            name="experience"
            // rules={[{ required: true , min:0}]}
            rules={[
              { 
                required: true,
                min: 0,
                validator: (_, value) => {
                  if (value >= 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Experience must not be negative value.'));
                }
              }
            ]}
          >
            <Input placeholder="Experience" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Fee Per Cunsultation"
            name="feePerCunsultation"
            // rules={[{ required: true }]}
            rules={[
              { 
                required: true,
                min: 0,
                validator: (_, value) => {
                  if (value >= 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Experience must not be negative value.'));
                }
              }
            ]}
          >
            <Input placeholder="Fee Per Cunsultation" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Timings"
            name="timings"
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker format="hh:mm a" />
          </Form.Item>
        </Col>
      </Row>

      <div className="d-flex justify-content-end">
        <Button className="primary-button" htmlType="submit">
          SUBMIT
        </Button>
      </div>
    </Form>
  );
}

export default DoctorForm;
