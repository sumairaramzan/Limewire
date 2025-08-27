// src/components/SignUpPopup.js
import React, { useState } from "react";
import questionIcon from "../../images/questionmarkButton.svg";
import closeIcon from "../../images/crossButton.svg";
import leftIcon from "../../images/pc.svg";

const SignUpPopup = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const inputStyle = {
    width: "100%",
    height: "32px",
    padding: "4px 6px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #000000",
    borderTopColor: "#DFDFDF",
    borderLeftColor: "#DFDFDF",
    outline: "none",
    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const win95Button = {
    width: "100%",
    minWidth: "80px",
    height: "36px",
    backgroundColor: "#C3C7CB",
    border: "1px solid #000",
    boxShadow:
      "-4px -4px 0px #7E7E7E inset, 2px 2px 0px #F0F0F0 inset, -2px -2px 0px #262626 inset",
    cursor: "pointer",
    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
    fontSize: "14px",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!form.username.trim()) newErrors.username = "Username required";
    if (!form.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.password) newErrors.password = "Password required";
    else if (form.password.length < 6)
      newErrors.password = "At least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSuccess(form); // ✅ parent handles redirect
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "95vw",
        maxWidth: "750px",
        backgroundColor: "#C3C7CB",
        fontFamily: "MS Sans Serif, Tahoma, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          backgroundColor: "#02007F",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 8px",
          fontSize: "16px",
        }}
      >
        <span>Sign up</span>
        <div style={{ display: "flex", gap: 6 }}>
          <img src={questionIcon} alt="help" style={{ width: 18, height: 18 }} />
          <img
            src={closeIcon}
            alt="close"
            style={{ width: 18, height: 18, cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
      </div>

      {/* Body */}
      <div
        className="signup-body"
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "56px 1fr 120px",
          gap: "16px",
          padding: "16px",
          alignItems: "start",
        }}
      >
        {/* Left Icon */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={leftIcon} alt="pc" style={{ width: 40 }} />
        </div>

        {/* Form */}
        <div>
          <div style={{ fontSize: "18px", marginBottom: "14px" }}>
            Create your account
          </div>

          <div
            className="form-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "130px 1fr",
              columnGap: "12px",
              rowGap: "12px",
              alignItems: "center",
            }}
          >
            <label>Username:</label>
            <div>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.username && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.username}
                </div>
              )}
            </div>

            <label>Email:</label>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.email && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.email}
                </div>
              )}
            </div>

            <label>Password:</label>
            <div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.password && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.password}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button style={win95Button} onClick={handleSubmit}>
            Ok
          </button>
          <button style={win95Button} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 600px) {
            .signup-body {
              grid-template-columns: 1fr !important;
            }
            .form-grid {
              grid-template-columns: 1fr !important;
            }
            .form-grid label {
              margin-bottom: 4px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SignUpPopup;
