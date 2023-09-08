import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Table, Form, Input, Button } from "antd";
import moment from "moment";

function DoctorAppointments() {
  const [form] = Form.useForm();
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      let resposne;
      if (name) {
        console.log("through email");
        resposne = await axios.get(
          "/api/doctor/get-appointments-by-doctor-id",
          {
            params: { name },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } else {
        console.log("overall");
        resposne = await axios.get(
          "/api/doctor/get-appointments-by-doctor-id",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      }

      dispatch(hideLoading());
      if (resposne.data.success) {
        setAppointments(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const changeAppointmentStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const resposne = await axios.post(
        "/api/doctor/change-appointment-status",
        { appointmentId: record._id, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        toast.success(resposne.data.message);
        getAppointmentsData();
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again later");
      dispatch(hideLoading());
    }
  };
  const columns = [
    {
      title: "App.Id",
      dataIndex: "_id",
      // render: (text) => text.slice(-6).toLowerCase(),
      render: (text) => text.replace(/[^0-9]/g, "").slice(-6).toLowerCase()
    },
    {
      title: "Patient",
      dataIndex: "name",
      render: (text, record) => <span>{record.userInfo.name}</span>,
    },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   render: (text, record) => <span>{record.userInfo.email}</span>,
    // },
    // {
    //   title: "Phone",
    //   dataIndex: "phoneNumber",
    //   render: (text, record) => <span>{record.doctorInfo.phoneNumber}</span>,
    // },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")}{" "}
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Refunded",
      dataIndex: "refunded",
      render: (_, record) => (
        <div>{record.refunded === true ? "Refunded" : "N/A"}</div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <div className="d-flex">
              <h1
                className="anchor px-2"
                onClick={() => changeAppointmentStatus(record, "approved")}
              >
                Approve
              </h1>
              <h1
                className="anchor"
                onClick={() => changeAppointmentStatus(record, "rejected")}
              >
                Reject
              </h1>
            </div>
          )}
        </div>
      ),
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
      <h1 className="page-header">Appointments</h1>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Search Patient"
          rules={[{ type: "string", min: 3 }]}
        >
          <Input placeholder="Enter Patient Name" />
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

export default DoctorAppointments;


