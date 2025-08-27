import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import startIcon from "../images/startIcons.svg";
import startIcon1 from "../images/limewire.svg";
import startIcon2 from "../images/timeIcons.svg";
import SignUpPopup from "./popups/SignUpPopup";
import LoginUpPopup from "./popups/LoginPopup";
import LimewirePopup from "./popups/LimewirePopup";
import PopupPlayer from "./popups/PopupPlayer";
import PopupPlayerMinimized from "./popups/PopupPlayerMinimized";
import InstagramPopup from "./popups/InstagramPopup";
import PaintPopup from "./popups/PaintPopup";

const WindowsScreen = () => {
  const [activePopup, setActivePopup] = useState(null);

  const baseButtonStyle = {
    backgroundColor: "#C3C3C3",
    height: "40px",
    fontSize: "14px",
    fontWeight: 400,
    borderRadius: 0,
    color: "#000",
    border: "0.13px solid #000",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    flex: "1 1 auto",
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#55AAAA" }}>
      <Container
        fluid
        className="d-flex flex-column justify-content-end p-0"
        style={{ height: "100%" }}
      >
        {/* Taskbar */}
        <div
          className="d-flex flex-wrap justify-content-between align-items-center"
          style={{
            backgroundColor: "#C3C3C3",
            padding: "6px 8px",
            borderTop: "1px solid #fff",
            gap: "8px",
          }}
        >
          <div
            className="d-flex flex-wrap"
            style={{ gap: "8px", flex: "1 1 auto" }}
          >
            {/* Start */}
            <Button
              style={{
                ...baseButtonStyle,
                maxWidth: "120px",
                boxShadow:
                  "1.68px 1.68px 0px #B1B1B1 inset, -1.68px -1.68px 0px #7E7E7E inset, 0.84px 0.84px 0px #F0F0F0 inset, -0.84px -0.84px 0px #262626 inset",
              }}
              onClick={() =>
                setActivePopup((prev) => (prev === "login" ? null : "login"))
              }
            >
              <img
                src={startIcon}
                alt="icon"
                style={{ marginRight: "6px", width: "14px", height: "14px" }}
              />
              Start
            </Button>

            {/* Limewire */}
            <Button
              style={{
                ...baseButtonStyle,
                maxWidth: "200px",
                boxShadow:
                  "1.68px 1.68px 0px #B1B1B1 inset, -1.68px -1.68px 0px #7E7E7E inset, 0.84px 0.84px 0px #F0F0F0 inset, -0.84px -0.84px 0px #262626 inset",
              }}
              onClick={() =>
                setActivePopup((prev) =>
                  prev === "limewireMax" || prev === "limewireMin"
                    ? null
                    : "limewireMax"
                )
              }
            >
              <img
                src={startIcon1}
                alt="icon"
                style={{ marginRight: "6px", width: "14px", height: "14px" }}
              />
              Limewire
            </Button>

            <Button
              style={{
                ...baseButtonStyle,
                maxWidth: "200px",
                boxShadow:
                  "1.68px 1.68px 0px #B1B1B1 inset, -1.68px -1.68px 0px #7E7E7E inset, 0.84px 0.84px 0px #F0F0F0 inset, -0.84px -0.84px 0px #262626 inset",
              }}
              onClick={() =>
                setActivePopup((prev) =>
                  prev === "instagram" ? null : "instagram"
                )
              }
            >
              <img
                src={startIcon1}
                alt="icon"
                style={{ marginRight: "6px", width: "14px", height: "14px" }}
              />
              Instagram
            </Button>
            <Button
  style={{
    ...baseButtonStyle,
    maxWidth: "200px",
    boxShadow:
      "1.68px 1.68px 0px #B1B1B1 inset, -1.68px -1.68px 0px #7E7E7E inset, 0.84px 0.84px 0px #F0F0F0 inset, -0.84px -0.84px 0px #262626 inset",
  }}
  onClick={() =>
    setActivePopup((prev) => (prev === "paint" ? null : "paint"))
  }
>
  <img
    src={startIcon1}
    alt="icon"
    style={{ marginRight: "6px", width: "14px", height: "14px" }}
  />
  Paint
</Button>

          </div>

          {/* Clock (just display, no popup) */}
          <div
            style={{
              ...baseButtonStyle,
              flex: "0 0 auto",
              minWidth: "100px",
              boxShadow:
                "0.84px 0.84px 0px #7E7E7E inset, -0.84px -0.84px 0px #F0F0F0 inset",
              justifyContent: "center",
            }}
          >
            <img
              src={startIcon2}
              alt="icon"
              style={{ marginRight: "6px", width: "14px", height: "14px" }}
            />
            10:32AM
          </div>
        </div>
      </Container>

      {/* Popups */}
      {activePopup === "login" && (
        <LoginUpPopup
          onClose={() => setActivePopup(null)}
          onOpenSignup={() => setActivePopup("signup")}
        />
      )}

      {activePopup === "signup" && (
        <SignUpPopup onClose={() => setActivePopup(null)} />
      )}

      {/* Limewire */}
      {activePopup === "limewireMax" && (
        <LimewirePopup
          onClose={() => setActivePopup(null)}
          onOpenPlayer={() => setActivePopup("playerMax")}
        />
      )}

      {/* Player (maximized) */}
      {activePopup === "playerMax" && (
        <PopupPlayer
          onClose={() => setActivePopup(null)}
          onMinimize={() => setActivePopup("playerMin")}
          onMaximize={() => setActivePopup("playerMax")}
        />
      )}

      {/* Player (minimized) */}
      {activePopup === "playerMin" && (
        <PopupPlayerMinimized
          onClose={() => setActivePopup(null)}
          onMaximize={() => setActivePopup("playerMax")}
        />
      )}
      {activePopup === "instagram" && (
        <InstagramPopup onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "paint" && (
  <PaintPopup onClose={() => setActivePopup(null)} />
)}
    </div>
  );
};

export default WindowsScreen;
