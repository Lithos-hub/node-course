const argv = require("yargs")
  .option("t", {
    alias: "tabla",
    type: "number",
    demandOption: true,
    describe: "Toma la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    describe: "Muestra la tabla por consola"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    describe: "Establece el límite de la tabla"
  })
  .check((argv, options) => {
    if (isNaN(argv.t)) {
      throw "La tabla tiene que ser un número";
    }
    return true;
  }).argv;

  module.exports = argv;