const apikey="f47d26674dca99759d0c62c903a2e935";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const search=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const WestherIcon=document.querySelector(".weather-icon");
async function checkWheather(city){
    const response=await fetch(apiurl+'&q='+ city +`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";


if(data.weather[0].main == "Clouds"){
    WestherIcon.src="clouds.png";
}
else if (data.weather[0].main=="Rain" || data.weather[0].description =="light rain") {
    WestherIcon.src="rain.png";
}
else if (data.weather[0].main=="Clear") 
{
    WestherIcon.src="sunny.png"
}
else if (data.weather[0].main=="Snow"){
    WestherIcon.src="snow.png"
}

}



searchbtn.addEventListener('click', ()=>{
    checkWheather(search.value);
});





