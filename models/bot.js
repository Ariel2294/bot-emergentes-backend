const database = require("../config/database");
const db = database.makeDb();
module.exports = {
  create: async (data) => {
    const { mensaje } = data;
    let consulta;
    let coincidencia;
    let transaction;
    let mensaje_bot;
    let mensaje_user;
    try {
      transaction = await database.Transaction(db, async () => {
        coincidencia = await db.query(
          `SELECT COUNT(*) AS cantidad, IFNULL(respuesta,0) AS respuesta FROM preguntas WHERE  pregunta LIKE '%${mensaje}%'`
        );

        console.log(coincidencia);
        if (coincidencia[0].cantidad === 1) {
          mensaje_user = await db.query(
            "INSERT INTO mensajes(mensaje, tipo) VALUES (?,?)",
            [mensaje, 2]
          );
          mensaje_bot = await db.query(
            "INSERT INTO mensajes(mensaje, tipo) VALUES (?,?)",
            [coincidencia[0].respuesta, 1]
          );
        } else {
          mensaje_user = await db.query(
            "INSERT INTO mensajes(mensaje, tipo) VALUES (?,?)",
            [mensaje, 2]
          );
          mensaje_bot = await db.query(
            "INSERT INTO mensajes(mensaje, tipo) VALUES (?,?)",
            ["¡Lo siento, no puedo ayudarte!", 1]
          );
        }
      });
      console.log(transaction);
    } catch (error) {
      console.log(error);
      return error;
    }

    return mensaje_user !== undefined && mensaje_bot !== undefined
      ? mensaje_user
      : transaction;
  },
  findAllMessages: async () => {
    let data;
    let transaction;
    let data_final;

    try {
      transaction = await database.Transaction(db, async () => {
        data = await db.query(
          `SELECT mensaje, tipo, DATE_FORMAT(create_time,'%h:%i %p') as hora  FROM mensajes ORDER BY create_time DESC LIMIT 2`
        );

        if (!data.errno) {
          data_final = data.map((element) => {
            return {
              mensaje: element.mensaje,
              tipo: element.tipo,
              hora: element.hora,
            };
          });
        }
      });
    } catch (error) {
      return error;
    }

    return data !== undefined ? (!data.errno ? data_final : data) : transaction;
  },
};
