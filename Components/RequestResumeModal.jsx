"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const RequestResumeModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({ email: "", reason: "" });

  // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  const SERVICE_ID = "service_bls133b";
  const TEMPLATE_ID = "template_345jxpn";
  const PUBLIC_KEY = "a-wqCt8BwKlh3t3o7";

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      tempErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!reason) {
      tempErrors.reason = "Reason is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    const templateParams = {
      from_email: email,
      message: reason,
      to_name: "Faith", // Optional: Customize as needed
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus({ type: "success", message: "Request sent successfully!" });
      setTimeout(() => {
        // Reset form and close modal after success
        setEmail("");
        setReason("");
        setErrors({});
        setStatus({ type: "", message: "" });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setReason("");
    setErrors({});
    setStatus({ type: "", message: "" });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: "bold" }}>Request Resume</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ mt: 1 }}>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Please provide your email and a reason for requesting the resume.
          </Typography>

          {status.message && (
            <Alert severity={status.type} sx={{ mb: 2 }}>
              {status.message}
            </Alert>
          )}

          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            sx={{ mb: 2 }}
            disabled={loading}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="dense"
            id="reason"
            label="Reason for Request"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
              if (errors.reason) setErrors({ ...errors, reason: "" });
            }}
            disabled={loading}
            error={!!errors.reason}
            helperText={errors.reason}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit" disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={loading}
          sx={{
            bgcolor: "#111111",
            color: "white",
            "&:hover": {
              bgcolor: "#333333",
            },
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Request"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestResumeModal;
