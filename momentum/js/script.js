
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
    //СЮДА ПИСАТЬ КОД СОХРАНЕНИЯ В ЛОКАЛ СТОРИДЖ И С СЕРОГО ЦВЕТА СДЕАТЬ БЕЛЫМ
    console.log('hello im blur');
   // document.querySelector('.name') = inputDiv;
    userName = inputDiv.value;
    myStorage.setItem('userName', userName);
  }

  async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
    console.log(quotes);
    console.log(res);

  }
 // getQuotes();


 const audio = new Audio();
 let isPlay = false;
 let playButton = document.querySelector('.play');



function playAudio() {
  audio.src = "https://cdn41.zvuk.com/track/stream?id=31608689&code=bJNV7F0UGrOedUBKkqhn-Q&expires=1635282717";// ссылка на аудио-файл;
  audio.currentTime = 0;

  if(isPlay) {
    audio.pause();
    isPlay = false;
    playButton.classList.remove  ('pause');
    playButton.classList.add('play');
  } 
   else {
    audio.play();
    isPlay = true;
    playButton.classList.remove  ('play');
    playButton.classList.add('pause');
   }
}


