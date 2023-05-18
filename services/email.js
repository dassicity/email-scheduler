const nodemailer = require('nodemailer');

const { USER_EMAIL, USER_PASSWORD } = require('../config/credentials');

const SMTP_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";

const SENDER_EMAIL = USER_EMAIL;
const RECEIVER_EMAIL = "nil.dassic@gmail.com";

const CC = [];
const BCC = [];

const EMAIL_SUBJECT = "HAPPY BIRTHDAY!";
const EMAIL_BODY_HTML = "<h1>Happy Birthday to you!</h1>";

const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc: CC,
    bcc: BCC,
    subject: EMAIL_SUBJECT,
    html: EMAIL_BODY_HTML,
};

const transporter = nodemailer.createTransport({
    host: HOST_SERVICE,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD
    }
});

module.exports = { transporter, options };