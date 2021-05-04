const birthDate = document.getElementById('userVal');
const sendBtn = document.getElementById('sendBtn');



function checkBday() {
    // console.log(birthDate);
    const currentDate = new Date();
    const birthDayDate = new Date(birthDate.value);
    const totalSeconds = (birthDayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    document.getElementById('days').innerText = (formatTime(days));
    document.getElementById('hours').innerText = (formatTime(hours));
    document.getElementById('minutes').innerText = (formatTime(minutes));
    document.getElementById('seconds').innerText = (formatTime(seconds));
    
}


// checkBday();
function formatTime(time){
    return time < 10 ? `0${time}` : time;
    clearInterval(checkBday);
}

sendBtn.addEventListener('click',function(){
    setInterval(checkBday, 1000);
});
