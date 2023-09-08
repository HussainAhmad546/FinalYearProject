import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import Notifications from "./pages/Notifications";
import Userslist from "./pages/Admin/Userslist";
import DoctorsList from "./pages/Admin/DoctorsList";
import Profile from "./pages/Doctor/Profile";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import LandingPage from "./pages/LandingPage";
import Page404 from "./components/Page404";
import Blogs from "./components/Blogs";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Earnings from "./pages/Admin/Earnings";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service"
          element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-doctor"
          element={
            <ProtectedRoute>
              <ApplyDoctor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/earnings"
          element={
            <ProtectedRoute>
              <Earnings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/userslist"
          element={
            <ProtectedRoute>
              <Userslist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/doctorslist"
          element={
            <ProtectedRoute>
              <DoctorsList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/profile/:userId"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book-appointment/:doctorId"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/appointments"
          element={
            <ProtectedRoute>
              <DoctorAppointments />
            </ProtectedRoute>
          }
        />

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
