const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const comments = require("../api/models/comment.models");

const seedComments = [
    // Comentarios de Usuarios
    {
      text: "¡Excelente trabajo! Realmente impresionado con los resultados.",
      user: "64f049bc35414fa61febf527",
      company: [],
      jobs: [],
      img: "url_de_la_imagen1"
    },
    {
      text: "Fue un placer trabajar en este proyecto. Los resultados hablan por sí mismos.",
      user: "64f049bc35414fa61febf527",
      company: [],
      job: [],
      img: "url_de_la_imagen2"
    },
    {
      text: "El equipo hizo un trabajo increíble en esto. Muy contento con el producto final.",
      user: "64f049bc35414fa61febf527",
      company: [],
      jobs: [],
      img: "url_de_la_imagen3"
    },
    {
      text: "No puedo creer lo rápido que completaron el proyecto. Altamente recomendados.",
      user: "64f049bc35414fa61febf527",
      company: [],
      job: [],
      img: "url_de_la_imagen4"
    },
    {
      text: "¡Bravo! Estoy muy satisfecho con cómo se manejaron las cosas.",
      user: "64f049bc35414fa61febf527",
      company: [],
      job: [],
      img: "url_de_la_imagen5"
    },
  
    // Comentarios de Empresas
    {
      text: "Nuestro equipo se enorgullece de haber entregado este proyecto a tiempo.",
      user: "64f049bc35414fa61febf522",
      company: [],
      job: [],
      img: "url_de_la_imagen6"
    },
    {
      text: "La colaboración con nuestro cliente en este proyecto fue excepcional.",
      user: "64f049bc35414fa61febf523",
      company: [],
      job: [],
      img: "url_de_la_imagen7"
    },
    {
      text: "Este proyecto fue un verdadero hito para nosotros. ¡Gran trabajo en equipo!",
      user: "64f049bc35414fa61febf524",
      company: [],
      job: [],
      img: "url_de_la_imagen8"
    },
    {
      text: "El esfuerzo conjunto de nuestros empleados hizo posible este logro.",
      user: "64f049bc35414fa61febf525",
      company: [],
      job: [],
      img: "url_de_la_imagen9"
    },
    {
      text: "Nuestra experiencia en este proyecto refleja nuestra dedicación a la calidad.",
      user: "64f049bc35414fa61febf525",
      company: [],
      job: [],
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