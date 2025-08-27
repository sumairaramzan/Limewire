// src/components/PopupPlayerMinimized.js
import React from "react";
import closeIcon from "../../images/crossButton.svg";
import minimizeIcon from "../../images/Minimize.svg";
import maximizeIcon from "../../images/Maximize.svg";
import albumCover from "../../images/albumCover.svg";
import playIcon from "../../images/playbtn.svg";
import pauseIcon from "../../images/stopbtnn.svg";
import prevIcon from "../../images/prevbtn.svg";
import nextIcon from "../../images/nextbtnn.svg";
import recordIcon from "../../images/recordbtn.svg";
import slider from "../../images/slider-btn.svg";

const PopupPlayerMinimized = ({ onClose, onMaximize }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px", // ✅ visible on all screens
        right: "20px",
        width: "90vw", // ✅ responsive
        maxWidth: "600px",
        background: "#C0C0C0",
        boxShadow:
          "2px 2px 0px #DFDFDF inset, -2px -2px 0px #808080 inset, 1px 1px 0px #FFFFFF inset, -1px -1px 0px #0A0A0A inset",
        fontFamily: `"MS Sans Serif", Tahoma, sans-serif`,
        border: "2px solid #808080",
        zIndex: 9999,
      }}
    >
      {/* Titlebar */}
      <div
        style={{
          height: "28px",
          background: "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6px",
        }}
      >
        <span style={{ color: "#FFFFFF", fontSize: "11px" }}>MediaPlayer.exe</span>
        <div style={{ display: "flex", gap: "2px" }}>
          <img src={minimizeIcon} alt="min" style={{ width: 16, height: 16 }} />
          <img
            src={maximizeIcon}
            alt="max"
            style={{ width: 16, height: 16, cursor: "pointer" }}
            onClick={onMaximize}
          />
          <img
            src={closeIcon}
            alt="close"
            style={{ width: 16, height: 16, cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // ✅ allow stacking on mobile
          padding: "10px",
        }}
      >
        {/* Album Image */}
        <div
          style={{
            flex: "1 1 100%", // ✅ takes full width on mobile
            maxWidth: "220px",
            margin: "0 auto",
          }}
        >
          <img
            src={albumCover}
            alt="album"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right side form + controls */}
        <div style={{ flex: "2 1 300px", marginLeft: "15px", minWidth: "200px" }}>
          {/* Form */}
          {["Artist", "Track", "Album"].map((label) => (
            <div key={label} style={{ marginBottom: "8px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#030303",
                  marginBottom: "2px",
                }}
              >
                {label}:
              </label>
              <input
                type="text"
                placeholder="Type here..."
                style={{
                  width: "100%",
                  fontSize: "12px",
                  color: "#808080",
                  border: "1px solid #DFDFDF",
                  padding: "4px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          {/* Progress bar */}
          <div
            style={{
              border: "2px solid #000",
              margin: "14px 0",
              position: "relative",
              height: "12px",
              background: "#e0e0e0",
            }}
          >
            <img
              src={slider}
              alt="slider"
              style={{
                position: "absolute",
                top: "-6px",
                left: "0%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            />
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap", // ✅ wrap if not enough space
              gap: "8px",
            }}
          >
            {[prevIcon, playIcon, pauseIcon, nextIcon, recordIcon].map((icon, i) => (
              <button
                key={i}
                style={{
                  border: "none",
                  background: "transparent",
                  padding: "0",
                  cursor: "pointer",
                }}
              >
                <img src={icon} alt="control" style={{ width: 28, height: 28 }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPlayerMinimized;
