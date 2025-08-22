import React from "react";
import stop from "../../images/stop1.svg"
import play from "../../images/play.svg"
import play2 from "../../images/play2.svg"
import back from "../../images/back.svg"
import next from "../../images/next.svg"
import next2 from "../../images/next2.svg"
import next3 from "../../images/next3.svg"
import next4 from "../../images/next4.svg"
import volum from "../../images/volum.svg"
import app from "../../images/Rectanglepink.svg"
import mini from "../../images/Minimize.svg"
import maxi from "../../images/Maximize.svg"
import close from "../../images/crossButton.svg"
import window from "../../images/mainimg.jpg" 
import volum2 from "../../images/volum2.svg" 
import bar from "../../images/Rectanglebar.svg" 


const PopupPlayer = ({ onClose }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // width: "600px",
        height: "500px",
        background: "#c0c0c0",
        border: "2px solid #808080",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#000080",
          color: "white",
          padding: "4px 8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "MS Sans Serif, sans-serif",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
             src={app}
            alt="limewire"
            style={{ width: "16px", height: "16px", marginRight: "6px" }}
          />
          <span style={{ fontWeight: "bold" }}>limewire</span>
        </div>

        <div style={{ display: "flex" }}>
          <img
              src={mini}
            alt="minimize"
            style={{ width: "16px", height: "16px", marginLeft: "6px", cursor: "pointer" }}
          />
          <img
              src={maxi}
            alt="maximize"
            style={{ width: "16px", height: "16px", marginLeft: "6px", cursor: "pointer" }}
          />
          <img
             src={close}
            alt="close"
            style={{ width: "16px", height: "16px", marginLeft: "6px", cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          background: "#FEBBDC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={window}
          alt="windows logo"
          style={{ maxWidth: "300px" }}
        />
      </div>

      {/* Footer */}
      <div
  style={{
    background: "#c3c3c3",
    height: "20px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    boxShadow: `
      4px 4px 0px 0px #7E7E7E inset,
      -2px -2px 0px 0px #F0F0F0 inset,
      2px 2px 0px 0px #262626 inset
    `,
    boxSizing: "border-box",
    fontFamily: "MS Sans Serif, sans-serif",
    fontSize: "14px",
    color: "#000",
  }}
>
  <img  src={bar}
   style={{position:"absolute" }}
  />
</div>

{/* Existing Footer with Icons */}
<div
  style={{
    background: "#d3d3d3",
    padding: "6px 12px",
    borderTop: "2px solid #808080",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100px",
    width: "100%",
    boxSizing: "border-box",
  }}
>
  <img src={stop} alt="stop" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={play} alt="play" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={play2} alt="play2" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={back} alt="prev" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={next} alt="next" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={next2} alt="next2" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={next3} alt="next3" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={next4} alt="next4" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
  <img src={volum} alt="volume" style={{ width: "20px", height: "20px" }} />
  <img src={volum2} alt="volume2" style={{ width: "70px", height: "70px" }} />
</div>




    </div>
  );
};

export default PopupPlayer;
