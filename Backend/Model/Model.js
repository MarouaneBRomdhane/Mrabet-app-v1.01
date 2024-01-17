const mongoose = require("mongoose");

// Function to generate user schema for a specific collection

const generateUserSchema = new mongoose.Schema(
  {
    montantCheque: { type: Number, required: true },
    numeroCheque: { type: Number, required: true },
    chequeStatements: { type: Number, required: true },
    montantTpe: { type: Number, required: true },
    numeroTpe: { type: Number, required: true },
    tpeStatements: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Caisse1", generateUserSchema); // created a collection called "users" and the objects are the schema i added
