async function getWeather(location){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${API_KEY}&contentType=json`);
    const data = await response.json();
    return [data.currentConditions.conditions, data.currentConditions.temp, data.currentConditions.humidity, data.currentConditions.windspeed, data.currentConditions.feelslike];
}

export {getWeather};
