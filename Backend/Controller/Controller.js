const Caisses = require("../Model/Model");
exports.createcaisse = async (req, res) => {
  try {
    const caisse = new Caisses(req.body);
    await caisse.save();
    res.status(200).send({ message: "Caisse has been created!", caisse });
  } catch (error) {
    res.status(500).send({ message: "Caisse creation has failed!" });
  }
};
exports.getcaisse = async (req, res) => {
  try {
    const caisse = await Caisses.find();

    res
      .status(200)
      .send({ message: "Caisse has been found!", all_caisses: caisse }); //res.data in the payload for from the action
  } catch (error) {
    res.status(500).send({ message: "Caisse wasn't found!" });
  }
};
