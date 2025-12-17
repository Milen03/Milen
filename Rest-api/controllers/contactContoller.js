const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact message from ${name}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    res.status(500).json({ message: "Email failed" });
  }
};
