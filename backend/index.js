const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const data = require("./data.json");
const app = express();
const port = process.env.PORT || 5600;
app.listen(5600, function() {
  console.log("server start is port: 5600");
  console.log("--------------")
});
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Swagger",
      description: "Sumatee Maleawna 2021",
      servers: ["http://localhost:5600"]
    }
  },
  // ['.routes/*.js']
  apis: ["index.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Routes
/**
 * @swagger
 * /data:
 *  get:
 *    tags : ["Swagger Get"]
 *    description: Data.Json 
 *    responses:
 *      '200':
 *        description: SUCESS
 */
/**
 * @swagger
 * /data/{name}:
 *  get:
 *    tags : ["Swagger Get.2 "]
 *    parameters:
 *       - name: name
 *         in: path
 *         required: true
 *    description: Data.Json 
 *    responses:
 *      '200':
 *        description: SUCESS
 */
app.get("/data",  (req, res) => {
  res.json(data);
});
app.get("/data/:name", (req, res) => {
  const resalt = data.filter(function(data){return data.name == req.params.name})
  console.log(resalt.length)
  if(resalt.length > 0){
    res.json(resalt[Math.floor(Math.random() * resalt.length)])
 }else{
  res.json({})
  }
});

