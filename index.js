const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//Crear el servidor
const app = express();

//Conectar BD
conectarDB();
app.use(express.json());
app.use(cors());

//app.use("/api/agencias", require("./routes/agencyRoutes"));
app.use("/api/accounts", require("./routes/accountRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/income", require("./routes/incomeRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/booking", require("./routes/bookingRoutes"));
app.use("/api/piso", require("./routes/pisoRoutes"));
app.use("/api/room", require("./routes/roomRoutes"));

const port = process.env.PORT || 9000;

//Ruta inicial del servidor
app.get("/", (req, res) => {
	res.send("Server API REST");
});

//Levantar el servidor
app.listen(port, () => console.log("Server listengin on port: ", port));
