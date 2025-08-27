// src/components/LoginUpPopup.js
import React, { useState } from "react";
import questionIcon from "../../images/questionmarkButton.svg";
import closeIcon from "../../images/crossButton.svg";
import leftIcon from "../../images/pc.svg";

const LoginUpPopup = ({ onClose, onOpenSignup, onSuccess, registeredUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const inputStyle = {
    width: "100%",
    height: "clamp(32px, 6vh, 40px)",
    padding: "4px 6px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #000000",
    borderTopColor: "#DFDFDF",
    borderLeftColor: "#DFDFDF",
    outline: "none",
    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
    fontSize: "clamp(13px, 3.5vw, 15px)",
    boxSizing: "border-box",
  };

  const win95Button = {
    width: "100%",
    minWidth: 0,
    height: "clamp(32px, 6.5vh, 40px)",
    backgroundColor: "#C3C7CB",
    border: "1px solid #000",
    boxShadow:
      "-4px -4px 0px #7E7E7E inset, 2px 2px 0px #F0F0F0 inset, -2px -2px 0px #262626 inset",
    cursor: "pointer",
    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
    fontSize: "clamp(13px, 3.5vw, 15px)",
    lineHeight: 1.2,
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleLogin = () => {
    let newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email required";
    if (!form.password) newErrors.password = "Password required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check credentials
    if (
      registeredUser &&
      form.email === registeredUser.email &&
      form.password === registeredUser.password
    ) {
      onSuccess(registeredUser); // ✅ redirect handled
    } else {
      setErrors({ password: "Invalid email or password" });
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(95vw, 750px)",
        maxHeight: "95vh",
        overflow: "auto",
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
        }}
      >
        <span style={{ fontSize: "clamp(16px, 4.5vw, 20px)" }}>Login</span>
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
        className="login-body"
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "56px 1fr 120px",
          gap: "clamp(10px, 3vw, 16px)",
          padding: "clamp(12px, 3vw, 16px)",
          alignItems: "start",
        }}
      >
        {/* Icon */}
        <div
          className="login-icon"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={leftIcon} alt="pc" style={{ width: 40 }} />
        </div>

        {/* Form */}
        <div>
          <div
            style={{
              fontSize: "clamp(14px, 4vw, 18px)",
              marginBottom: "clamp(10px, 3vw, 14px)",
            }}
          >
            Enter your email and password
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(70px, 90px) 1fr", // ✅ label smaller, input wider
              columnGap: "clamp(8px, 3vw, 12px)",
              rowGap: "clamp(10px, 3vw, 14px)",
              alignItems: "center",
            }}
          >
            <label style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}>
              Email:
            </label>
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

            <label style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}>
              Password:
            </label>
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
            gap: "clamp(8px, 2.5vw, 12px)",
          }}
        >
          <button style={win95Button} onClick={handleLogin}>
            Ok
          </button>
          <button style={win95Button} onClick={onClose}>
            Cancel
          </button>
          <button
            style={win95Button}
            onClick={() => {
              onClose();
              onOpenSignup();
            }}
          >
            Sign up
          </button>
        </div>
      </div>

      {/* Responsive tweaks */}
      <style>
        {`
          @media (max-width: 600px) {
            .login-icon {
              display: none !important; /* hide PC icon */
            }
            .login-body {
              grid-template-columns: 1fr 100px !important; /* form + buttons */
            }
            .login-body > div:nth-child(2) > div {
              grid-template-columns: minmax(70px, 85px) 1fr !important; /* smaller label, wider input */
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoginUpPopup;
