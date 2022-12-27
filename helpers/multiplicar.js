const fs = require("fs");

const colors = require('colors');

const crearArchivo = async ( base, listar, hasta) => {

    try {
        
        let salida = "";
        let consola = "";

        for(let i = 1; i <= hasta; ++i) {
            salida += `${i} x ${base} = ${i * base}\n`;
            consola += `${i} ${"x".green} ${base} ${"=".green} ${i * base}\n`;
        }

        if(listar) {
            console.log("====================".red);
            console.log("     Tabla del".red, colors.yellow(base) )
            console.log("====================".red);
            console.log(consola);
        }
        
        // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;

        //     return `tabla-${base}.txt`;
        
        //     //console.log(`tabla-${base}.txt creado`);
        // });
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}