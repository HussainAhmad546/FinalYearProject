import React from "react";
import { Table } from "antd";
import moment from "moment";

const ServedPatientsModal = ({
  patientsNameArray,
  bookingDatesArray,
  bookingTimesArray,
}) => {
  const patients = patientsNameArray.map((value, index) => {
    return {
      patientName: value,
      bookingDate: bookingDatesArray[index],
      bookingTime: bookingTimesArray[index],
    };
  });

  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patientName",
      key: "patientName",
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDate",
      key: "bookingDate",
      render: (bookingDate) =>
        new Date(bookingDate).toLocaleString("default", {
          month: "short",
          year: "numeric",
          day: "2-digit",
        }),
    },
    {
      title: "Booking Time",
      dataIndex: "bookingTime",
      key: "bookingTime",
      render: (bookingTime) =>
        new Date(bookingTime).toLocaleString("default", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: "true",
        }),
    },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   key: "status",
    //   render: (_, record) =>
    //     moment().isSameOrBefore(moment(record.bookingDate),)
    //       ? "In Progress"
    //       : "Completed",
    // },
  ];
  return (
    <div
      className="modal fade"
      id="servedPatientsModal"
      tabIndex={-1}
      aria-labelledby="servedPatientsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="servedPatientsModalLabel">
              Served Patients
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <Table
              // bordered
              rowKey="_id"
              pagination={{
                pageSize: 5,
              }}
              columns={columns}
              dataSource={patients}
              scroll={{
                x: "max-content",
              }}
            />
          </div>
          <div className="modal-footer">
            <p className="me-auto">E-Clinic</p>

            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServedPatientsModal;
