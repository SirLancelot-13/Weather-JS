import "./styles.css";
import {getWeather} from "./searchWeather.js";
import {updateDOM} from "./DOMStuff.js";
async function displayWeather(location){
        const weatherData=await (getWeather(location));
        updateDOM(weatherData);
    }
const location=document.getElementById("location");
const searchBtn=document.getElementById("fetchWeather");
searchBtn.addEventListener("click",(e)=>{
    const locationInput=location.value;
    displayWeather(locationInput);
})
const themeBtn=document.getElementById("theme");
const celsiusBtn=document.getElementById("celsius");
celsiusBtn.addEventListener("click",(e)=>{
    let tempDiv=document.getElementById("temp");
    let tempText=tempDiv.innerHTML;
    let tempMatch=tempText.match(/([-+]?[0-9]*\.?[0-9]+) °F/);
    if (tempMatch){
        let fahrenheit=parseFloat(tempMatch[1]);
        let celsius=((fahrenheit-32)*5)/9;
        tempDiv.innerHTML=`<p>Current Temperature</p><p style="font-size:40px">${celsius.toFixed(2)} °C</p>`;
    }
    else{
        tempMatch=tempText.match(/([-+]?[0-9]*\.?[0-9]+) °C/);
        if (tempMatch){
            let celsius=parseFloat(tempMatch[1]);
            let fahrenheit=(celsius*9)/5+32;
            tempDiv.innerHTML=`<p>Current Temperature</p><p style="font-size:40px">${fahrenheit.toFixed(2)} °F</p>`;
        }
    }
});