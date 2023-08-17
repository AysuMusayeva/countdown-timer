const daysElement=document.getElementById('days')
const hoursElement=document.getElementById('hours')
const minutesElement=document.getElementById('minutes')
const secondsElement=document.getElementById('seconds')
const newYears='1 January 2024';
function countdown(){
    const currentDate=new Date();
    const newyearDate=new Date(newYears);
    const totalSecond=(newyearDate-currentDate)/1000;
    const days=Math.floor(totalSecond/3600/24);
    const hours=Math.floor(totalSecond/3600)%24;
    const minutes=Math.floor(totalSecond/60)%60;
    const seconds=Math.floor(totalSecond)%60;
    
daysElement.innerHTML=formatTime(days);
hoursElement.innerHTML=formatTime(hours);
minutesElement.innerHTML=formatTime(minutes);
secondsElement.innerHTML=formatTime(seconds);

function formatTime(time){
if(time<10){
    return (`0${time}`)
}
else{
    return time
}
}
    console.log(days,hours,minutes,seconds);
}
countdown();
setInterval(countdown,1000)