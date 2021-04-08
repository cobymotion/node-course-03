const fs = require('fs');
const colors  = require('colors')

const crearArchivo = async(argumentos) =>{

    const multiplicador = argumentos.b
    const l=argumentos.l 
    const h=argumentos.h

    let salida = consola = ''; 
    console.clear(); 
    console.log('==============================');
    console.log(colors.red(`=        TABLA DEL ${multiplicador}         =`));
    console.log('==============================');

    for(i=1; i<=h; i++){
        consola += `${multiplicador} ${'x'.green} ${i} = ${multiplicador*i}\n`;
        salida += `${multiplicador} x ${i} = ${multiplicador*i}\n`;
    }
    if(l)
        console.log(consola);
    
    const nameFile = `./salida/tabla-${multiplicador}.txt`;

    try {
        fs.writeFileSync(nameFile, salida);    
    } catch (error) {
        throw error;   
    }

    return nameFile;

}

module.exports = {
    crearArchivo
}