var hourStick = document.querySelector("#hour")
var minuteStick =document.querySelector("#minute")
var secondStick =document.querySelector("#second")

setInterval( function setClock () {
    var currentDate = new Date()
    var seconds = currentDate.getSeconds()/60
    var minutes = (seconds+currentDate.getMinutes())/60
    var hours = (minutes+currentDate.getHours())/12
    setRota(secondStick,seconds)
    setRota(minuteStick,minutes)
    setRota(hourStick,hours)
}, 1000);


function setRota(element,rotations){
element.style.setProperty(`--rotation`,rotations*360)
}
setClock()