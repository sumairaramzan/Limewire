// src/components/PopupPlayerMinimized.js
import React from "react";
import closeIcon from "../../images/crossButton.svg";
import minimizeIcon from "../../images/Minimize.svg";
import maximizeIcon from "../../images/Maximize.svg";
import albumCover from "../../images/albumCover.svg"; // replace with your actual cover
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
        bottom: "-50px",
        right: "-260px",
        transform: "translate(-50%, -50%)",
        width: "600px",
        background: "#C0C0C0",
        boxShadow:
          "2px 2px 0px #DFDFDF inset, -2px -2px 0px #808080 inset, 1px 1px 0px #FFFFFF inset, -1px -1px 0px #0A0A0A inset",
        fontFamily: `"MS Sans Serif", Tahoma, sans-serif`,
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
          boxShadow:
            "2px 2px 0px #FFFFFF inset, -2px -2px 0px #808080 inset, 1px 1px 0px #DFDFDF inset, -1px -1px 0px #0A0A0A inset",
        }}
      >
        <span style={{ color: "#FFFFFF", fontSize: "11px", fontWeight: 400 }}>
          MediaPlayer.exe
        </span>
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
      <div style={{ display: "flex", padding: "10px" }}>
        {/* Album Image */}
        <div style={{ flex: "0 0 40%", display: "flex", justifyContent: "center" }}>
          <img src={albumCover} alt="album" style={{ width: "100%", maxWidth: "220px" }} />
        </div>

        {/* Right side form + controls */}
        <div style={{ flex: "1", marginLeft: "15px" }}>
          {/* Form */}
          <div style={{ marginBottom: "8px" }}>
            <label
              style={{ display: "block", fontSize: "14px", color: "#030303", marginBottom: "2px" }}
            >
              Artist:
            </label>
            <input
              type="text"
              placeholder="Ahmad@gmail.com"
              style={{
                width: "100%",
                fontSize: "12px",
                color: "#808080",
                border: "0.96px solid #DFDFDF",
                padding: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label
              style={{ display: "block", fontSize: "14px", color: "#030303", marginBottom: "2px" }}
            >
              Track:
            </label>
            <input
              type="text"
              placeholder="Ahmad@gmail.com"
              style={{
                width: "100%",
                fontSize: "12px",
                color: "#808080",
                border: "0.96px solid #DFDFDF",
                padding: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label
              style={{ display: "block", fontSize: "14px", color: "#030303", marginBottom: "2px" }}
            >
              Album:
            </label>
            <input
              type="text"
              placeholder="Ahmad@gmail.com"
              style={{
                width: "100%",
                fontSize: "12px",
                color: "#808080",
                border: "0.96px solid #DFDFDF",
                padding: "4px",
              }}
            />
          </div>

          {/* Progress bar */}
          <div
  style={{
   
    border: "3.22px solid #000000",
    margin: "14px 0",
    position: "relative",
  }}
>
  {/* The draggable button (using img) */}
  <img
    src={slider} // replace with your img path
    alt="slider"
    style={{
      position: "absolute",
      top: "-10px", // centers image vertically
      left: "0%", // position handle at 40%
      width: "20px", // adjust according to your img
      height: "20px",
      cursor: "pointer",
    }}
  />
</div>


          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={{ border: "none", background: "transparent" ,padding:"0" }}>
              <img src={prevIcon} alt="prev" style={{ width: 28, height: 28 }} />
            </button>
            <button style={{ border: "none", background: "transparent" ,padding:"0"}}>
              <img src={playIcon} alt="play" style={{ width: 28, height: 28 }} />
            </button>
            <button style={{ border: "none", background: "transparent" ,padding:"0" }}>
              <img src={pauseIcon} alt="stop" style={{ width: 28, height: 28 }} />
            </button>
            <button style={{ border: "none", background: "transparent" ,padding:"0" }}>
              <img src={nextIcon} alt="next" style={{ width: 28, height: 28 }} />
            </button>
            <button style={{ border: "none", background: "transparent" ,padding:"0" }}>
              <img src={recordIcon} alt="record" style={{ width: 28, height: 28 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPlayerMinimized;
