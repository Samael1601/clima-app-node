const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6ef266a6784fce754b38fd72ed4e44e9&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}