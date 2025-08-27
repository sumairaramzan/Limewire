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
import cutIcon from "../../limewire/Frame 171.svg";

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
    { icon: cutIcon, name: "Cut" },
  ];

  const colors = [
    "#000000", "#FFFFFF", "#808080", "#C0C0C0",
    "#FF0000", "#800000", "#FFFF00", "#808000",
    "#00FF00", "#008000", "#00FFFF", "#008080",
    "#0000FF", "#000080", "#FF00FF", "#800080"
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "46%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
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
          height: "26px",
          background: "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          fontSize: "13px",
          padding: "0 6px",
        }}
      >
        <span>Untitled - Paint</span>
        <div style={{ display: "flex", gap: "6px" }}>
          <img src={mini} alt="-" style={{ cursor: "pointer" }} />
          <img src={maxi} alt="[]" style={{ cursor: "pointer" }} />
          <img src={close} alt="X" style={{ cursor: "pointer" }} onClick={onClose} />
        </div>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex" }}>
        {/* Left toolbar */}
        <div
          style={{
            background: "#D4D0C8",
            borderRight: "2px solid #808080",
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // 2-column layout
            gridAutoRows: "40px",
            padding: "4px",
            gap: "4px",
            height: "260px",
          }}
        >
          {tools.map((tool, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title={tool.name}
            >
              <img src={tool.icon} alt={tool.name} />
            </div>
          ))}

          {/* Special bottom box */}
          <div
            style={{
              gridColumn: "1 / span 2",
              width: "47px",
              height: "214px",
              margin: "auto",
              background: "#C3C3C3",
              boxShadow: `
                4px 4px 0px 0px #7E7E7E inset,
                -2px -2px 0px 0px #F0F0F0 inset,
                2px 2px 0px 0px #262626 inset
              `,
            }}
          ></div>
        </div>

        {/* Canvas area */}
        <div
          style={{
            flex: 1,
            background: "#FFC0CB",
            border: "2px inset #fff",
            height: "400px",
            overflow: "auto", // both horizontal + vertical scroll
          }}
          className="custom-scrollbar" // same styled scrollbar as Instagram popup
        >
          <img
            src={sampleCanvasImg}
            alt="Canvas"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "800px",
              maxHeight: "800px",
            }}
          />
        </div>
      </div>

      {/* Colors palette */}
      <div
        style={{
          height: "70px",
          display: "grid",
          gridTemplateColumns: "repeat(8, 30px)", // fixed size per swatch
          gridTemplateRows: "repeat(2, 30px)",
          gap: "4px",
          padding: "4px",
          background: "#C0C0C0",
          borderTop: "2px solid #808080",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {colors.map((c, i) => {
          const isSpecial = i >= colors.length - 2; // last 2 boxes
          return (
            <div
              key={i}
              style={{
                background: c,
                cursor: "pointer",
                width: "30px",
                height: "30px",
                boxShadow: isSpecial
                  ? `
                    4px 4px 0px 0px #7E7E7E inset,
                    -2px -2px 0px 0px #F0F0F0 inset,
                    2px 2px 0px 0px #262626 inset
                  `
                  : `
                    -2px -2px 0px 0px #F0F0F0 inset,
                    2px 2px 0px 0px #262626 inset
                  `,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PaintPopup;
