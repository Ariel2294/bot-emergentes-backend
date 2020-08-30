const modelBot = require("../models/bot");
const isUndefinedOrNull = require("validate.io-undefined-or-null");

module.exports = () => {
  let bot = {};

  bot.insertOne = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
      if (!isUndefinedOrNull(data.mensaje)) {
        let result = await modelBot.create(data);

        if (result.errno) {
          res.status(500).json("Error de servidor");
        } else if (result.affectedRows > 0) {
          res.status(201).json("Se creo con exito");
        } else {
          res.status(400).json("No se pudo crear");
        }
      } else {
        res.status(400).json("faltan datos para realizar el proceso");
      }
    } catch (error) {
      console.log(error);
    }
  };

  bot.getAll = async (req, res) => {
    try {
      let result = await modelBot.findAllMessages();

      if (result.errno) {
        res.status(500).json("Error de servidor");
      } else if (result.length >= 0) {
        res.status(200).json(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return bot;
};
