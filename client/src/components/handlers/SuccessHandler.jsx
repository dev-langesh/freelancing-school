import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";

export default function SuccessHandler({ success, setSuccess }) {
  function handleClose() {
    setSuccess((p) => ({ ...p, open: false }));
  }

  return (
    <Snackbar open={success.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {success.message}
      </Alert>
    </Snackbar>
  );
}
