import React from "react";
import Dialog from "@mui/material/Dialog";

export default function DialogBox(props) {
  const { setShow, show, about } = props;

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dialog onClose={handleClose} open={show}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          padding: "20px",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "600", alignSelf: 'center' }}>About Company:</p>
        {about}
      </div>
    </Dialog>
  );
}
