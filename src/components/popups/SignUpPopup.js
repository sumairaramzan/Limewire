// src/components/SignUpPopup.js
import React from "react";
import questionIcon from "../../images/questionmarkButton.svg";
import closeIcon from "../../images/crossButton.svg";
import leftIcon from "../../images/pc.svg";

const SignUpPopup = ({ onClose }) => {
  const inputStyle = {
    width: "369px",
    height: "23px",
    padding: "2px 4px",
    backgroundColor: "#FFFFFF",
    // Win95 bevel: light top/left, dark right/bottom
    border: "1px solid #000000",
    borderTopColor: "#DFDFDF",
    borderLeftColor: "#DFDFDF",
    outline: "none",
    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
    fontSize: "14px",
  };

  const win95Button = {
    width: "100px",
    height: "32px",
    backgroundColor: "#C3C7CB",
    border: "1px solid #000",
    boxShadow:
      "-4px -4px 0px #7E7E7E inset, 2px 2px 0px #F0F0F0 inset, -2px -2px 0px #262626 inset",
    cursor: "pointer",
    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
    fontSize: "14px",
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "753px",
        height: "232px",
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
        <span style={{ fontSize: "20px", fontWeight: 400 }}>Sign up</span>
        <div style={{ display: "flex", gap: 6 }}>
          <img
            src={questionIcon}
            alt="help"
            style={{ width: 18, height: 18, cursor: "pointer" }}
          />
          <img
            src={closeIcon}
            alt="close"
            style={{ width: 18, height: 18, cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
      </div>

      {/* Body: 3-column grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "56px 1fr 120px",
          gap: "16px",
          padding: "16px",
          alignItems: "start",
          backgroundColor: "#C3C7CB",
        }}
      >
        {/* Left column: PC icon */}
        <div>
          <img src={leftIcon} alt="pc" style={{ width: 40, height: "auto" }} />
        </div>

        {/* Middle column: heading + form */}
        <div>
          <div
            style={{
              color: "#030303",
              fontSize: "20px",
              fontWeight: 400,
              marginBottom: "14px",
            }}
          >
            Enter your email and password
          </div>

          {/* Form grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "130px 1fr",
              columnGap: "12px",
              rowGap: "10px",
              alignItems: "center",
            }}
          >
            <label
              style={{ textAlign: "left", fontSize: "16px", color: "#000" }}
            >
              User name:
            </label>
            <input type="text" placeholder="Ahmad" style={inputStyle} />

            <label
              style={{ textAlign: "left", fontSize: "16px", color: "#000" }}
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Ahmad@gmail.com"
              style={inputStyle}
            />

            <label
              style={{ textAlign: "left", fontSize: "16px", color: "#000" }}
            >
              Password:
            </label>
            <input type="password" placeholder="********" style={inputStyle} />
          </div>
        </div>

        {/* Right column: buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "stretch",
          }}
        >
          <button style={win95Button}>Ok</button>
          <button style={win95Button}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPopup;
