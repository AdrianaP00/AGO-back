const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const advertisement = require("../api/models/advertisement.models");

const advertisementsSeed = [
    // Ofertas de Empresas
    {
      title: "Desarrollador Full Stack",
      company: "TechCo",
      description: "Buscamos un desarrollador Full Stack para trabajar en proyectos emocionantes...",
      salary: "Negociable",
      extra: "Beneficios adicionales incluidos",
      localization: "Ciudad A",
      skills: "JavaScript, React, Node.js, MongoDB",
      map: "64f332890873d39086ca8170",

    },
    {
      title: "Diseñador UX/UI",
      company: "DesignHub",
      description: "Estamos en busca de un diseñador creativo para crear experiencias de usuario asombrosas...",
      salary: "$50,000 - $60,000",
      extra: "Horario flexible",
      localization: "Ciudad B",
      skills: "Diseño de experiencia, Adobe Creative Suite",
      map: "64f332890873d39086ca8170",
    },
    {
      title: "Ingeniero de Software Senior",
      company: "InnovateTech",
      description: "Únete a nuestro equipo como ingeniero de software senior y trabaja en soluciones innovadoras...",
      salary: "Competitivo",
      extra: "Oportunidades de desarrollo profesional",
      localization: "Ciudad C",
      skills: "Java, Spring, AWS",
      map: "64f332890873d39086ca8170",
    },
    {
      title: "Especialista en Marketing Digital",
      company: "MarketingMasters",
      description: "Buscamos un especialista en marketing digital para impulsar nuestra presencia en línea...",
      salary: "$45,000 - $55,000",
      extra: "Bonos por desempeño",
      localization: "Ciudad D",
      skills: "Marketing digital, SEO, redes sociales",
      map: "64f332890873d39086ca8170",
    },
    {
      title: "Analista de Datos",
      company: "DataInsights",
      description: "Únete a nuestro equipo de análisis de datos y ayúdanos a descubrir ideas valiosas...",
      salary: "A convenir",
      extra: "Ambiente de trabajo colaborativo",
      localization: "Ciudad E",
      skills: "Análisis de datos, SQL, Python",
      map: "64f332890873d39086ca8170",
    },
    // Ofertas de Freelancers
    {
      title: "Desarrollador Web Freelance",
      company: "FreelanceTech",
      description: "Soy un desarrollador web freelance en busca de proyectos interesantes para trabajar...",
      salary: "Tarifa por proyecto",
      localization: "Remoto",
      skills: "HTML, CSS, JavaScript",
      map: "64f332890873d39086ca8170",
    },
    {
      title: "Diseñador Gráfico Independiente",
      company: "CreativityStudio",
      description: "Ofrezco servicios de diseño gráfico freelance para crear elementos visuales atractivos...",
      salary: "Por hora o por proyecto",
      localization: "Remoto",
      skills: "Diseño gráfico, Adobe Creative Suite",
      map: "64f332890873d39086ca8170",
    },
    {
      title: "Redactor de Contenidos Freelance",
      company: "Wordsmith",
      description: "Especializado en creación de contenido escrito para blogs, sitios web y más...",
      salary: "Tarifa por palabra",
      localization: "Remoto",
      skills: "Redacción, SEO",
      map:"64f332890873d39086ca8170",
    },
    {
      title: "Consultor de Marketing Digital",
      company: "DigitalStrat",
      description: "Ofrezco servicios de consultoría en marketing digital para impulsar tu presencia en línea...",
      salary: "Tarifa por proyecto",
      localization: "Remoto",
      skills: "Marketing digital, estrategia en línea",
      map: "64f332890873d39086ca8170",
    },
    {
      title: "Desarrollador de Aplicaciones Móviles",
      company: "MobileDev",
      description: "Soy un desarrollador de aplicaciones móviles freelance con experiencia en Android y iOS...",
      salary: "Negociable",
      localization: "Remoto",
      skills: "Desarrollo de aplicaciones móviles, Android, iOS",
      map: "64f332890873d39086ca8170",
    },
  ];
  

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allAdvertisement = await advertisement.find();
    if (allAdvertisement.length > 0) {
        await advertisement.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const advMap = advertisementsSeed.map((adv) => new advertisement(adv));
    await advertisement.insertMany(advMap);
    console.log("ok");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())