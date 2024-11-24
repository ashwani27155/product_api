const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 465,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "1a856279a03d70",
        pass: "c2a2f642fb5bc7",
    },
});
module.exports = async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '1a856279a03d70',
        to: "abic.ashwani@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}