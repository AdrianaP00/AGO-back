const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const path=require("path")


const {connect} = require("./src/utils/db")
connect()

const PORT = process.env.PORT;
const app = express();

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const chatRoutes = require("./src/api/routes/chat.routes")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://gym-back-node.vercel.app/",
        description: "My API Documentation",
      },
    ],
  },
  // This is to call all the file
  apis: [""],
};

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json());
app.use("/chat", chatRoutes);
//app.use()
//app.use()
//app.use()
//app.use()
//app.use()
//app.use()
/*
const specs = swaggerJsDoc(options);

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
)
*/
app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))

module.exports = app