import rainImg from "./rain.jpg";
import clearImg from "./clear.jpg";

function updateDOM(weatherData){
    let temp = document.getElementById("temp");
    if (!temp){
        temp = document.createElement("div");
        temp.id = "temp";
        document.body.appendChild(temp);
    }
    
    let condition = document.getElementById("condition");
    if (!condition){
        condition = document.createElement("div");
        condition.id = "condition";
        document.body.appendChild(condition);
    }
    if (weatherData[0].includes("rain")){
        condition.style.backgroundImage = `url('${rainImg}')`;
        condition.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    else if (weatherData[0].includes("clear")){
        condition.style.backgroundImage = `url('${clearImg}')`;
        condition.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    temp.innerHTML = `<p>Current Temperature</p><p style="font-size:40px">${weatherData[1]} °F</p>`;
    condition.innerHTML = `<p>${weatherData[0]}</p><p><b>Humidity:</b> ${weatherData[2]}%</p><p><b>Windspeed:</b> ${weatherData[3]} mph</p><p><b>Feels like:</b> ${weatherData[4]} °F</p>`;
}

export {updateDOM};