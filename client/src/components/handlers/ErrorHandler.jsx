import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";

export default function ErrorHandler({ error, setError }) {
  function handleClose() {
    setError((p) => ({ ...p, open: false }));
  }

  return (
    <Snackbar open={error.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error.message}
      </Alert>
    </Snackbar>
  );
}
