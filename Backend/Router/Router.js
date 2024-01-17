const express = require("express");
const {
  createcaisse,
  getcaisse,
} = require("../Controller/Controller");
const caisse_router = express.Router();
caisse_router.post("/create", createcaisse);
caisse_router.get("/find", getcaisse);

module.exports = caisse_router;