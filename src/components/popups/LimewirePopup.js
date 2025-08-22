// src/components/LimewirePopup.js
import React, { useState } from "react";
import closeIcon from "../../images/crossButton.svg";
import minimizeIcon from "../../images/Minimize.svg";
import maximizeIcon from "../../images/Maximize.svg";
import userImg from "../../images/user.svg";
import folderIcon from "../../images/folder.svg";
import searchIcon from "../../images/search_file.svg";
import addIcon from "../../images/add_new_songs.svg";
import UploadSongPopup from "./UploadSongPopup";
import AddSongsPopup from "./AddSongsPopup";
import { Modal } from "react-bootstrap";
import PopupPlayer from "./PopupPlayer";

const LimewirePopup = ({ onClose }) => {
  // track which popup is open: "folder" | "song" | null
  const [activePopup, setActivePopup] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80vw",
        height: "80vh",
        maxWidth: "1100px",
        maxHeight: "833px",
        backgroundColor: "#C0C0C0",
        boxShadow:
          "3.1px 3.1px 0px #FFFFFF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #DFDFDF inset, -1.55px -1.55px 0px #0A0A0A inset",
        display: "flex",
        flexDirection: "column",
        fontFamily: `"MS Sans Serif", Tahoma, sans-serif`,
      }}
    >
      {/* Top Titlebar */}
      <div
        style={{
          height: "32px",
          background: "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
          boxShadow:
            "3.1px 3.1px 0px #FFFFFF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #DFDFDF inset, -1.55px -1.55px 0px #0A0A0A inset",
        }}
      >
        <span style={{ color: "#fff", fontSize: "17px", fontWeight: 400 }}>
          Limewire
        </span>
        <div style={{ display: "flex", gap: "4px" }}>
          <img src={minimizeIcon} alt="min" style={{ width: 18, height: 18 }} />
          <img src={maximizeIcon} alt="max" style={{ width: 18, height: 18 }} />
          <img
            src={closeIcon}
            alt="close"
            style={{ width: 18, height: 18, cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
      </div>

      {/* Inner Wrapper */}
      <div
        style={{
          flex: 1,
          display: "flex",
          boxShadow:
            "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "260px",
            backgroundColor: "#BFBFBF",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
          }}
        >
          {/* User Box */}
          <div
            style={{
              padding: "8px",
              marginBottom: "12px",
              background: "#C0C0C0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              boxShadow:
                "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
              border: "1.55px solid #FFFFFF",
            }}
          >
            <img src={userImg} alt="user" style={{ width: 40, height: 40 }} />
            <div style={{ fontSize: "17px", color: "#000" }}>Furqan Ali</div>
            <div style={{ fontSize: "17px", color: "#000" }}>@gustaluz</div>
          </div>

          {/* Folders */}
          <div
            style={{
              flex: 1,
              padding: "8px",
              boxShadow:
                "3.1px 3.1px 0px #808080 inset, -3.1px -3.1px 0px #DFDFDF inset, 1.55px 1.55px 0px #0A0A0A inset, -1.55px -1.55px 0px #FFFFFF inset",
            }}
          >
            <div style={{ fontSize: "17px", color: "#222", fontWeight: 400 }}>
              La Fortuna
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <img src={folderIcon} alt="folder" style={{ width: 16, height: 16 }} />
                RICH AND BROKE
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <img src={folderIcon} alt="folder" style={{ width: 16, height: 16 }} />
                HOROSCOPE
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <img src={folderIcon} alt="folder" style={{ width: 16, height: 16 }} />
                ITALIA BREEZE
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            padding: "12px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Searchbar + buttons */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                width: "408px",
                height: "43px",
                display: "flex",
                alignItems: "center",
                background: "#fff",
                boxShadow:
                  "3.1px 3.1px 0px #808080 inset, -3.1px -3.1px 0px #DFDFDF inset, 1.55px 1.55px 0px #0A0A0A inset, -1.55px -1.55px 0px #FFFFFF inset",
              }}
            >
              <img
                src={searchIcon}
                alt="search"
                style={{ width: 16, height: 16, marginLeft: 6 }}
              />
              <input
                type="text"
                placeholder="Search Songs"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  paddingLeft: "6px",
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {/* Add New Folder */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "0 12px",
                  height: "43px",
                  background: "#C0C0C0",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#222",
                  boxShadow:
                    "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setActivePopup("folder")}
              >
                <img src={addIcon} alt="add" style={{ width: 16, height: 16 }} />
                Add New Folder
              </button>

              {/* Add New Song */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "0 12px",
                  height: "43px",
                  background: "#C0C0C0",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#222",
                  boxShadow:
                    "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setActivePopup("song")}
              >
                <img src={addIcon} alt="add" style={{ width: 16, height: 16 }} />
                Add New Song
              </button>
            </div>
          </div>

          {/* Recently Added */}
          <div
            style={{
              marginTop: "20px",
              fontSize: "17px",
              color: "#222",
              fontWeight: 400,
              borderBottom: "1.55px solid #FFFFFF",
              paddingBottom: "4px",
            }}
          >
            Recently Added songs
          </div>

          {/* Main White Box */}
          <div
            style={{
              flex: 1,
              marginTop: "8px",
              padding: "10px",
              background: "#fff",
              overflow: "auto",
              boxShadow:
                "3.1px 3.1px 0px #808080 inset, -3.1px -3.1px 0px #DFDFDF inset, 1.55px 1.55px 0px #0A0A0A inset, -1.55px -1.55px 0px #FFFFFF inset",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "16px",
                color: "#000",
              }}
            >
              <thead>
                <tr>
                  <th style={{ textAlign: "left", fontSize: "17px", fontWeight: 400 }}>#</th>
                  <th style={{ textAlign: "left", fontSize: "17px", fontWeight: 400 }}>Title</th>
                  <th style={{ textAlign: "left", fontSize: "17px", fontWeight: 400 }}>Album</th>
                  <th style={{ textAlign: "left", fontSize: "17px", fontWeight: 400 }}>Date added</th>
                  <th style={{ textAlign: "left", fontSize: "17px", fontWeight: 400 }}>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td onClick={() => setShow(true)}>See You Again.mp3</td>
                  <td>WAP:New Rap Cutz</td>
                  <td>Jan 15,2025</td>
                  <td>3:15</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Shape of you.mp3</td>
                  <td>Lost americana</td>
                  <td>Jan 18,2025</td>
                  <td>2:10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "6px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          boxShadow:
            "-6.21px -6.21px 0px #7E7E7E inset, 3.1px 3.1px 0px #F0F0F0 inset, -3.1px -3.1px 0px #262626 inset",
        }}
      >
        <div style={{ fontSize: "14px", color: "#000" }}>
          4 files 19.0 GB Total
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "14px", color: "#000" }}>Storage</span>
          <div
            style={{
              width: "97px",
              height: "15px",
              background: "#fff",
              boxShadow:
                "3.1px 3.1px 0px #DFDFDF inset, -3.1px -3.1px 0px #808080 inset, 1.55px 1.55px 0px #FFFFFF inset, -1.55px -1.55px 0px #0A0A0A inset",
            }}
          >
            <div style={{ width: "60%", height: "100%", background: "#010C87" }} />
          </div>
        </div>
      </div>

      {/* Popups */}
      {activePopup === "folder" && (
        <UploadSongPopup show={true} handleClose={() => setActivePopup(null)} />
      )}
      {activePopup === "song" && (
        <AddSongsPopup show={true} handleClose={() => setActivePopup(null)} />
      )}

<Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        centered
        dialogClassName="custom-modal"
        contentClassName="custom-modal-content"
        style={{ border: "2px solid #808080" }}
      >
        <PopupPlayer onClose={() => setShow(false)} />
      </Modal>
    </div>
  );
};

export default LimewirePopup;
