const { createFile, asyncCreateFile } = require("./helpers/multiply");
const argv = require("./config/yargs");
const colors = require('colors');

console.clear();

// createFile(tabla)
//     .then(file => console.log(file, ' created successfully'))
//     .catch(err => console.log(err));

asyncCreateFile(argv.t, argv.l, argv.h)
  .then((file) => console.log(colors.magenta(file), "creada con éxito"))
  .catch((err) => console.log(err));
