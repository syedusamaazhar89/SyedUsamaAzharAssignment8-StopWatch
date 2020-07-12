var min = 0;
var sec = 0;
var millisec = 0;
var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMillisec = document.getElementById("millisec");
var interval;

function timer(){
    millisec++
    getMillisec.innerHTML = millisec;
    if (millisec >= 100){
        sec++
        getSec.innerHTML = sec;
        millisec = 0;
    }else if (sec >= 59){
        min++
        getMin.innerHTML = min;
        sec = 0;
    }

}


function start(){
    clearInterval(interval);
    interval = setInterval(timer,10);
    
}

function pause(){
    clearInterval(interval);
}

function reset(){
    min = 0;
    sec = 0;
    millisec = 0;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getMillisec.innerHTML = millisec;
    pause()
}


