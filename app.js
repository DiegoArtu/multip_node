//REQUIRES
//const multiplicar = require('./multiplicar/multiplicar');
const { createFile, tableLimit, printName } = require('./multiplicar/multiplicar');

//const colors = require('colors');

const argv = require('yargs')
    .command('listar', 'Print in console a multTab', {
        base:{
            demand: true,
            alias: 'b'
        },
        limit:{
            alias: 'l',
            default: 5
        }
    })
    .command('create', 'create a multiTab file', {
        base:{
            demand: true,
            alias: 'b'
        },
        limit:{
            alias: 'l',
            default: 5
        }
    })
    .command( 'print', 'print name and last name', {
        name:{
            demand: true,
            alias: 'n'
        },
        lastname:{
            demand: true,
            alias: 'ln'
        }
    })
    .help()
    .argv;


let comand = argv._[0];

switch (comand) {
    case 'listar':
        tableLimit( argv.base, argv.limit );
        break;

    case 'create':
        createFile( argv.base, argv.limit ).then( file => console.log(`File created ${ file }`))
                               .catch( e => console.log( e ))
        break;

    case 'print':
        printName( argv.name, argv.lastname );
        break;
    default:
        console.log('COMAND ERROR');
    
}

//let param = argv[2];
//let base = param.split('=')[1];


//createFile(base).then((file) => {
//    console.log(file);
//})




