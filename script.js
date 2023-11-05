const year = document.getElementById ('year');
const month = document.getElementById ('month');
const day = document.getElementById('day');
const hour = document.getElementById('hour').querySelector('p');
const minute = document.getElementById ('minute').querySelector('p');
const second = document.getElementById ('second').querySelector('p');
const image = document.getElementById('image');
const message = document.getElementById('message');

let date = null, dayValue, monthValue, yearValue;
let deg = 0;

setInterval( () => {
    date = new Date();

    dayValue = date.toLocaleDateString('default', {weekday: 'short'}).toString(); dayValue = noDot(dayValue)
    day.textContent = dayValue

    monthValue = date.toLocaleString('default', {month: 'short'}).toString(); monthValue = noDot(monthValue)
    month.textContent = monthValue

    yearValue = date.toLocaleString('default', {year: "numeric"}).toString();
    year.textContent = yearValue

    hour.textContent = date.getHours() + " H";
    minute.textContent = date.getMinutes() + " Min";
    second.textContent = date.getSeconds() + " Sec";


    let hourPercent = (360 / 24 * date.getHours().toString()) + (360 / 24 / 60 * date.getMinutes().toString()) + (360 / 24 / 60 / 60 * date.getSeconds().toString())
    let minutePercent = (360 / 60 * date.getMinutes().toString()) + (360/60/60 * date.getSeconds().toString())
    let secondPercent = (360 / 60 * date.getSeconds().toString())

    document.getElementById('hour').style.backgroundImage = "conic-gradient(var(--loadingColor) 0deg, var(--loadingColor) "+ hourPercent +"deg, transparent "+ hourPercent +"deg, transparent 360deg)"
    document.getElementById('minute').style.backgroundImage = "conic-gradient(var(--loadingColor) 0deg, var(--loadingColor) "+ minutePercent +"deg, transparent "+ minutePercent +"deg, transparent 360deg)"
    document.getElementById('second').style.backgroundImage = "conic-gradient(var(--loadingColor) 0deg, var(--loadingColor) "+ secondPercent +"deg, transparent "+ secondPercent +"deg, transparent 360deg)"

    if (date.getHours().toString() < 12) {
        image.style.backgroundImage = 'url("sun-sunrise-svgrepo-com.svg")'
        message.textContent = "Morning creator, hope u have a great day"
    }
    else if (date.getHours().toString() < 18){
        image.style.backgroundImage = 'url("sun-svgrepo-com.svg")'
        message.textContent = "Aft'noon creator, hope u good"
    }
    else{
        image.style.backgroundImage = 'url("moon-svgrepo-com.svg")'
        message.textContent = "Evening creator, hope u had a great day!"
    }

}, 1000)

function noDot (string){
    if (string.endsWith ('.')) {
        return string.substring(0, (string.length - 1));
    }
}