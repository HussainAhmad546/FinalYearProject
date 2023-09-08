import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { DatePicker, Table, Space } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import ServedPatientsModal from "../../components/ServedPatientsModal";

const { RangePicker } = DatePicker;

function Earnings() {
  const [earnings, setEarnings] = useState([]);
  const [dateRange, setDateRange] = useState([
    moment().startOf("month").format(),
    moment().endOf("month").format(),
  ]);
  const [patientsNameArray, setPatientsNameArray] = useState([]);
  const [bookingDatesArray, setbookingDatesArray] = useState([]);
  const [bookingTimesArray, setbookingTimesArray] = useState([]);
  const dispatch = useDispatch();
  const getEarningsData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get(
        "/api/admin/get-stats",
        { params: { selectedDateRange: dateRange } },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        setEarnings(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getEarningsData();
  }, [dateRange]);
  const columns = [
    {
      title: "Doc.Name",
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
    // {
    //   title: "Rigistration Number",
    //   dataIndex: "registration_Number",
    //   render: (text, record) => (
    //     <span>{record.doctorInfo.registration_number}</span>
    //   ),
    // },
    {
      title: "Address",
      dataIndex: "address",
      render: (text, record) => <span>{record.doctorInfo.address}</span>,
    },
    {
      title: "Total Appointments",
      dataIndex: "numAppointments",
    },
    {
      title: "Total Earnings",
      dataIndex: "totalEarnings",
    },
    {
      title: "Served Patients",
      dataIndex: "servedPatients",
      render: (text, record) => (
        <div className="d-flex">
          <b
            type="button"
            className="text-primary"
            data-bs-toggle="modal"
            data-bs-target="#servedPatientsModal"
            onClick={() => {
              setPatientsNameArray(record.users);
              setbookingDatesArray(record.dates);
              setbookingTimesArray(record.times);
            }}
          >
            View
          </b>
        </div>
      ),
    },
  ];
  const onChange = (date) => {
    if (date) {
      console.log("Date: ", date);
      setDateRange([date[0].format(), date[1].format()]);
    } else {
      console.log("Clear");
    }
  };
  return (
    <Layout>
      <h1 className="page-header">Earnings</h1>

      <Space direction="vertical" size={12}>
        Select Start Date & End Date to view Earnings:
        <RangePicker
          defaultValue={[moment().startOf("month"), moment().endOf("month")]}
          format="DD-MM-YYYY"
          disabledDate={(current) => current && current > moment().endOf("day")}
          ranges={{
            Today: [moment(), new moment()],
            Yesterday: [moment().subtract(1, "days"), moment()],
            "Last 7 Days": [moment().subtract(7, "days"), moment()],
            "Last 30 Days": [moment().subtract(30, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
          }}
          onChange={onChange}
        />
      </Space>
      <hr />
      <ServedPatientsModal
        patientsNameArray={patientsNameArray}
        bookingDatesArray={bookingDatesArray}
        bookingTimesArray={bookingTimesArray}
      />
      <Table columns={columns} dataSource={earnings} />
    </Layout>
  );
}

export default Earnings;
 