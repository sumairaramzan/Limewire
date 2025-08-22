import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import closeIcon from '../../images/crossButton.svg';
import folderIcon from '../../images/dropdown.svg';

const UploadSongPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
          <div style={{ borderRadius: "0" }}>

        
      <Modal.Header style={headerStyle}>
        <span style={headerTextStyle}>Upload New Song</span>
        <img src={closeIcon} alt="close" onClick={handleClose} style={closeIconStyle} />
      </Modal.Header>

      <Modal.Body style={modalBodyStyle}>
        <Form>
          <Form.Group controlId="songName">
            <Form.Label style={labelStyle}>Song Name:</Form.Label>
            <Form.Control type="text" style={inputStyle} />
          </Form.Group>

          <Form.Group controlId="singerName">
            <Form.Label style={labelStyle}>Singer Name:</Form.Label>
            <Form.Control type="text" style={inputStyle} />
          </Form.Group>

          <Form.Group controlId="chooseFolder" style={{ position: "relative" }}>
  <Form.Label style={labelStyle}>Choose Folder:</Form.Label>
  <Form.Control as="select" style={inputStyle}>
    <option>Folder 1</option>
    <option>Folder 2</option>
  </Form.Control>
  <img
    src={folderIcon}
    alt="folder"
    style={{
      position: "absolute",
      right: "3px",
      top: "75%",   // input کے vertical center کے حساب سے
      transform: "translateY(-50%)",
    //   height: "16px",
    //   width: "16px",
      pointerEvents: "none", // تاکہ click select پر ہی ہو
    }}
  />
</Form.Group>


          {/* Album Image - simple text instead of file input */}
          <Form.Group>
            <Form.Label style={labelStyle}>Album Image:</Form.Label>
           
          </Form.Group>

          {/* Audio File - simple text instead of file input */}
          <Form.Group>
            <Form.Label style={labelStyle}>Audio File:</Form.Label>
           
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer style={footerStyle}>
        <button style={buttonStyle} onClick={handleClose}>
          Cancel
        </button>
        <button style={buttonStyle}>
          Save
        </button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};

// **Styles**
const headerStyle = {
  background: 'linear-gradient(90deg, #000080 0%, #1084D0 100%)',
  color: '#fff',
  fontSize: '11px',
  fontWeight: '400',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '0',
};

const headerTextStyle = {
  marginRight: '10px',
};

const closeIconStyle = {
  cursor: 'pointer',
  height: '16px',
  width: '16px',
};

const modalBodyStyle = {
  backgroundColor: '#C0C0C0',
  boxShadow: '2px 2px 0px #DFDFDF inset, -2px -2px 0px #808080 inset',
  padding: '20px',
  borderRadius: '0',
};

const labelStyle = {
  color: '#030303',
  fontSize: '14px',
  fontWeight: '400',
};

const inputStyle = {
  border: '0.96px solid #DFDFDF',
  borderTop: '0.96px solid #000000',
  borderLeft: '0.96px solid #000000',
  borderRadius: '0',
  padding:'0'
};

const dropdownIconStyle = {
  height: '16px',
  width: '16px',
  marginLeft: '-25px',
};

const fileTextStyle = {
  backgroundColor: '#fff',
  border: '0.96px solid #DFDFDF',
  borderTop: '0.96px solid #000000',
  borderLeft: '0.96px solid #000000',
  padding: '6px 10px',
  fontSize: '14px',
  color: '#030303',
  borderRadius: '0',
};

const footerStyle = {
  backgroundColor: '#C0C0C0',
  border: 'none',
  borderRadius:'none'
};

const buttonStyle = {
  backgroundColor: '#C3C3C3',
  color: '#030303',
  fontSize: '18px',
  fontWeight: 400,
  border: 'none',
  borderRadius: '0',
  padding: '5px 20px',
  boxShadow:
    '-4px -4px 0px #7E7E7E inset, 2px 2px 0px #F0F0F0 inset, -2px -2px 0px #262626 inset',
};

export default UploadSongPopup;
