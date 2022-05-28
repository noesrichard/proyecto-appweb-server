const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//Crear el servidor
const app = express();

//Conectar BD
conectarDB();
app.use(express.json());
app.use(cors());

app.use("/api/agencias", require("./routes/agencyRoutes"));
app.use("/api/accounts", require("./routes/accountRoutes"));

const port = process.env.PORT || 9000;

//Ruta inicial del servidor
app.get("/", (req, res) => {
	res.send("Server API REST");
});

//Levantar el servidor
app.listen(port, () => console.log("Server listengin on port: ", port));
