import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv"
dotenv.config()

const TOKEN = process.env.MAILTRAP_TOKEN
// console.log(TOKEN);


const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Thr programmer Abdallah Raheem",
};


// const recipients = [
//   {
//     email: "123abdullahraheem123@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);


export {client,sender}