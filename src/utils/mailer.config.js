const nodemailer = require("nodemailer");

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_MAIL = process.env.EMAIL_MAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_MAIL,
    pass: EMAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});
module.exports.sendRegistrationEmail = (user) => {
  transporter
    .sendMail({
      from: "iron.learning.welcomer@gmail.com",
      to: user.email,
      subject: `Bienvenido a Restaumanía ${user.name}!`,
      html: `
        <h3>Bienvenido a AGO, tu plataforma para encontrar todo lo que necesitas para tener una vida cómoda</h3>
        <p> Por favor, pulsa aquí para acceder a la cuenta premium  <button> PremiuM</button> </p>
        `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};
