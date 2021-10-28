let body = document.body;
let randNum = Math.ceil(Math.random() * 20);
randomBackgroundImage();
setGreeting();

let prevButton = document.querySelector('.slide-prev');
prevButton.addEventListener ('click' , prevImage);

let nextButton = document.querySelector('.slide-next');
nextButton.addEventListener ('click' , nextImage);

let inputDiv = document.querySelector('.name');
myStorage = window.localStorage;
let userName = myStorage.getItem('userName');
if(userName) { inputDiv.value = userName}   

const city = document.querySelector('.city');
myStorage1 = window.localStorage;
let cityName = myStorage1.getItem('cityName');
if(cityName) { city.value = cityName} 

function whatIsTimesOfDay() {
    let date = new Date; 
    let hours = date.getHours();
    if (hours < 6) return 'night'
    else if (hours < 12) return 'morning'
    else if(hours < 18) return 'day'
    else return 'evening'
}

function randomBackgroundImage () {
  let randString;
  +randNum < 10 ? randString = '0' + randNum : randString = randNum + ''; 
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/${randString}.jpg')`
}

function prevImage() {
  let randString;
  randNum -= 1;
  randNum === 0 ? randNum = 20 : randNum;
  +randNum < 10 ? randString = '0' + randNum : randString = randNum + '';
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/${randString}.jpg')`
}

function nextImage() {
  let randString;
  randNum += 1;
  randNum === 21 ? randNum = 1 : randNum;
  +randNum < 10 ? randString = '0' + randNum : randString = randNum + '';
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/${randString}.jpg')`
}

function setTime() {
  let date = new Date;
  let sec = date.getSeconds();
  +sec < 10 ? sec = '0' + sec : sec;
  let min = date.getMinutes();
  +min < 10 ? min = '0' + min : min;
  let hour = date.getHours();
  +hour < 10 ? hour = '0' + hour : hour;
  let timeBlock = document.querySelector('.time');
  timeBlock.innerHTML = `${hour}:${min}:${sec}`;
}
setInterval(setTime, 1000);
setTime()

function setDate() {
  let date = new Date;
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let weekDay = days [date.getDay() - 1];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let month = months [date.getMonth()];
  let dayOfMonth = date.getDate();
  let dateBlock = document.querySelector('.date');
  dateBlock.innerHTML = `${weekDay}, ${month} ${dayOfMonth}`;
}
setInterval(setDate, 1000);
setDate()

function setGreeting() {
    let greetingBlock = document.querySelector('.greeting');
    greetingBlock.innerHTML = `Good ${whatIsTimesOfDay()}, `;
}


inputDiv.onblur = function() {
  userName = inputDiv.value;
  myStorage.setItem('userName', userName);
}

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

city.addEventListener('change', getWeather)

city.onchange = function() {
    cityName = city.value;
    myStorage1.setItem('cityName', cityName);
  }

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=ab8bc03c3cdba48944e18867bbdeb6b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather()




//import { playLis }  from './playList.js'

//console.log(playLis);




















new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/20.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/01.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/02.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/03.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/04.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/05.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/06.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/07.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/08.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/09.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/10.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/11.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/12.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/13.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/14.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/15.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/16.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/17.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/18.jpg`;
new Image().src = `https://raw.githubusercontent.com/PASSAGYR69/stage1-tasks/assets/images/${whatIsTimesOfDay()}/19.jpg`;





