result = document.getElementById("time");

function timer (){
    let timetelling = new Date ();
    var time = timetelling.getHours() + ":" + timetelling.getMinutes() + ":" + timetelling.getSeconds();
    result.innerHTML = time;
}

setInterval (timer);
