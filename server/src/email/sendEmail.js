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
const sendEmail = async (to, subject, text, html) => {
  try {
    // Define the email options
    const mailOptions = { 
      from: config.email, // Sender address
      to: to,                      // List of receivers
      subject: subject,            // Subject line
      html: html,                  // HTML body
    };

      // Conditionally add the text field if it's provided
      if (text) {
        mailOptions.text = text;
      }

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

export const welcomeEmail = async (email, first_name) => {
  // console.log(email);
  await sendEmail(
    email,
    `You're All Set Up ${first_name} 😁`,
    null,
    `<!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Welcome to Budgetwise!</title>
        </head>
        <body>
        <p>Hello ${first_name},</p>
        <p>Thanks for registering.</p>
        <p>You're now all set up and ready to take back control with your finances.</p>
        <p>Happy Budgetting,</p>
        <p><strong>Budgetwise</strong></p>
        </body>
        </html>`,
);
}

// Example usage
// sendEmail(
//   'recipient-email@example.com',
//   'Test Subject',
//   'This is a test email',
//   '<p>This is a test email</p>'
// );
