export const VERIFICATION_EMAIL_TEMPLATE = (code) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f4; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background-color: #27ae60; color: white; text-align: center; padding: 30px;">
      <h1 style="margin: 0;">Verify Your Email</h1>
    </div>
    <div style="padding: 30px; color: #333;">
      <p>Hi there,</p>
      <p>Thanks for signing up! Please use the following verification code to confirm your email address:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="font-size: 36px; font-weight: bold; letter-spacing: 6px; color: #27ae60;">${code}</span>
      </div>
      <p>This code will expire in <strong>15 minutes</strong>.</p>
      <p>If you did not request this, you can safely ignore this email.</p>
      <p>Best regards,<br>Your App Team</p>
    </div>
    <div style="text-align: center; font-size: 12px; color: #999; padding: 20px;">
      This is an automated message. Please do not reply.
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f4; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background-color: #27ae60; color: white; text-align: center; padding: 30px;">
      <h1 style="margin: 0;">Password Reset Successful</h1>
    </div>
    <div style="padding: 30px; color: #333;">
      <p>Hello,</p>
      <p>We're confirming that your password has been successfully reset.</p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #27ae60; color: white; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; display: inline-block; font-size: 30px;">✓</div>
      </div>
      <p>If you didn’t initiate this action, please contact our support team immediately.</p>
      <p>Security tips:</p>
      <ul>
        <li>Use a strong and unique password</li>
        <li>Enable two-factor authentication</li>
        <li>Don’t reuse passwords across sites</li>
      </ul>
      <p>Best regards,<br>Your App Team</p>
    </div>
    <div style="text-align: center; font-size: 12px; color: #999; padding: 20px;">
      This is an automated message. Please do not reply.
    </div>
  </div>
</body>
</html>
`;


export const PASSWORD_RESET_REQUEST_TEMPLATE = (resetURL) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f4; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background-color: #4a90e2; color: white; text-align: center; padding: 30px;">
      <h1 style="margin: 0;">Reset Your Password</h1>
    </div>
    <div style="padding: 30px; color: #333;">
      <p>Hello,</p>
      <p>We received a request to reset your password. If you did not make this request, you can ignore this email.</p>
      <p>Click the button below to reset your password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetURL}" style="background-color: #4a90e2; color: white; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 5px;">Reset Password</a>
      </div>
      <p>This link will expire in <strong>1 hour</strong> for security reasons.</p>
      <p>Best regards,<br>Your App Team</p>
    </div>
    <div style="text-align: center; font-size: 12px; color: #999; padding: 20px;">
      This is an automated message. Please do not reply.
    </div>
  </div>
</body>
</html>
`;
