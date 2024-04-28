/*
npm init -y
npm i express mysql2
npm i -D nodemon

creas el index.js y creas el git ignore
te vas a los scripts y los rellenas (el start y el dev)
haces los require denrto del index.js:

const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json())

const mysql = require('mysql2')
const db = mysql.createConnection({
  host: "localhost", 
  user: "", 
  password: "", 
  database: "expressDB // esto simula el USE database del workbench, es decir, lo que haces para seleccionar la db una vez la has creado. esto no se añade hasta que no has creado la base de datos!!!!!!!!!
}")
db.connect()

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))  ------ el listen va siempre al final

*/


/**EXPLICAR EN EL README LO DEL database.example.js */

/** index.js + routes */


const express = require("express");
const app = express();
const PORT = 3000;



app.use(express.json());

app.use("/db",require("./routes/db"))

app.use("/categories",require("./routes/categories"))
app.use("/products",require("./routes/products"))
  

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))