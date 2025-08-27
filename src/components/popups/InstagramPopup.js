// src/components/popups/InstagramPopup.js
import React from "react";
import close from "../../images/crossButton.svg";
import mini from "../../images/Minimize.svg";
import maxi from "../../images/Maximize.svg";
import post from "../../images/albumCover.svg"; 
const InstagramPopup = ({ onClose }) => {
  return (
    <div
    style={{
      position: "absolute",   // float on screen
      top: "46%",              // center vertically
      left: "20%",             // center horizontally
      transform: "translate(-50%, -50%)",
      zIndex: 999,             // stay above taskbar
      width: "450px",
      height: "500px",
      background: "#E5E5E5",
      border: "2px solid #000",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Arial, sans-serif",
    }}
  >
      {/* Header */}
      <div
        style={{
          height: "30px",
          background: "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          fontSize: "14px",
          padding: "0 8px",
          boxShadow:
            "2px 2px 0px #FFFFFF inset, -2px -2px 0px #808080 inset, 1px 1px 0px #DFDFDF inset, -1px -1px 0px #0A0A0A inset",
        }}
      >
        <span>Instagram.exe</span>
        <div style={{ display: "flex", gap: "6px" }}>
          <img src={mini} alt="-" />
          <img src={maxi} alt="[]" />
          <img
            src={close}
            alt="X"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Profile */}
      <div style={{ padding: "12px", borderBottom: "1.5px solid #000" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#000",
            }}
          ></div>
          <div>
            <div style={{ color: "#030303", fontSize: "16px", fontWeight: 400 }}>
              @thatdoubleokid
            </div>
            <div style={{ display: "flex", gap: "15px", marginTop: "5px" }}>
              <span>7,304 followers</span>
              <span>3,404 following</span>
              <span>182 posts</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
          <button
            style={{
              flex: 1,
              background: "#fff",
              color: "#000",
              border: "1px solid #000",
              boxShadow:
                "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
            }}
          >
            Follow
          </button>
          <button
            style={{
              flex: 1,
              background: "#C0C0C0",
              color: "#222",
              border: "1px solid #000",
              boxShadow:
                "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
            }}
          >
            Message
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1.5px solid #000",
        }}
      >
        {["Grid", "Reels", "Tags"].map((tab, idx) => (
          <button
            key={idx}
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #000",
              background: idx === 0 ? "#fff" : "#C0C0C0",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div
        style={{
          flex: 1,
          overflowY: "scroll",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
          padding: "4px",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <img
            key={i}
            src={post}
            alt="post"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          borderTop: "1.5px solid #000",
        }}
      >
        {["Home", "Search", "+", "Reels", "Profile"].map((btn, idx) => (
          <button
            key={idx}
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #000",
              background: "#C0C0C0",
              color: "#222",
              boxShadow:
                "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InstagramPopup;
