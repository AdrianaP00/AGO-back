const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const comments = require("../api/models/comments.models");

const seedComments = [
    // Comentarios de Usuarios
    {
      text: "¡Excelente trabajo! Realmente impresionado con los resultados.",
      user: "usuario1",
      company: [],
      jobs: ["trabajo1"],
      img: "url_de_la_imagen1"
    },
    {
      text: "Fue un placer trabajar en este proyecto. Los resultados hablan por sí mismos.",
      user: "usuario2",
      company: [],
      jobs: ["trabajo2"],
      img: "url_de_la_imagen2"
    },
    {
      text: "El equipo hizo un trabajo increíble en esto. Muy contento con el producto final.",
      user: "usuario3",
      company: [],
      jobs: ["trabajo3"],
      img: "url_de_la_imagen3"
    },
    {
      text: "No puedo creer lo rápido que completaron el proyecto. Altamente recomendados.",
      user: "usuario4",
      company: [],
      jobs: ["trabajo4"],
      img: "url_de_la_imagen4"
    },
    {
      text: "¡Bravo! Estoy muy satisfecho con cómo se manejaron las cosas.",
      user: "usuario5",
      company: [],
      jobs: ["trabajo5"],
      img: "url_de_la_imagen5"
    },
  
    // Comentarios de Empresas
    {
      text: "Nuestro equipo se enorgullece de haber entregado este proyecto a tiempo.",
      user: "",
      company: "empresa1",
      jobs: [],
      img: "url_de_la_imagen6"
    },
    {
      text: "La colaboración con nuestro cliente en este proyecto fue excepcional.",
      user: "",
      company: "empresa2",
      jobs: [],
      img: "url_de_la_imagen7"
    },
    {
      text: "Este proyecto fue un verdadero hito para nosotros. ¡Gran trabajo en equipo!",
      user: "",
      company: "empresa3",
      jobs: [],
      img: "url_de_la_imagen8"
    },
    {
      text: "El esfuerzo conjunto de nuestros empleados hizo posible este logro.",
      user: "",
      company: "empresa4",
      jobs: [],
      img: "url_de_la_imagen9"
    },
    {
      text: "Nuestra experiencia en este proyecto refleja nuestra dedicación a la calidad.",
      user: "",
      company: "empresa5",
      jobs: [],
      img: "url_de_la_imagen10"
    }
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allComments = await comments.find();
    if (allComments.length > 0) {
        await comments.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const commentsMap = seedComments.map((user) => new comments(user));
    await comments.insertMany(commentsMap);
    console.log("ok");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())