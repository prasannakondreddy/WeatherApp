//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

const key = '8018dbc01c467eee5444f1ab6cb8f2e8';

//Take input
const searchInputBox = document.querySelector(".inputBox");
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
        getWeatherReport(searchInputBox.value);
        document.querySelector(".weather-body").style.display="block";
    }
});

//Get report
function getWeatherReport(city){
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(api)
    .then(function(response){
        let data=response.json();
        return data;
    }).then(showReport);
}

//Show report
function showReport(data){
    console.log(data);
    let city=document.querySelector(".city");
    city.innerHTML=`${data.name},${data.sys.country}`;
    let temp= document.querySelector(".temp");
    temp.innerHTML=`${Math.floor(data.main.temp)}°<span>C</span>`;
    let maxMin =document.querySelector(".max-min");
    maxMin.innerHTML=`Min:${Math.floor(data.main.temp_min)}°<span>C</span> , Max: ${Math.ceil(data.main.temp_max)}°<span>C</span>`;
    let desc = document.querySelector(".description");
    desc.innerHTML=`${data.weather[0].main}`;
    //Date and Day
    let dateNumber= new Date().getDate();
    let month=new Date().getMonth();
    let year =new Date().getFullYear();
    
    
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Day= new Date().getDay();

    let date=document.querySelector(".date");
    date.innerHTML=` ${dateNumber}- ${month}- ${year}`;
    let day=document.querySelector(".day");
    day.innerHTML=`${days[Day]}`;
    //Bg change

    if(desc.textContent=='Clear'){
        document.body.style.backgroundImage="url('images/clr-sky.jpg')";
    }else if(desc.textContent=='Clouds'){
        document.body.style.backgroundImage="url('images/cloud.jpg')";
    }else if(desc.textContent=='Thunderstorm'){
        document.body.style.backgroundImage="url('images/thunderstorm.jpg')";
    }else if(desc.textContent=='Snow'){
        document.body.style.backgroundImage="url('images/snow.jpg')";
    }else if(desc.textContent=='Rain'|| 'Drizzle'){
        document.body.style.backgroundImage="url('images/rain.jpg')";
    }
    else if(desc.textContent=='Haze'||'Mist'||'Smoke'){
        document.body.style.backgroundImage="url('images/haze.jpg')";
    }


}
