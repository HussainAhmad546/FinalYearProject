import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import axios from "axios";
import { Table, Form, Input, Button } from "antd";
import moment from "moment";

function Appointments() {
  const [form] = Form.useForm();
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      let resposne;
      if (name) {
        resposne = await axios.get("/api/user/get-appointments-by-user-id", {
          params: { name },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } else {
        resposne = await axios.get("/api/user/get-appointments-by-user-id", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }
      dispatch(hideLoading());
      if (resposne.data.success) {
        setAppointments(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      // render: (text) => text.slice(-6).toLowerCase(),
      render: (text) => text.replace(/[^0-9]/g, "").slice(-6).toLowerCase()
    },
    {
      title: "Doctor",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.doctorInfo.firstName} {record.doctorInfo.lastName}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      render: (text, record) => <span>{record.doctorInfo.phoneNumber}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")}{" "}
          {moment(record.time).format("hh:mm a")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  useEffect(() => {
    getAppointmentsData();
  }, [name]);

  const onFinish = (values) => {
    setName(values.name);
  };
  return (
    <Layout>
      <h1 className="page-title">Appointments</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Search Doctor"
          rules={[{ type: "string", min: 3 }]}
        >
          <Input placeholder="Enter Doctor Name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      <hr />
      <Table columns={columns} dataSource={appointments} />
    </Layout>
  );
}

export default Appointments;
