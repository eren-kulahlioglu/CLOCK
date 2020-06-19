let mute = false;



function turnClock() {

    const degree = 6;
    const time = new Date();

    var second = time.getSeconds() * degree;
    var minute = time.getMinutes() * degree;
    var hour = time.getHours() * 30 + (minute / 12);

    document.querySelector(".second").style.transform = 'rotate(' + second + 'deg)';
    document.querySelector(".minute").style.transform = 'rotate(' + minute + 'deg)';
    document.querySelector(".hour").style.transform = 'rotate(' + hour + 'deg)';

    tick();

}

function tick() {
    const audio = document.querySelector(`audio`);
    if (mute === false) { 
        audio.play(); 
    }  
}

function toggleMute() {
  if (mute === false) {
         mute = true 
         document.querySelector("button").className = "mute";
    } else {
        mute=false
        document.querySelector("button").className = "unmute";
          }

}


const muteButton = document.querySelector("button");
    muteButton.onclick = toggleMute;

    

turnClock();
setInterval(turnClock, 1000);


