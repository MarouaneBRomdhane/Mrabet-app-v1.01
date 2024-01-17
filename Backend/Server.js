const express = require("express");
const connectDB = require("./Configuration/Config");
const caisse_router = require("./Router/Router");
const app = express();
const port = 8017;
app.use(express.json());
connectDB();
app.use("/caisse", caisse_router);
app.listen(port, console.log("marwen is running"));
