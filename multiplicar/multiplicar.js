const fs = require('fs');
const colors = require('colors');

let printName = (name, lastname) => {


    console.log(`Your name is: ${name} ${lastname}`);

}

let tableLimit = (base, limit = 12) => {


    console.log('======================'.red);
    console.log(`===== Table ${ base } ========`.red);
    console.log('======================'.red);

    for (let i = 1; i <= limit; i++) {
        console.log( `${ base } * ${ i } = ${ base * i }`.rainbow);
    }

}

let createFile = ( base, limit) => {
    return new Promise( (resolve,reject) =>{

        if ( !Number(base) ) {
            console.log('Number require');
            return;
        }

        let data = '';
        for (let i = 1 ; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        fs.writeFile(`files/tabla-${ base }.txt`, data, (e) => {

            if (e) 
               reject(e);
            else 
               resolve( `table-${base}.txt created successfuly` )
        });

    });
}

module.exports = {
    createFile,
    tableLimit,
    printName
}








