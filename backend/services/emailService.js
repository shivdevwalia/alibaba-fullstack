const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const capitalizeName = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const sendUserConfirmationEmail = async (userEmail, userName) => {
  const capitalizedName = capitalizeName(userName);
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Thanks for Contacting Us!",
    html: `<p>Hi ${capitalizedName},</p><p>Thank you for reaching out to us. We’ll get back to you soon.</p>`,
  });
};

const sendAdminNotificationEmail = async (formData) => {
  const { name, email, phone, message } = formData;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};

module.exports = {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
};
