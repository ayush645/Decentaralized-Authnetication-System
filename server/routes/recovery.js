const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('../model/user');

router.post('/recover', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a random token for password reset link
    const token = Math.random().toString(36).substr(2, 15);

    // Save the token and its expiry time in the user record
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

    // Send password reset link to the user's email
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
      auth: {
        user: 'akeem.orn38@ethereal.email',
        pass: 't8qRdNVuRMsrmkaRcK',
      },
    });

    const mailOptions = {
      from: 'akeem.orn38@ethereal.email',
      to: email,
      subject: 'Password Reset Request',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
        + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
        + `${process.env.FRONTEND_BASE_URL}/reset-password?token=${token}\n\n`
        + `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to send password reset email' });
      }

      return res.json({ message: 'Password reset link sent to your email' });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Account recovery failed' });
  }
});

module.exports = router;
