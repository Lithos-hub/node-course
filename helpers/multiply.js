const fs = require('fs');
const colors = require('colors');

// Método 1: con return new Promise
// const createFile = (tabla = 1) => {
//   return new Promise((resolve, reject) => {
//     console.log('=======================================');
//     console.log(' Tabla del: ', tabla);
//     console.log('=======================================');
//     let salida = '';

//     for (let i = 1; i <= 10; i++) {
//       salida += `${tabla} * ${i} = ${tabla * i}\n`;
//     }
//     fs.writeFileSync(`tabla-${tabla}.txt`, salida);
//     if (typeof tabla === 'number') {
//       resolve(`tabla-${tabla}.txt`);
//     } else {
//       reject(`El valor ${tabla} no es un número`);
//     }
//   });
// };

// Método 2: con async/await
const asyncCreateFile = async (tabla = 1, listar = false, hasta = 10) => {
    try {
      let salida, consola = '';
      
      for (let i = 1; i <= hasta; i++) {
        salida += `${tabla} ${colors.yellow('*')} ${i} ${colors.yellow('=')} ${tabla * i}\n`;
        consola += `${tabla} * ${i} = ${tabla * i}\n`;
      }
      if (listar) {
        console.log(colors.green('======================================='));
        console.log(colors.green(' Tabla del: '), colors.red(tabla));
        console.log(colors.green('======================================='));
        console.log(colors.bgBlack.cyan(salida));
      }

      fs.writeFileSync(`./output-files/tabla-${tabla}.txt`, consola);
      return `tabla-${tabla}.txt`;
    } catch (err) {
      throw err;
    }
};

module.exports = {
  // createFile,
  asyncCreateFile,
};
