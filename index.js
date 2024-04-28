const express = require("express");
const app = express();
const PORT = 3000;



app.use(express.json());

app.use("/db",require("./routes/db"))

app.use("/categories",require("./routes/categories"))
app.use("/products",require("./routes/products"))
  

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))