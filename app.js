const API_KEY = `1e1f979fc7eac6175c1c07e4eb5105a8`
const inputdata = document.getElementById("inputField");  
const showWeather = document.getElementById("showWeather");  

const searchData = async () => {  
  showWeather.innerHTML = `<div class="spinner-border text-primary" role="status">  
  <span class="visually-hidden">Loading...</span></div>`;  

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;

  const fetchData = await fetch(API_URL);
  const response = await fetchData.json();     
  
  console.log(response);

  return showData(response);
};  

const showData = (data) => {
  if (data.cod == "404") {  
    showWeather.innerHTML = `<h1>${data.message}</h1>`;
    return;
  } else {  
    showWeather.innerHTML = ` 
      <img width="80" src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">
      <h1>${Math.round(data.main.temp)}°C</h1>
      <h2>${data.name}</h2> 
      <h3>${data.weather[0].main}</h3>
      <img width="60" src=${`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUmOTc4_TMaFIVx8Ds5yDev_iOmw6MGYG3I70Txrd7uUzZvBQ2NkjKVkKi2vgoE1u8UU&usqp=CAU`}alt ="">
      <h3>${data.main.humidity + "%"}</h3>
      <img width="60" src=${`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxlSUlEj87SPLoZSzO16qH2WlQAQxUJ-yKg&s`}alt ="">
      <h3>${data.wind.speed + " km/h"}</h3>


      

      `;  
  }
};