import express from 'express';
import axios from 'axios';
import { sendNotificationEmail } from './emailService.js';

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("✅ Received a request to /api/submit-form");
  try {
    const { captchaToken, ...formData } = req.body;
    if (!captchaToken) {
      console.log("❌ Error: reCAPTCHA token is missing.");
      return res.status(400).json({ message: "reCAPTCHA token is missing." });
    }
    const secretKey = process.env.RECAPTCHA_V2_SECRET_KEY;
    if (!secretKey) {
        console.log("❌ Server Error: RECAPTCHA_V2_SECRET_KEY is not set in .env file.");
        return res.status(500).json({ message: "Server configuration error." });
    }
    console.log("🤫 Verifying reCAPTCHA token...");
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
    const response = await axios.post(verificationURL);
    const { success } = response.data;
    if (!success) {
      console.log("❌ reCAPTCHA verification failed.");
      return res.status(400).json({ message: "reCAPTCHA verification failed. Please try again." });
    }
    console.log("✅ reCAPTCHA verified successfully.");
    console.log("📧 Sending notification email...");
    await sendNotificationEmail(formData);
    console.log("✅ Email sent successfully.");
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌❌❌ CRITICAL ERROR:", error.message);
    res.status(500).json({ message: "Server error. Failed to submit form." });
  }
});

export default router;