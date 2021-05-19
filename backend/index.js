const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//const port = process.env.PORT || 5000;
//Extended
const swaggerOptions = {
 swaggerDefinition:{
   info: {
     title: 'Numerical API',
     description: " Build by kaijeaw",
     severs: ["http://localhost:5678"]
   },
 },
 //route.js
 apis: ["index.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Route
const mySql = require("mysql");
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route
// app.get('/customers',(req,res) => {
//  res.send('COMPLETE')
// })
//
// app.listen(port, ()=> {
//   console.log('Sever listening on port ${port}');
// });

// server listenning
app.listen(5678, function() {
  console.log("server start is port: 5678");
});

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "Su0819485961",
  database: "getdata",
  multipleStatements: true,
});
//connect to database
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("---SUCCESSFUL---");
  }
});

//เรียกข้อมูลที่ต้องการดึงข้อมูล
/**
 * @swagger
 * /getdatabase:
 *  get:
 *   description: Use to request all customers
 *   responses:
 *     '200':
 *        description: A sucessful response
 */ 
app.get("/getdatabase", (req, res) => {
  connection.query("SELECT * FROM datanumer", (error, results) => {//showdata
    if (error) throw error;
    res.send(results);
  });

});

///////////////////////////////////


//นำข้อมูลเก็บไปในฐานข้อมูลหรือtableที่เราสร้างในdatabase
/**
 * @swagger
 * /postdatabase:
 *  post:
 *   description: Use to request all customers
 *   responses:
 *     '200':
 *        description: A sucessful response
 */ 
app.post("/postdatabase", (req, res) => {
  const numerdata = req.body.numerdata;//เรียกค่าจากหน้าบ้าน
  let command = "INSERT INTO datanumer SET ?";
  connection.query(command, numerdata, (error, results) => {
    if (!error) {
      console.log(numerdata);
      res.send(numerdata);
    } else {
      console.log(error);
      throw error;
    }
  });
});
//postข้อมูลจากหน้าเว็บหรือเก็บข้อมูลจากหน้าเว็บ
app.post("/postweb2", (req, res) => {
  const Eq = req.body.Eq;
  const XL = req.body.XL; //ดึงข้อมูลจากหน้าเว็บ
  const XR = req.body.XR;
  const email = req.body.email;
  let command = "INSERT INTO numer SET ?";
  connection.query(command, Eq, XL, XR, email, (error, results) => {
    if (!error) {
      console.log(results);
      res.send(results);
    } else {
      console.log(error);
      throw error;
    }
  });
});

//list customers last
/**
 * @swagger
 * /getweb:
 *  get:
 *   description: Use to request all customers
 *   responses:
 *     '200':
 *        description: A sucessful response
 */ 
app.get("/getweb", (req, res) => {//ดึงข้อมูลตัวล่าสุดที่เรากรอกข้อมูลลงไป
  connection.query(
    "SELECT * FROM datanumer ORDER BY id_numer DESC LIMIT 1",//DESCกลับหัวกลับหาง
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
}); 

