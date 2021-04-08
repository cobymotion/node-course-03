
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')


console.log(argv);


crearArchivo(argv)
.then(msg=>console.log(msg, 'creado'))
.catch(err=>console.log(err));




