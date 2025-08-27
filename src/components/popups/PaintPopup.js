// src/components/popups/PaintPopup.js
import React from "react";
import close from "../../images/crossButton.svg";
import mini from "../../images/Minimize.svg";
import maxi from "../../images/Maximize.svg";

// Tool icons
import pencilIcon from "../../limewire/Frame 165.svg";
import brushIcon from "../../limewire/Frame 166.svg";
import zoomIcon from "../../limewire/Frame 167.svg";
import rectIcon from "../../limewire/Frame 168.svg";
import circleIcon from "../../limewire/Frame 169.svg";
import shapeIcon from "../../limewire/Frame 170.svg";
import cutIcon1 from "../../limewire/Frame 171.svg";
import cutIcon2 from "../../limewire/Frame 172.svg";
import cutIcon3 from "../../limewire/Frame 173.svg";
import cutIcon4 from "../../limewire/Frame 174.svg";
import cutIcon5 from "../../limewire/Frame 175.svg";
import cutIcon6 from "../../limewire/Frame 176.svg";
import cutIcon7 from "../../limewire/Frame 177.svg";
import cutIcon8 from "../../limewire/Frame 178.svg";
import cutIcon9 from "../../limewire/Frame 179.svg";
import cutIcon10 from "../../limewire/Frame 180.svg";

// Sample canvas image
import sampleCanvasImg from "../../images/mainimg.jpg";

const PaintPopup = ({ onClose }) => {
  const tools = [
    { icon: pencilIcon, name: "Pencil" },
    { icon: brushIcon, name: "Brush" },
    { icon: zoomIcon, name: "Zoom" },
    { icon: rectIcon, name: "Rectangle" },
    { icon: circleIcon, name: "Circle" },
    { icon: shapeIcon, name: "Shape" },
    { icon: cutIcon1, name: "Cut 1" },
    { icon: cutIcon2, name: "Cut 2" },
    { icon: cutIcon3, name: "Cut 3" },
    { icon: cutIcon4, name: "Cut 4" },
    { icon: cutIcon5, name: "Cut 5" },
    { icon: cutIcon6, name: "Cut 6" },
    { icon: cutIcon7, name: "Cut 7" },
    { icon: cutIcon8, name: "Cut 8" },
    { icon: cutIcon9, name: "Cut 9" },
    { icon: cutIcon10, name: "Cut 10" },
  ];

  // Expanded palette (48 colors)
  const colors = [
    "#000000", "#808080", "#C0C0C0", "#FFFFFF",
    "#800000", "#FF0000", "#FF8080", "#400000",
    "#808000", "#FFFF00", "#FFFF80", "#404000",
    "#008000", "#00FF00", "#80FF80", "#004000",
    "#008080", "#00FFFF", "#80FFFF", "#004040",
    "#000080", "#0000FF", "#8080FF", "#000040",
    "#800080", "#FF00FF", "#FF80FF", "#400040",
    "#804000", "#FF8000", "#FFC080", "#402000",
    "#008040", "#00FF80", "#80FFC0", "#004020",
    "#408080", "#40C0C0", "#80FFFF", "#204040",
    "#404080", "#8080C0", "#C0C0FF", "#202040",
    "#606060", "#A0A0A0", "#E0E0E0", "#303030"
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "46%",
        left: "69%",
        transform: "translate(-50%, -50%)",
        width: "95vw",
        maxWidth: "800px",
        height: "90vh",
        maxHeight: "95vh",
        background: "#C0C0C0",
        border: "2px solid #000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Tahoma, Arial, sans-serif",
        zIndex: 999,
        boxShadow: `
          2px 2px 0px 0px #DFDFDF inset,
          -2px -2px 0px 0px #808080 inset,
          1px 1px 0px 0px #FFFFFF inset,
          -1px -1px 0px 0px #0A0A0A inset
        `,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          height: "32px",
          background: "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          fontSize: "14px",
          padding: "0 6px",
          flexShrink: 0,
        }}
      >
        <span>Untitled - Paint</span>
        <div style={{ display: "flex", gap: "6px" }}>
          <img src={mini} alt="-" style={{ cursor: "pointer" }} />
          <img src={maxi} alt="[]" style={{ cursor: "pointer" }} />
          <img
            src={close}
            alt="X"
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        {/* Left toolbar */}
        <div
          style={{
            background: "#D4D0C8",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            flexShrink: 0,
            width: "18vw",
            maxWidth: "90px",
            overflowY: "auto",
            gap: "0px",
          }}
        >
          {tools.map((tool, i) => (
            <div
              key={i}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #A0A0A0",
                padding: "4px",
              }}
              title={tool.name}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        {/* Canvas area */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: "2px inset #fff",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="custom-scrollbar"
        >
          <img
            src={sampleCanvasImg}
            alt="Canvas"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "1200px",
            }}
          />
        </div>
      </div>

      {/* Colors palette */}
      <div
        style={{
          padding: "6px",
          background: "#C0C0C0",
          borderTop: "2px solid #808080",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
          }}
        >
          {colors.map((c, i) => (
            <div
              key={i}
              style={{
                background: c,
                width: "clamp(18px, 5vw, 24px)", // responsive size
                height: "clamp(18px, 5vw, 24px)",
                cursor: "pointer",
                boxShadow: `
                  -2px -2px 0px 0px #F0F0F0 inset,
                  2px 2px 0px 0px #262626 inset
                `,
                flex: "1 0 auto",
                maxWidth: "24px",
                maxHeight: "24px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaintPopup;
