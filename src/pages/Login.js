// import { Button, Form, Input } from "antd";
// import React from "react";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { hideLoading, showLoading } from "../redux/alertsSlice";

// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const onFinish = async (values) => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post("/api/user/login", values);
//       dispatch(hideLoading());
//       if (response.data.success) {
//         toast.success(response.data.message);
//         localStorage.setItem("token", response.data.data);
//         navigate("/home");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="authentication">
//       <div className="authentication-form card p-3">
//         <h1 className="card-title">Welcome Back</h1>
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item label="Email" name="email">
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input placeholder="Password" type="password" />
//           </Form.Item>


//           <Button className="primary-button my-2 full-width-button" htmlType="submit">
//             LOGIN
//           </Button>

//           <Link to="/register" className="anchor mt-2">
//             CLICK HERE TO REGISTER
//           </Link>

//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;



// now i am adding functionality of toggler and forget password functionality

import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import ForgotPassword from "../components/ForgotPassword";
// import ForgotPassword from "./components/ForgotPassword";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleForgotPasswordVisibility = () => {
    setForgotPasswordVisible(!forgotPasswordVisible);
  };

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/home");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        {!forgotPasswordVisible && (
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              placeholder="Password"
              type={passwordVisible ? "text" : "password"}
              suffix={
                <EyeInvisibleOutlined 
                  onClick={togglePasswordVisibility}
                  style={{
                    color: passwordVisible ? "#1890ff" : "rgba(0, 0, 0, 0.25)",
                  }}
                />
              }
            />
         
          </Form.Item>

          {!forgotPasswordVisible && (
            <Button
              className="primary-button my-2 full-width-button"
              htmlType="submit"
            >
              LOGIN
            </Button>
          )}

          {/* {!forgotPasswordVisible && (
            <Link
              to="#"
              className="anchor mt-2"
              onClick={toggleForgotPasswordVisibility}
            >
              FORGOT PASSWORD?
            </Link>
          )} */}

          {forgotPasswordVisible && (
            <div>
              {/* Forgot password form */}
              <Button
                className="primary-button my-2 full-width-button"
                onClick={toggleForgotPasswordVisibility}
              >
                BACK TO LOGIN
              </Button>
            </div>
          )}
          <Link to="/register" className="anchor mt-2">
            CLICK HERE TO SING UP
          </Link>
        </Form>
            )}
             {/* {forgotPasswordVisible && <ForgotPassword />} */}
      </div>
    </div>
  );
}

export default Login;
