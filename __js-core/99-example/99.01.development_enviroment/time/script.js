
/***
* script.js
*/

//// js() function, show if the 
function js() {
	console.log(" 'script.js'  is loaded... ");
}

function pfh() {
var fh = document.getElementById("fhh").value;
var fm = document.getElementById("fmm").value;
  document.getElementById("fromTime").innerHTML = " " + fh + " : " + fm;
  return fh+":"+fm;
}

function tfh() {
var th = document.getElementById("thh").value;
var tm = document.getElementById("tmm").value;
  document.getElementById("toTime").innerHTML = " " + th + " : " + tm;
    return th+":"+tm;
}

function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
}

function sub() {
	
	var ft = pfh(); 
	var tt = tfh();
	var result;
	
	console.log("ft " + ft + " tt " + tt);
	
	result = diff(ft,tt);
    console.log(" result == " + result );
    document.getElementById("result").innerHTML = result;
}




