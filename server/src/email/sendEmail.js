import nodemailer from 'nodemailer'
import config from '../config/env.js'

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email, // Your email address
    pass: config.emailPassword,  // Your email password
  },
});

// Function to send an email
export const sendEmail = async (to, subject, text, html) => {
  try {
    // Define the email options
    const mailOptions = { 
      from: config.email, // Sender address
      to: to,                      // List of receivers
      subject: subject,            // Subject line
      text: text,                  // Plain text body
      html: html,                  // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

// Example usage
// sendEmail(
//   'recipient-email@example.com',
//   'Test Subject',
//   'This is a test email',
//   '<p>This is a test email</p>'
// );
