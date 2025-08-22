import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import startIcon from "../images/startIcons.svg";
import startIcon1 from "../images/limewire.svg";
import startIcon2 from "../images/timeIcons.svg";
import SignUpPopup from "./popups/SignUpPopup";
import LoginUpPopup from "./popups/LoginPopup";
import LimewirePopup from "./popups/LimewirePopup";

const WindowsScreen = () => {
  // single state for controlling which popup is open
  const [activePopup, setActivePopup] = useState(null); 
  // values can be "signup", "limewire", "login", or null

  // Common button style
  const baseButtonStyle = {
    backgroundColor: "#C3C3C3",
    height: "40px",
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: 0,
    color: "#000",
    border: "0.13px solid #000",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "10px", // spacing from left edge
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#55AAAA" }}>
      <Container
        fluid
        className="d-flex flex-column justify-content-end p-0"
        style={{ height: "100%" }}
      >
        {/* Bottom Buttons Area */}
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            backgroundColor: "#C3C3C3",
            padding: "10px",
            borderTop: "1px solid #fff",
          }}
        >
          <div className="d-flex gap-2">
            {/* Start Button */}
            <Button
              style={{
                ...baseButtonStyle,
                width: "98px",
                boxShadow:
                  "1.68px 1.68px 0px #B1B1B1 inset, -1.68px -1.68px 0px #7E7E7E inset, 0.84px 0.84px 0px #F0F0F0 inset, -0.84px -0.84px 0px #262626 inset",
              }}
              onClick={() =>
                setActivePopup((prev) => (prev === "signup" ? null : "signup"))
              }
            >
              <img
                src={startIcon}
                alt="icon"
                style={{ marginRight: "8px", width: "16px", height: "16px" }}
              />
              Start
            </Button>

            {/* Limewire Button */}
            <Button
              style={{
                ...baseButtonStyle,
                width: "215px",
                boxShadow:
                  "1.68px 1.68px 0px #B1B1B1 inset, -1.68px -1.68px 0px #7E7E7E inset, 0.84px 0.84px 0px #F0F0F0 inset, -0.84px -0.84px 0px #262626 inset",
              }}
              onClick={() =>
                setActivePopup((prev) => (prev === "limewire" ? null : "limewire"))
              }
            >
              <img
                src={startIcon1}
                alt="icon"
                style={{ marginRight: "8px", width: "16px", height: "16px" }}
              />
              Limewire
            </Button>
          </div>

          {/* Right Button (Login) */}
          <Button
            style={{
              ...baseButtonStyle,
              minWidth: "120px",
              boxShadow:
                "0.84px 0.84px 0px #7E7E7E inset, -0.84px -0.84px 0px #F0F0F0 inset",
            }}
            onClick={() =>
              setActivePopup((prev) => (prev === "login" ? null : "login"))
            }
          >
            <img
              src={startIcon2}
              alt="icon"
              style={{ marginRight: "8px", width: "16px", height: "16px" }}
            />
            10:32AM
          </Button>
        </div>
      </Container>

      {/* Render only the active popup */}
      {activePopup === "signup" && (
        <SignUpPopup onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "login" && (
        <LoginUpPopup onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "limewire" && (
        <LimewirePopup onClose={() => setActivePopup(null)} />
      )}
    </div>
  );
};

export default WindowsScreen;
