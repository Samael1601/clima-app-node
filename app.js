const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getClima } = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// clima.getClima(40.7143, -74.006)
//     .then(console.log)
//     .catch(console.log);

//argv.direccion

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log);

const getInfo = async(direccion) => {
    try {

        const coord = await lugar.getLugarLatLng(direccion);
        const climaC = await clima.getClima(coord.lati, coord.lng);
        return `El clima de ${direccion} es de ${climaC}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

    // if (coord.length === 0) {
    //     throw new Error()
    // }
    // if (clima.length === 0) {
    //     throw new Error(`No se pudo determinar el clima de ${direccion}`)
    // }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);