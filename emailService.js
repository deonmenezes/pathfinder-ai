import nodemailer from 'nodemailer';

export async function sendNotificationEmail(data) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Chris Pathfinder Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New Form Submission - Career Guidance Request",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>📩 New Career Guidance Form Submission</h2>
        <p>You have received a new form submission with the following details:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Full Name:</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.fullName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Date of Birth:</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.dob}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Profession:</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.profession}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Gender:</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.gender}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Mobile No:</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Email:</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Message:</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>
        </table>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log("✅ Notification email sent successfully.");
}