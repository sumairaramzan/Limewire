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
  const [activePopup, setActivePopup] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
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
      className="limewire-popup"
    >
      {/* Titlebar */}
      <div
        style={{
          height: "32px",
          background: "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
        }}
      >
        <span style={{ color: "#fff", fontSize: "16px" }}>Limewire</span>
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

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap", // allows stacking on mobile
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            flex: "0 0 260px",
            minWidth: "220px",
            backgroundColor: "#BFBFBF",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
          }}
          className="limewire-sidebar"
        >
          {/* User */}
          <div
            style={{
              padding: "8px",
              marginBottom: "12px",
              background: "#C0C0C0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <img src={userImg} alt="user" style={{ width: 40, height: 40 }} />
            <div style={{ fontSize: "15px", color: "#000" }}>Furqan Ali</div>
            <div style={{ fontSize: "14px", color: "#000" }}>@gustaluz</div>
          </div>

          {/* Folders */}
          <div style={{ flex: 1, padding: "8px" }}>
            <div style={{ fontSize: "15px", fontWeight: 600 }}>La Fortuna</div>
            <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
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

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            minWidth: "280px",
          }}
        >
          {/* Search + Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            {/* Search */}
            <div
              style={{
                flex: "1 1 220px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                background: "#fff",
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

            {/* Buttons */}
            <button
              style={{
                flex: "1 1 120px",
                height: "40px",
                background: "#C0C0C0",
                fontSize: "14px",
                border: "none",
              }}
              onClick={() => setActivePopup("folder")}
            >
              <img src={addIcon} alt="add" style={{ width: 14, height: 14, marginRight: 6 }} />
              Add Folder
            </button>
            <button
              style={{
                flex: "1 1 120px",
                height: "40px",
                background: "#C0C0C0",
                fontSize: "14px",
                border: "none",
              }}
              onClick={() => setActivePopup("song")}
            >
              <img src={addIcon} alt="add" style={{ width: 14, height: 14, marginRight: 6 }} />
              Add Song
            </button>
          </div>

          {/* Table */}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              background: "#fff",
              padding: "8px",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "14px",
                }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Date</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td onClick={() => setShow(true)}>See You Again.mp3</td>
                    <td>WAP: New Rap</td>
                    <td>Jan 15, 2025</td>
                    <td>3:15</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Shape of You.mp3</td>
                    <td>Lost americana</td>
                    <td>Jan 18, 2025</td>
                    <td>2:10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          fontSize: "12px",
        }}
      >
        <div>4 files 19.0 GB Total</div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>Storage</span>
          <div style={{ width: "80px", height: "12px", background: "#fff" }}>
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

      {/* Player Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        centered
        style={{ border: "2px solid #808080" }}
      >
        <PopupPlayer onClose={() => setShow(false)} />
      </Modal>
    </div>
  );
};

export default LimewirePopup;
