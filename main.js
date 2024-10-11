const playButton = document.querySelector(".play");
const lapButton = document.querySelector(".lap");
const resetButton = document.querySelector(".reset");
const clearButton = document.querySelector(".lap-clear");
const second = document.querySelector(".sec");
const minute = document.querySelector(".minute");
const centiSec = document.querySelector(".msec");
const laps = document.querySelector(".laps");
const bg = document.querySelector(".outer-circle");







let isPlay = false ; 
let isReset = false ;
let secCounter = 0 ;
let centiCounter = 0;
let minCounter = 0;
let lapItem = 0;
let sec;
let centi;
let min ; 



const toggleButton = () => {
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")

}

const play = () => {
    if (!isPlay && !isReset) {
        playButton.innerHTML = 'Pause'
        bg.classList.add("animation-bg");
        min = setInterval(() => {
            
        minute.innerText =` ${++minCounter} : `;

        }
        , 1000*60)

        sec = setInterval(() => {
            if(secCounter === 60){
                secCounter = 0;
            }
        second.innerHTML =`&nbsp; ${++secCounter} : `;
        }
        , 1000)

        centi = setInterval(() => {
            if (centiCounter === 100){
                centiCounter = 0;
            }
            centiSec.innerHTML =` &nbsp; ${++centiCounter}  `;
            }
            , 10)

        isPlay = true ;
        isReset = true;
    } else {
        playButton.innerHTML = 'Play'
        clearInterval(min)
        clearInterval(sec)
        clearInterval(centi)
        isPlay = false ;
        isReset = false ;
        bg.classList.remove("animation-bg");

    }
    toggleButton();
}

const reset = () => {
    isReset = true
    play()
    lapButton.classList.add("hidden")
    resetButton.classList.add("hidden")
    centiCounter = 0 ;
    secCounter = 0;
    minCounter = 0;
    second.innerHTML = '&nbsp;0 :'
    centiSec.innerHTML = '&nbsp;0'
    minute.innerHTML = '0 :'
}

const lap= () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class" , "lap-item");
  number.setAttribute("class" , "number");
  timeStamp.setAttribute("class" , "time-stamp")
  
  number.innerText = `#${++lapItem}`;
  timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;

  li.append(number , timeStamp);
  laps.append(li);

  clearButton.classList.remove("hidden");
}

const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem = 0 ;
}

playButton.addEventListener("click" , play )
resetButton.addEventListener("click" , reset)
lapButton.addEventListener("click" , lap)
clearButton.addEventListener("click" , clearAll)



