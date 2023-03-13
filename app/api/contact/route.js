const nodemailer = require('nodemailer');

const formatText = ({ name, email, subject, message }) =>
  `name: ${name}\nemail: ${email}\nSubject: ${subject}\nmessage: ${message}`;
const formatHtml = ({ name, email, subject, message }) => `
<strong>name:</strong>${name}</br>
<strong>email:</strong>${email}</br>
<strong>subject:</strong>${subject}</br>
<strong>message:</strong>${message}</br>
`;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOSTNAME,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PWD,
  },
  requireTLS: true,
});

export async function POST(req, res) {
  try {
    const body = await req.json();

    const envelop = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECEIVERS,
      subject: `Get in touch: ${body.subject}`,
      text: formatText(body),
      html: formatHtml(body),
      replyTo: `${body.email}`,
    };

    const info = await transporter.sendMail(envelop);

    console.info('Message sent: ', info.messageId);
    return Response.json({ success: true });
  } catch (error) {
    console.error('ERROR: ', error);
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
}
