import axios from "axios";

// const options = {
//     method: 'GET',
//     url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2021-9-01',
//     params: {
//         currency: 'USD',
//         originplace: 'SFO sky'
//     },
//     headers: {
//         'x-rapidapi-key': 'd553a8e21fmshdd8718c602339fdp1a13e0jsn98c97b97fb7f',
//         'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
//     }
// };


const options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
    params: { query: 'Helsinki' },
    headers: {
        'x-rapidapi-key': '3a1fa08180msh4cc54ecb744d097p10b88fjsn7e00f4f1f764',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
};

const baseUrl = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/'

const fetchAirports = async (city) => {
    const airports = await axios.request({ ...options, params: { query: city } })
    return airports
}



const fetchFlights = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export default {
    fetchFlights,
    fetchAirports
}