
setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    var period="AM";

    if(hours>=12){
        period = "PM";
    }

    if(hours > 12){
        hours=hours-12;
    }

    if(sec < 10){
        sec = "0"+sec;
    }
    if(min < 10){
        min = "0"+min;
    }

    var clocktime = hours + ":" +min +":"+sec+" "+period;
    let clock = document.querySelector('#clock');
    clock.textContent=clocktime;

},1000)