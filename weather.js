
const API_KEY="77ae031bbc776de60bc27d69a12c4412";
function onGeoOk(position){
  const lat=position.coords.latitude;
  const lng=position.coords.longitude;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response=>response.json())
  .then((data)=>{
    const weatherContainer=document.querySelector('#weather img');
    const cityContatiner=document.querySelector('#weather span');
    const name=data.name;
    const weather=data.weather[0].icon;
    weatherContainer.src=`http://openweathermap.org/img/wn/${weather}@2x.png `
    cityContatiner.innerText=` / ${data.main.temp}°C/ ${name}`;
  });
}
function onGeoError(){
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);