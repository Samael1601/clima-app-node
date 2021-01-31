const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion)
        //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'c42743a6dcmshdd5ac7272c9baf6p11deefjsn88d7aaa6b262' }
    });

    const resp = await instance.get();

    if (resp.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    //const data = resp.coord;
    const ciudad = resp.data.name;
    const lng = resp.data.coord.lon;
    const lati = resp.data.coord.lat;


    return {
        ciudad,
        lati,
        lng
    }
}

module.exports = {
    getLugarLatLng
}