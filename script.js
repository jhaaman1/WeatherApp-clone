const api_key = '3ded4426ccf7fc2739a1f31c8d76bd8f';
async function getData() {
    let city = document.getElementById('city').value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    console.log(url);

    // let url2 = (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${api_key}&units=metric`);
    // console.log(url2);
   

    try{
       let res = await fetch(url)
       let data = await res.json();
      
      //  console.log('data:',data);
       display(data)
    }catch(err){
        console.log(err);
    }
    var lon= data.coord.lon;
    var lat= data.coord.lat;

    try{
      let res2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${api_key}&units=metric`);
      let data2 = await res2.json();
      console.log('data2',data2);
      // let weekdata = data2.daily;
    
    }catch(err){
      console.log('err:',err);
    }
    

   
}

let box = document.getElementById('displayTemp');
function display(data){

  if(data === undefined){
    return;
  }
  
    let div = document.createElement('div')

    let name = document.createElement('h2');
    name.innerText = `Location: ${data.name}`;
    let tempLogo = document.createElement('img');
    tempLogo.setAttribute('id', 'logo')
    if(+(data.main.temp)>25){
      tempLogo.src='https://cdn0.iconfinder.com/data/icons/weather-forecast-17/128/forecast-weather_sun-clear-hot-512.png'
    }else{
      tempLogo.src="https://th.bing.com/th/id/OIP.sSjcnz4Ka_ExsdUtECLYWgHaHT?w=204&h=202&c=7&r=0&o=5&pid=1.7"
    }

    let temp = document.createElement('p');
    temp.innerText = `Temprature: ${data.main.temp}  c`;

    let temp_min = document.createElement('p')
    temp_min.innerText = `Temp Max: ${data.main.temp_min}`;

    let temp_max = document.createElement('p')
    temp_max.innerText = `Temp Min: ${data.main.temp_max}`;

    let humidity = document.createElement('p')
    humidity.innerText = `Humidity: ${data.main.humidity}`;

    let wind = document.createElement('p');
    wind.innerText = `Wind: ${data.wind.speed}`;

    let clouds = document.createElement('p');
    clouds.innerText = `Cloud: ${data.clouds.all}`;

    let sunrise = document.createElement('p')
    sunrise.innerText = `Sunrise: ${data.sys.sunrise}`;

    let sunset = document.createElement('p');
    sunset.innerText = `Sunset: ${data.sys.sunset}`;

    let map = document.createElement("iframe");
    map.src= `https://www.google.com/maps/embed/v1/place?q=${data.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;

    div.append(name,temp,tempLogo,humidity,wind,clouds,sunrise,sunset);
    box.append(div,map);
   
}


// function getWeather() {
//   navigator.geolocation.getCurrentPosition(success);

//   function success(position) {
//     let crd = position.coords;

//     console.log("Your current position is:");
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);

//     getDataLocation(crd.latitude, crd.longitude);
//   }
// }



// console.log(url2);