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
const usersRoutes = require("./src/api/routes/user.routes")
const advRoutes = require("./src/api/routes/advertisement.routes")
const commentRouter = require("./src/api/routes/comments.routes")
const jobsRoutes = require("./src/api/routes/jobs.routes")
const companyRoutes = require("./src/api/routes/company.routes")


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
  apis: ["./AGO-BACK/src/**/*.js"]
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
app.use("/user", usersRoutes);
app.use("/comments", commentRouter);
app.use("/advertisement", advRoutes);
app.use("/jobs", jobsRoutes);
app.use("/company", companyRoutes);


const specs = swaggerJsDoc(options);

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
)

app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))

module.exports = app