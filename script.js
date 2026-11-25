function updateClock(){
    const clock=document.getElementById("clock");
    if(clock)
        clock.textContent=new Date().toLocaleString();
}
updateClock();
setInterval(updateClock,1000);