import { client, sender } from "./mailtrapConfig.js"; 
import { PASSWORD_RESET_SUCCESS_TEMPLATE,
         PASSWORD_RESET_REQUEST_TEMPLATE,
         VERIFICATION_EMAIL_TEMPLATE } 
         from "./emailTemplates.js";


const sendEmailVerification = async (email, code) => {
  const recipients = [
    {
      email: email,
    }
  ];
  await client.send({
    from: sender,
    to: recipients,
    subject: "Email Verification",
    html: VERIFICATION_EMAIL_TEMPLATE(code),
    category: "email verification",
  });
};

const sendPasswordResetRequest = async (email, resetURL) => {
  const recipients = [
    {
      email: email,
    }
  ];
  await client.send({
    from: sender,
    to: recipients,
    subject: "Password Reset Request",
    html: PASSWORD_RESET_REQUEST_TEMPLATE(resetURL),
    category: "password reset",
  });
};

const sendPasswordResetSuccess = async (email) => {
  const recipients = [
    {
      email: email,
    }
  ];
  await client.send({
    from: sender,
    to: recipients,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    category: "password reset",
  });
};

export { sendEmailVerification, sendPasswordResetRequest, sendPasswordResetSuccess };