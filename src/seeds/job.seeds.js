const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const jobs = require("../api/models/job.models");

const jobsArray = [
        {
            name: "Desarrollador Web Freelance",
            description: "Diseño y desarrollo de sitios web personalizados para clientes.",
            time: "Flexible",
            hourSalary: 30
        },
        {
            name: "Asistente Virtual a Tiempo Parcial",
            description: "Gestión de correos electrónicos, programación y tareas administrativas.",
            time: "20 horas/semana",
            hourSalary: 15
        },
        {
            name: "Profesor Particular de Matemáticas",
            description: "Impartir clases particulares de matemáticas a estudiantes de secundaria.",
            time: "10 horas/semana",
            hourSalary: 25
        },
        {
            name: "Diseñador Gráfico a Tiempo Completo",
            description: "Creación de diseños gráficos para medios impresos y digitales.",
            time: "40 horas/semana",
            hourSalary: 28
        },
        {
            name: "Cuidador de Mascotas a Domicilio",
            description: "Cuidado y atención a mascotas en sus hogares durante la ausencia de los dueños.",
            time: "Flexible",
            hourSalary: 20
        },
        {
            name: "Redactor de Contenidos Freelance",
            description: "Creación de artículos y contenido relevante para blogs y sitios web.",
            time: "Varía según la carga de trabajo",
            hourSalary: 0.08 // 8 centavos por palabra
        },
        {
            name: "Entrenador Personal de Fitness",
            description: "Diseño de programas de ejercicios personalizados y entrenamiento físico.",
            time: "25 horas/semana",
            hourSalary: 40
        },
        {
            name: "Chef a Domicilio",
            description: "Preparación y presentación de comidas gourmet en eventos y cenas privadas.",
            time: "Eventual",
            hourSalary: 50
        },
        {
            name: "Traductor de Documentos Técnicos",
            description: "Traducción precisa de documentos técnicos del inglés al español.",
            time: "20 horas/semana",
            hourSalary: 22
        },
        {
            name: "Consultor de Marketing Digital",
            description: "Asesoramiento en estrategias de marketing en línea para pequeñas empresas.",
            time: "30 horas/semana",
            hourSalary: 35
        }]

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allJobs = await jobs.find();
    if (allJobs.length > 0) {
        await jobs.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const jobsMap = jobsArray.map((job) => new jobs(job));
    await jobs.insertMany(jobsMap);
    console.log("ok");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())