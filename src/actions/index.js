import axios from 'axios';

const API_KEY = '32ece6338d9854c23ca165aef9f37ba3';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);

    console.log('Request:', request);

    //as we return a promise in the payload, the redux-promise
    //will wait for the promise to resolve and then 
    //create a new action of the same type and the
    //let it flow thru the reducers.
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}